import * as S from './style';
import { KeyboardEvent, useState } from 'react';
import Input from 'components/Input/Input';
import useAddFirstCateMutate from 'quries/useAddFirstCateMutate';
import useUpdateFirstCateMutate from 'quries/useUpdateFirstCateMutate';
import useDeleteFirstCateMutate from 'quries/useDeleteFirstCateMutate';
// import useGetFistCateListQuery from 'quries/useGetFirstCateListQuery';

type CategoryType = {
  id: number;
  name: string;
  open: boolean;
};

function SecondCategoryBox() {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [categoryList, setCategoryList] = useState<CategoryType[]>([
    {
      id: 1,
      name: 'STUDY',
      open: false,
    },
    {
      id: 2,
      name: 'COOKING',
      open: false,
    },
    {
      id: 3,
      name: 'MUSIC',
      open: false,
    },
  ]);

  // const getFirstCategory = useGetFirstCateMutate();
  const addFirstCategory = useAddFirstCateMutate();
  const updateFirstCategory = useUpdateFirstCateMutate();
  const deleteFirstCategory = useDeleteFirstCateMutate();

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
      addFirstCategory.mutate({ name: inputText });
      setOpen(false);
    }
  };

  const editCategory = (id: number) => {
    const category_copy = [...categoryList];
    const selectedCategory = category_copy.find((cate) => cate.id === id);
    if (!selectedCategory) return;
    if (selectedCategory.open === true) return;
    selectedCategory.open = !selectedCategory.open;
    setCategoryList(category_copy);
  };

  const updateCategory = (id: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      updateFirstCategory.mutate({ id: id, name: inputText });
      editCategory(id);
    }
  };

  const deleteCategory = (id: number) => {
    deleteFirstCategory.mutate({ id: id });
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
        {categoryList.map((value) =>
          value.open ? (
            <Input
              key={value.id}
              inputSize="medium"
              shape="square"
              defaultValue={value.name}
              onChange={onChangeValue}
              onKeyDown={(e) => updateCategory(value.id, e)}
            />
          ) : (
            <S.Category key={value.id}>
              {value.name}
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
