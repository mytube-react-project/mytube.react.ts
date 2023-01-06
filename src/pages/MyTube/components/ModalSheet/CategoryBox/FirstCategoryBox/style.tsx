import { flexJustifyBetween } from 'libs/styles/common';
import styled from 'styled-components';

export const CategoryBox = styled.div`
  width: 218px;
  height: 400px;
  margin: 10px 20px 20px 20px;
  border-radius: 16px;
  background-color: #fff;

  input {
    margin: 2px 0;
  }
`;

export const Title = styled.div`
  cursor: pointer;
  border-radius: 16px 16px 0 0;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: #ffffff;
  background-color: #828282;
`;

export const Category = styled.div`
  ${flexJustifyBetween}
  padding: 5px;
  line-height: ${({ theme }) => theme.lineHeight.xLarge};
`;

export const CategoryButton = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const CategoryEditButton = styled.div`
  cursor: pointer;
  padding: 0 5px;
`;

export const CategoryDeleteButton = styled.div`
  cursor: pointer;
  padding: 0 5px;
`;
