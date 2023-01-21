import * as S from './style';
import { KeyboardEvent, useState, useEffect } from 'react';
import Input from 'components/Input/Input';
import useAddFirstCateMutate from 'queries/FirstCateQueries/useAddFirstCateMutate';
import useUpdateFirstCateMutate from 'queries/FirstCateQueries/useUpdateFirstCateMutate';
import useDeleteFirstCateMutate from 'queries/FirstCateQueries/useDeleteFirstCateMutate';
import useGetCateListQuery from 'queries/useGetAllCategory';
import { useQueryClient } from '@tanstack/react-query';
import { QueryKeyConsts } from 'libs/consts/qureyKey';
import { useRecoilState } from 'recoil';
import { firstCategoryIdAtom } from 'atoms/category/atom';
import Category from 'components/Category/Category';

type CategoryType = {
  id: number;
  name: string;
  children: [];
  open: boolean;
};

function FirstCategoryBox() {
  // FIXME: 커스텀 훅 분리 필요
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [firstCategoryId, setFirstCategoryId] = useRecoilState(firstCategoryIdAtom);

  const { data: categoryList } = useGetCateListQuery();
  const queryClient = useQueryClient();
  const addFirstCategory = useAddFirstCateMutate();
  const updateFirstCategory = useUpdateFirstCateMutate();
  const deleteFirstCategory = useDeleteFirstCateMutate();

  useEffect(() => {
    if (!categoryList) return;
    setFirstCategoryId(categoryList[0].id);
  }, []);

  const openInput = () => {
    setOpen(!open);
  };

  const onChangeValue = (event: any) => {
    const text = event.target.value.trim();
    setInputText(text);
  };

  const selectCategory = (id: number) => {
    setFirstCategoryId(id);
  };

  const addCategory = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing || !inputText) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      addFirstCategory.mutate({ name: inputText });
      setOpen(false);
    }
  };

  const editCategory = (id: number) => {
    const newCategoryList = categoryList.map((cate: any) => {
      return cate.id === id ? { ...cate, edit: !cate.edit } : { ...cate, edit: false };
    });
    queryClient.setQueryData([QueryKeyConsts.GET_ALL_CATE], newCategoryList);
  };

  const updateCategory = (id: number, inputText: string) => {
    updateFirstCategory.mutate(
      { id: id, name: inputText },
      {
        onSuccess: () => {
          queryClient.fetchQuery([QueryKeyConsts.GET_ALL_CATE]);
        },
      },
    );
  };

  const deleteCategory = (id: number) => {
    deleteFirstCategory.mutate(
      { id: id },
      {
        onSuccess: () => {
          queryClient.fetchQuery([QueryKeyConsts.GET_ALL_CATE]);
        },
      },
    );
  };

  return (
    <S.CategoryBox>
      <S.Title onClick={openInput}>First Category +</S.Title>
      <>
        {open && (
          <Input
            inputSize="medium"
            shape="square"
            onChange={onChangeValue}
            onKeyDown={addCategory}
          />
        )}
        {categoryList.map((value: any) => (
          <Category
            edit={value.edit}
            cate={value.name}
            id={value.id}
            key={value.id}
            editCategory={editCategory}
            updateCategory={updateCategory}
            deleteCategory={deleteCategory}
            selectCategory={selectCategory}
          />
        ))}
      </>
    </S.CategoryBox>
  );
}

export default FirstCategoryBox;
