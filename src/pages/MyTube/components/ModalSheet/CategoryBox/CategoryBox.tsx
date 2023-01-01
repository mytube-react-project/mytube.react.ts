import * as S from './style';
import { KeyboardEvent, useState } from 'react';
import Input from 'components/Input/Input';

export interface CategoryBoxType {
  title: string;
}

function CategoryBox({ title }: CategoryBoxType) {
  const [visible, setVisible] = useState(false);
  const [inputText, setInputText] = useState('');

  const openInput = () => {
    setVisible(!visible);
  };

  const onChange = (event: any) => {
    const text = event.target.value.trim();
    setInputText(text);
  };

  const addCategory = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!inputText) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log(inputText);
    }
  };

  return (
    <S.CategoryBox>
      <S.Title color="first" onClick={openInput}>
        {title} +
      </S.Title>
      {visible && (
        <Input inputSize="medium" shape="square" onChange={onChange} onKeyDown={addCategory} />
      )}
    </S.CategoryBox>
  );
}

export default CategoryBox;
