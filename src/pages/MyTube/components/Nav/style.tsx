import { flexAlignCenter, flexJustifyBetween } from 'libs/styles/common';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  ${flexJustifyBetween};
  align-items: center;
  margin: 15px 24px;

  div {
    ${flexAlignCenter}
    cursor: pointer;
  }

  p {
    margin-right: 5px;
  }
`;
