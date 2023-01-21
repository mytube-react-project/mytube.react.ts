import * as S from './style';
import { KeyboardEvent, useEffect } from 'react';
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
import useInput from 'hooks/useInput';
import useToggle from 'pages/MyTube/hooks/useToggle';

function FirstCategoryBox() {
  const [isOpen, isOpenAction] = useToggle(false);
  const [inputText, onChangeInput, setValue] = useInput('');
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

  const selectCategory = (id: number) => {
    setFirstCategoryId(id);
  };

  const addCategory = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing || !inputText) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      addFirstCategory.mutate(
        { name: inputText },
        {
          onSuccess: () => {
            queryClient.fetchQuery([QueryKeyConsts.GET_ALL_CATE]);
            isOpenAction();
          },
        },
      );
    }
    setValue('');
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
      <S.Title onClick={isOpenAction}>First Category +</S.Title>
      <>
        {isOpen && (
          <Input
            inputSize="medium"
            shape="square"
            onChange={onChangeInput}
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
