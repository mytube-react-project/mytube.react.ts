import styled from 'styled-components';
import backgroundImage from 'libs/assets/images/image2.png';
import { flexCenter } from 'libs/styles/common';

export const Wrapper = styled.div`
  background: url(${backgroundImage}) no-repeat right top;
  width: 100%;
  height: 580px;
  color: ${({ theme }) => theme.palette.white};
  position: relative;
`;

export const ButtonBox = styled.div`
  position: absolute;
  ${flexCenter}
  font-size: 12px;
  width: 48px;
  height: 100px;
  top: 10%;
  right: 0;
  background-color: ${({ theme }) => theme.palette.secondary};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 78%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: 1.2;

  & span {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }
`;
