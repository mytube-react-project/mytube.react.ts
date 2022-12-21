import { flexJustifyBetween } from 'libs/styles/common';
import styled from 'styled-components';

export const CategoryWrapper = styled.ul`
  width: 100%;
  max-width: 250px;
  padding-top: 15px;
  display: inline-block;
  margin-right: 24px;
  flex-grow: 1;

  li {
    padding-bottom: 15px;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const Title = styled.div`
  cursor: pointer;
  ${flexJustifyBetween};

  span {
    padding-bottom: 10px;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;
