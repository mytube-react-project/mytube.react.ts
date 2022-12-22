import { flexAlignCenter } from 'libs/styles/common';
import styled from 'styled-components';

export const FilterWrapper = styled.div`
  ${flexAlignCenter};
  justify-content: flex-end;
  margin: 15px 24px;

  button {
    padding-left: 15px;
    color: ${({ theme }) => theme.palette.fontSubColor};
  }
`;
