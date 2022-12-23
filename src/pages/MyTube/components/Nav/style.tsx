import { flexJustifyBetween } from 'libs/styles/common';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  ${flexJustifyBetween};
  align-items: center;
  margin: 15px 24px;

  button {
    color: ${({ theme }) => theme.palette.fontSubColor};
  }

  input {
    padding: 10px;
    margin-right: 15px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.palette.borderColor};
  }
`;
