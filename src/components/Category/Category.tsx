import Input from 'components/Input/Input';
import * as S from './style';
import { KeyboardEvent } from 'react';
import useInput from 'hooks/useInput';

const Category = (props: any) => {
  const { edit, cate, id, editCategory, updateCategory, deleteCategory } = props;
  const [cateInput, onChangeCateInput] = useInput(cate);

  const onEditCategory = () => {
    editCategory(props.id);
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

  if (edit) {
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
    <>
      <S.Category>
        {cate}
        <S.CategoryButton>
          <S.CategoryEditButton onClick={onEditCategory}>⚙️</S.CategoryEditButton>
          <S.CategoryDeleteButton onClick={onDeleteCategory}>🗑️</S.CategoryDeleteButton>
        </S.CategoryButton>
      </S.Category>
    </>
  );
};
export default Category;
