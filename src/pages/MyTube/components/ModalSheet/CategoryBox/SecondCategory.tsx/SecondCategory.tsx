import * as S from './style';
import { KeyboardEvent, useState, useEffect } from 'react';
import Input from 'components/Input/Input';
import useAddSecondCateMutate from 'queries/SecondCateQueries/useAddSecondCateMutate';
import useUpdateSecondCateMutate from 'queries/SecondCateQueries/useUpdateSecondCateMutate';
import useDeleteSecondCateMutate from 'queries/SecondCateQueries/useDeleteSecondCateMutate';
import { useRecoilState } from 'recoil';
import { firstCategoryIdAtom } from 'atoms/category/atom';
import useGetCateListQuery from 'queries/useGetAllCategory';
import { useQueryClient } from '@tanstack/react-query';
import useInput from 'pages/Main/hooks/useInput';

type CategoryType = {
  id: number;
  cate: string;
  open: boolean;
};

function SecondCategoryBox() {
  const [open, setOpen] = useState(false);
  const createInput = useInput('');
  const updateInput = useInput('');

  const [secondCategoryList, setSecondCategoryList] = useState([]);

  const [firstCategoryId, setFirstCategoryId] = useRecoilState(firstCategoryIdAtom);

  const { data: categoryList } = useGetCateListQuery();
  const qureyClient = useQueryClient();

  const addSecondCategory = useAddSecondCateMutate();
  const updateSecondCategory = useUpdateSecondCateMutate();
  const deleteSecondCategory = useDeleteSecondCateMutate();

  useEffect(() => {
    categoryList.find(
      (cate: any) => cate.id === firstCategoryId && setSecondCategoryList(cate.children),
    );
  }, [firstCategoryId]);

  const openInput = () => {
    setOpen(!open);
  };

  const addCategory = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing || !createInput.value) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      addSecondCategory.mutate({ id: firstCategoryId, cate: createInput.value });
      setOpen(false);
    }
  };

  const editCategory = (id: number) => {
    const result = secondCategoryList.map((cate: any) => {
      return cate.id === id ? { ...cate, edit: !cate.edit } : { ...cate, edit: false };
    });

    const newCategoryList = [...categoryList];
    newCategoryList.forEach((cate) => cate.id === firstCategoryId && (cate.children = result));

    console.log(newCategoryList);
    // qureyClient.setQueryData([QueryKeyConsts.GET_ALL_CATE], newCategoryList);
  };

  const updateCategory = (id: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      updateSecondCategory.mutate({ id: firstCategoryId, secondId: id, cate: updateInput.value });
      editCategory(id);
    }
  };

  const deleteCategory = (id: number) => {
    deleteSecondCategory.mutate({ id: firstCategoryId, secondId: id });
  };

  return (
    <S.CategoryBox>
      <S.Title onClick={openInput}>Second Category +</S.Title>
      <>
        {open && (
          <Input
            inputSize="medium"
            shape="square"
            onChange={createInput.onChange}
            onKeyDown={addCategory}
          />
        )}
        {secondCategoryList.map((value: any) =>
          value.edit ? (
            <Input
              key={value.id}
              inputSize="medium"
              shape="square"
              defaultValue={value.cate}
              onChange={updateInput.onChange}
              onKeyDown={(e) => updateCategory(value.id, e)}
            />
          ) : (
            <S.Category key={value.id}>
              {value.cate}
              <S.CategoryButton>
                <S.CategoryEditButton onClick={() => editCategory(value.id)}>
                  ⚙️
                </S.CategoryEditButton>
                <S.CategoryDeleteButton onClick={() => deleteCategory(value.id)}>
                  🗑️
                </S.CategoryDeleteButton>
              </S.CategoryButton>
            </S.Category>
          ),
        )}
      </>
    </S.CategoryBox>
  );
}

export default SecondCategoryBox;
