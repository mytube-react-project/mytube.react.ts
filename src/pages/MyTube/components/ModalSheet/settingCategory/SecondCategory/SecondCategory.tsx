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
import useInput from 'hooks/useInput';
import useToggle from 'pages/MyTube/hooks/useToggle';
import { FirstCategoryType, SecondCategoryType } from 'types/Category';

function SecondCategory() {
  const [isOpen, isOpenAction] = useToggle(false);
  const [inputText, onChangeInput, setValue] = useInput('');
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

  const addCategory = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing || !inputText) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      addSecondCategory.mutate(
        { id: firstCategoryId, cate: inputText },
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
    const new_categoryList = [...categoryList];
    const selectSecondCate = new_categoryList.find(
      (firstCate: FirstCategoryType) => firstCate.id === firstCategoryId,
    ).children;

    for (const secondCate of selectSecondCate) {
      if (secondCate.id === id) {
        secondCate.isSelected = true;
      } else {
        secondCate.isSelected = false;
      }
    }
    queryClient.setQueryData(
      [QueryKeyConsts.GET_ALL_CATE],
      (new_categoryList: FirstCategoryType | undefined) => {
        setIsSucceeded(true);
        return new_categoryList;
      },
    );
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
      <S.Title onClick={isOpenAction}>Second Category +</S.Title>
      <>
        {isOpen && (
          <Input
            inputSize="medium"
            shape="square"
            onChange={onChangeInput}
            onKeyDown={addCategory}
          />
        )}
        {categoryList &&
          categoryList
            .find((firstCate: FirstCategoryType) => firstCate.id === firstCategoryId)
            ?.children.map((secondCate: SecondCategoryType) => (
              <Category
                id={secondCate.id}
                key={secondCate.id}
                categoryName={secondCate.cate}
                editCategory={editCategory}
                updateCategory={updateCategory}
                deleteCategory={deleteCategory}
                isSelected={secondCate.isSelected}
              />
            ))}
      </>
    </S.CategoryBox>
  );
}

export default SecondCategory;
