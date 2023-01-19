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
import useInput from 'pages/Main/hooks/useInput';

type CategoryType = {
  id: number;
  name: string;
  children: [];
  open: boolean;
};

function FirstCategoryBox() {
  // FIXME: 커스텀 훅 분리 필요
  const [open, setOpen] = useState(false);
  const createInput = useInput('');
  const updateInput = useInput('');

  const [firstCategoryId, setFirstCategoryId] = useRecoilState(firstCategoryIdAtom);

  const { data: categoryList } = useGetCateListQuery();
  const qureyClient = useQueryClient();
  const addFirstCategory = useAddFirstCateMutate();
  const updateFirstCategory = useUpdateFirstCateMutate();
  const deleteFirstCategory = useDeleteFirstCateMutate();

  useEffect(() => {
    if (!categoryList) return;
    setFirstCategoryId(categoryList[0].id);
  }, [categoryList]);

  const openInput = () => {
    setOpen(!open);
  };

  const clickHandler = (id: number) => {
    setFirstCategoryId(id);
  };

  const addCategory = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing || !createInput.value) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      addFirstCategory.mutate({ name: createInput.value });
      setOpen(false);
    }
  };

  const editCategory = (id: number) => {
    const newCategoryList = categoryList.map((cate: any) => {
      return cate.id === id ? { ...cate, edit: !cate.edit } : { ...cate, edit: false };
    });
    qureyClient.setQueryData([QueryKeyConsts.GET_ALL_CATE], newCategoryList);
  };

  const updateCategory = (id: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      updateFirstCategory.mutate({ id: id, name: updateInput.value });
    }
  };

  const deleteCategory = (id: number) => {
    deleteFirstCategory.mutate({ id: id });
  };

  return (
    <S.CategoryBox>
      <S.Title onClick={openInput}>First Category +</S.Title>
      <>
        {open && (
          <Input
            inputSize="medium"
            shape="square"
            onChange={createInput.onChange}
            onKeyDown={addCategory}
          />
        )}
        {categoryList.map((value: any) =>
          value.edit ? (
            <Input
              key={value.id}
              inputSize="medium"
              shape="square"
              defaultValue={value.name}
              onChange={updateInput.onChange}
              onKeyDown={(e) => updateCategory(value.id, e)}
            />
          ) : (
            <S.Category key={value.id}>
              <S.CategoryName onClick={() => clickHandler(value.id)}>{value.name}</S.CategoryName>
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

export default FirstCategoryBox;
