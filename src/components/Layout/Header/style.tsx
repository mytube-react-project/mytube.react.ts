import { absoluteCenter, flexAlignCenter } from 'libs/styles/common';
import styled from 'styled-components';

interface isLoginProps {
  isLogin: boolean;
}

export const HeaderWrapper = styled.div<isLoginProps>`
  width: 100%;
  height: 58px;
  background: ${({ theme }) => theme.palette.secondary};
  color: ${({ theme }) => theme.palette.fontColor};
  position: relative;
  display: flex;
  justify-content: ${({ isLogin }) => (isLogin ? 'space-between' : 'flex-end')};
  align-items: center;
  padding: 0 2rem;
`;

export const Title = styled.div<isLoginProps>`
  justify-content: ${({ isLogin }) => (isLogin ? 'start' : 'center')};
  ${({ isLogin }) => !isLogin && absoluteCenter};
`;

export const ModeBtn = styled.div`
  cursor: pointer;
  ${flexAlignCenter}

  &:hover {
    transform: scale(1.2);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;
