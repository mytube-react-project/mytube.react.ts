import Input from 'components/Input/Input';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import styled from 'styled-components';

function SearchBar() {
  const [inputText, setInputText] = useState('');

  const onChangeInput = (event: any) => {
    const text = event.target.value.trim();
    setInputText(text);
  };

  const onSearch = () => {
    if (inputText === '') {
      // alret 띄우기
    } else {
      // api 연동
    }
  };

  return (
    <SearchBarWrapper>
      <Input shape="square" inputSize="medium" onChange={onChangeInput} />
      <button onClick={onSearch}>
        <SearchIcon />
      </button>
    </SearchBarWrapper>
  );
}

export default SearchBar;

export const SearchBarWrapper = styled.div`
  input {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.palette.borderColor};
  }

  button {
    color: ${({ theme }) => theme.palette.fontSubColor};
  }
`;
