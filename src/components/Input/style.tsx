import { InputProps } from './Input';
import styled, { css } from 'styled-components';

const inputSizeCSS = {
  small: css`
    width: 102px;
    height: 14px;
    font-size: ${({ theme }) => theme.fontSize.smail};
  `,

  medium: css`
    width: 218px;
    height: 26px;
    font-size: ${({ theme }) => theme.fontSize.smail};
  `,

  large: css`
    width: 269px;
    height: 31px;
    font-size: ${({ theme }) => theme.fontSize.smail};
  `,

  xLarge: css`
    width: 322px;
    height: 45px;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.fontSize.smail};
  `,

  xxLarge: css`
    width: 488px;
    height: 55px;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.fontSize.small};
  `,

  full: css`
    width: 100%;
    height: 55px;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.fontSize.small};
  `,
};
const shapeCSS = {
  square: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 16px;
  `,
};

export const Input = styled.input<InputProps>`
  ${({ inputSize }) => inputSizeCSS[inputSize]}
  ${({ shape }) => shapeCSS[shape]}
  border: 1px solid #999;
  padding-left: 1rem;
  background-color: #fff;
`;
