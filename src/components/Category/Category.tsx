import Input from 'components/Input/Input';
import * as S from './style';
import { KeyboardEvent } from 'react';
import useInput from 'hooks/useInput';

interface CategoryProps {
  id: any;
  categoryName: string;
  isSelected: boolean;
  selectCategory?: any;
  editCategory: any;
  updateCategory: any;
  deleteCategory: any;
}

const Category = ({
  id,
  categoryName,
  isSelected,
  selectCategory,
  editCategory,
  updateCategory,
  deleteCategory,
}: CategoryProps) => {
  const [cateInput, onChangeCateInput] = useInput(categoryName);

  const onSelectCategory = () => {
    if (!selectCategory) return;
    selectCategory(id);
  };

  const onEditCategory = () => {
    editCategory(id);
  };

  const onUpdateCategory = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      updateCategory(id);
    }
  };

  const onDeleteCategory = () => {
    deleteCategory(id);
  };

  if (isSelected) {
    return (
      <Input
        inputSize="medium"
        shape="square"
        value={cateInput}
        onKeyDown={onUpdateCategory}
        onChange={onChangeCateInput}
      />
    );
  }

  return (
    <S.Category>
      <div onClick={onSelectCategory}>{categoryName}</div>
      <S.CategoryButton>
        <S.CategoryEditButton onClick={onEditCategory}>⚙️</S.CategoryEditButton>
        <S.CategoryDeleteButton onClick={onDeleteCategory}>🗑️</S.CategoryDeleteButton>
      </S.CategoryButton>
    </S.Category>
  );
};
export default Category;
