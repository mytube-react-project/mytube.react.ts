import { flexAlignCenter } from 'libs/styles/common';
import styled from 'styled-components';

export const FilterWrapper = styled.div`
  ${flexAlignCenter};
  justify-content: flex-end;
  margin: 15px 24px;

  div {
    margin-left: 15px;
    padding-bottom: 2px;
    color: ${({ theme }) => theme.palette.fontSubColor};
    cursor: pointer;
  }

  .select {
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.palette.fontSubColor};
  }
`;
