import * as S from './style';
import { KeyboardEvent, useState, useEffect } from 'react';
import Input from 'components/Input/Input';
import useAddSecondCateMutate from 'queries/SecondCateQueries/useAddSecondCateMutate';
import useUpdateSecondCateMutate from 'queries/SecondCateQueries/useUpdateSecondCateMutate';
import useDeleteSecondCateMutate from 'queries/SecondCateQueries/useDeleteSecondCateMutate';
import { useRecoilValue } from 'recoil';
import { firstCategoryIdAtom } from 'atoms/category/atom';
import useGetCateListQuery from 'queries/useGetAllCategory';
import { useQueryClient } from '@tanstack/react-query';
import Category from 'components/Category/Category';
import { QueryKeyConsts } from 'libs/consts/qureyKey';

function SecondCategoryBox() {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isSucceeded, setIsSucceeded] = useState(false);

  const firstCategoryId = useRecoilValue(firstCategoryIdAtom);

  const { data: categoryList } = useGetCateListQuery();
  const queryClient = useQueryClient();

  const addSecondCategory = useAddSecondCateMutate();
  const updateSecondCategory = useUpdateSecondCateMutate();
  const deleteSecondCategory = useDeleteSecondCateMutate();

  useEffect(() => {
    if (!categoryList) return;
  }, [isSucceeded]);

  const openInput = () => {
    setOpen(!open);
  };

  const onChangeValue = (event: any) => {
    const text = event.target.value.trim();
    setInputText(text);
  };

  const addCategory = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing || !inputText) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      addSecondCategory.mutate({ id: firstCategoryId, cate: inputText });
      setOpen(false);
    }
  };

  const editCategory = (id: number) => {
    const new_categoryList = [...categoryList];
    const selectSecondCate = new_categoryList.find(
      (cate: any) => cate.id === firstCategoryId,
    ).children;

    for (const secondCate of selectSecondCate) {
      if (secondCate.id === id) {
        secondCate.edit = true;
      } else {
        secondCate.edit = false;
      }
    }
    queryClient.setQueryData([QueryKeyConsts.GET_ALL_CATE], (new_categoryList: any) => {
      setIsSucceeded(true);
      return new_categoryList;
    });
  };

  const updateCategory = (id: number, inputText: string) => {
    updateSecondCategory.mutate(
      { id: firstCategoryId, secondId: id, cate: inputText },
      {
        onSuccess: () => {
          queryClient.fetchQuery([QueryKeyConsts.GET_ALL_CATE]);
        },
      },
    );
    editCategory(id);
  };

  const deleteCategory = (id: number) => {
    deleteSecondCategory.mutate(
      { id: firstCategoryId, secondId: id },
      {
        onSuccess: () => {
          queryClient.fetchQuery([QueryKeyConsts.GET_ALL_CATE]);
        },
      },
    );
  };

  return (
    <S.CategoryBox>
      <S.Title onClick={openInput}>Second Category +</S.Title>
      <>
        {open && (
          <Input
            inputSize="medium"
            shape="square"
            onChange={onChangeValue}
            onKeyDown={addCategory}
          />
        )}
        {categoryList &&
          categoryList
            .find((cate: any) => cate.id === firstCategoryId)
            ?.children.map((secondCate: any) => (
              <Category
                edit={secondCate.edit}
                cate={secondCate.cate}
                id={secondCate.id}
                key={secondCate.id}
                editCategory={editCategory}
                updateCategory={updateCategory}
                deleteCategory={deleteCategory}
              />
            ))}
      </>
    </S.CategoryBox>
  );
}

export default SecondCategoryBox;
