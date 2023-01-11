import * as S from './style';
import { KeyboardEvent, useState } from 'react';
import Input from 'components/Input/Input';
import useAddSecondCateMutate from 'queries/SecondCateQueries/useAddSecondCateMutate';
import useUpdateSecondCateMutate from 'queries/SecondCateQueries/useUpdateSecondCateMutate';
import useDeleteSecondCateMutate from 'queries/SecondCateQueries/useDeleteSecondCateMutate';
import { useRecoilState } from 'recoil';
import { firstCategoryIdAtom } from 'atoms/category/atom';

type CategoryType = {
  id: number;
  cate: string;
  open: boolean;
};

function SecondCategoryBox() {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState('');

  const [firstCategoryId, setFirstCategoryId] = useRecoilState(firstCategoryIdAtom);
  const [secondCategoryList, setSecondCategoryList] = useState<CategoryType[]>([]);

  const addSecondCategory = useAddSecondCateMutate();
  const updateSecondCategory = useUpdateSecondCateMutate();
  const deleteSecondCategory = useDeleteSecondCateMutate();

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
      updateSecondCategory.mutate({ id: firstCategoryId, secondId: id, cate: inputText });
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
