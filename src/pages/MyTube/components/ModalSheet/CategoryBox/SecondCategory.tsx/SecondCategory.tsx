import * as S from './style';
import { KeyboardEvent, useEffect, useState } from 'react';
import Input from 'components/Input/Input';
import useGetSecondCateListQuery from 'queries/SecondCateQueries/useGetSecondCateListQuery';
import useAddSecondCateMutate from 'queries/SecondCateQueries/useAddSecondCateMutate';
import useUpdateSecondCateMutate from 'queries/SecondCateQueries/useUpdateSecondCateMutate';
import useDeleteSecondCateMutate from 'queries/SecondCateQueries/useDeleteSecondCateMutate';

type CategoryType = {
  id: number;
  cate: string;
  open: boolean;
};

function SecondCategoryBox() {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [secondCategoryList, setSecondCategoryList] = useState<CategoryType[]>([]);

  const firstCateId = 14363;
  const getSecondCategory = useGetSecondCateListQuery(firstCateId);
  const addSecondCategory = useAddSecondCateMutate();
  const updateSecondCategory = useUpdateSecondCateMutate();
  const deleteSecondCategory = useDeleteSecondCateMutate();

  const { data } = getSecondCategory;

  useEffect(() => {
    if (!data) return;
    setSecondCategoryList([...data]);
  }, [data]);

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
      addSecondCategory.mutate({ id: firstCateId, cate: inputText });
      setOpen(false);
    }
  };

  const editCategory = (id: number) => {
    const category_copy = [...secondCategoryList];
    const selectedCategory = category_copy.find((cate) => cate.id === id);
    if (!selectedCategory) return;
    category_copy.forEach((cate) => {
      cate.open = selectedCategory.id !== id && false;
    });
    selectedCategory.open = !selectedCategory.open;
    setSecondCategoryList(category_copy);
  };

  const updateCategory = (id: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      updateSecondCategory.mutate({ id: firstCateId, secondId: id, cate: inputText });
      editCategory(id);
    }
  };

  const deleteCategory = (id: number) => {
    deleteSecondCategory.mutate({ id: firstCateId, secondId: id });
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
        {secondCategoryList.map((value) =>
          value.open ? (
            <Input
              key={value.id}
              inputSize="medium"
              shape="square"
              defaultValue={value.cate}
              onChange={onChangeValue}
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
