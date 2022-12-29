import { flexJustifyBetween } from 'libs/styles/common';
import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  max-width: 250px;
  margin-right: 24px;
  margin-left: 8px;
  width: 25%;
  float: left;

  .firstCategory {
    margin-top: 10px;
    ${flexJustifyBetween};
  }
`;
