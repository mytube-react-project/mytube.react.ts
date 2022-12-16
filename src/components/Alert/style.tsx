import styled from 'styled-components';
import { flexAlignCenter } from 'libs/styles/common';
import { fadein } from 'libs/styles/keyframe';

export const Wrapper = styled.div`
  position: fixed;
  top: 10%;
  left: 35%;
  width: 30vw;
  padding: 0 32px;
  border-radius: 10px;
  background-color: #f5f5f5;
  color: ${({ theme }) => theme.palette.fontColor};
  text-align: center;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  animation: ${fadein} 0.5s;
  z-index: 1000;
`;

export const Header = styled.div`
  height: 62px;
  ${flexAlignCenter};
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.primary};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.medium};

  & > span {
    cursor: pointer;
    :hover {
      transform: scale(1.2);
    }
  }
`;
export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 16px 0 32px 0;
`;
export const Button = styled.div`
  padding-bottom: 16px;
  display: flex;
  justify-content: flex-end;

  & button {
    background-color: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.fontSubColor};
    width: 96px;
    padding: 16px;
    margin-right: 8px;

    :hover {
      opacity: 0.8;
    }
  }
`;
