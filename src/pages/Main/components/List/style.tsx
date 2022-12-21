import { flexCenter } from 'libs/styles/common';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 880px;
  ${flexCenter}
  font-size: ${({ theme }) => theme.fontSize.xLarge};
`;
