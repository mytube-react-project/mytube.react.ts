import styled from 'styled-components';
import { absoluteCenter, flexAlignCenter, flexJustifyBetween } from 'libs/styles/common';

export const Sheet = styled.div`
  ${absoluteCenter};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 555px;
  height: 501px;
  border-radius: 16px;
  background-color: #d9d9d9;
  color: #000;
`;

export const SheetHeader = styled.div`
  ${flexJustifyBetween};
  align-items: center;
  padding: 10px;

  p,
  button {
    padding: 10px;
  }
`;

export const SheetContent = styled.div`
  ${flexJustifyBetween};
  align-items: center;
`;

export const CategoryBox = styled.div`
  width: 207px;
  height: 400px;
  margin: 10px 20px 20px 20px;
  border-radius: 16px;
  background-color: #fff;
`;

export const Title = styled.div`
  border-radius: 16px 16px 0 0;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${(props) => props.color === 'first' && '#FFFFFF'};
  background-color: ${(props) => (props.color === 'first' ? '#828282' : '#C2C2C2')};
`;

export const CategoryList = styled.div``;
