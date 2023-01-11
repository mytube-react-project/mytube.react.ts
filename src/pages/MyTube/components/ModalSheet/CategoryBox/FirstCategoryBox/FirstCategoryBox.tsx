import * as S from './style';
import { KeyboardEvent, useState, useEffect } from 'react';
import Input from 'components/Input/Input';
import useAddFirstCateMutate from 'queries/FirstCateQueries/useAddFirstCateMutate';
import useUpdateFirstCateMutate from 'queries/FirstCateQueries/useUpdateFirstCateMutate';
import useDeleteFirstCateMutate from 'queries/FirstCateQueries/useDeleteFirstCateMutate';
import { useRecoilState } from 'recoil';
import { firstCategoryIdAtom, allCategoryAtom } from 'atoms/category/atom';

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
  const [allCategory, setAllCategory] = useRecoilState(allCategoryAtom);

  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);

  const addFirstCategory = useAddFirstCateMutate();
  const updateFirstCategory = useUpdateFirstCateMutate();
  const deleteFirstCategory = useDeleteFirstCateMutate();

  useEffect(() => {
    setCategoryList([...allCategory]);
  }, []);

  const openInput = () => {
    setOpen(!open);
  };

  const onChangeValue = (event: any) => {
    const text = event.target.value.trim();
    setInputText(text);
  };

  const clickHandler = (id: number) => {
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

  // FIXME: recoil로 open 데이터 관리하기
  const editCategory = (id: number) => {
    const category_copy = [...categoryList];
    const selectedCategory = category_copy.find((cate) => cate.id === id);
    if (!selectedCategory) return;

    // category_copy.forEach((cate) => {
    //   cate.open = selectedCategory.id !== id && false;
    // });
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
