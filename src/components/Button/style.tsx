import { ButtonProps } from './Button';
import styled, { css } from 'styled-components';

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.fontColor};
  `,
  text: css`
    background-color: transparent;
    color: ${({ theme }) => theme.palette.fontColor};
    font-weight: bold;
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

const sizeCSS = {
  small: css`
    width: 92px;
    height: 55px;
    font-size: ${({ theme }) => theme.fontSize.medium};
  `,

  medium: css`
    width: 148px;
    height: 62px;
    font-size: ${({ theme }) => theme.fontSize.large};
  `,

  large: css`
    width: 260px;
    height: 64px;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.fontSize.xLarge};
  `,

  full: css`
    width: 100%;
    height: 42px;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.fontSize.small};
  `,

  default: css``,
};

export const Button = styled.button<ButtonProps>`
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
  cursor: pointer;
  border: none;
  :hover {
    opacity: 0.8;
  }
`;
