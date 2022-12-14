import { DefaultTheme } from 'styled-components';

const blackPalette = {
  white: '#ffffff',
  black: '#222222',
  fontColor: '#222222',
  fontSubColor: '#ffffff',
  primary: '#d9d9d9',
  secondary: '#E1BF45',
} as const;

const whitePalette = {
  white: '#ffffff',
  black: '#222222',
  fontColor: '#ffffff',
  fontSubColor: '#222222',
  primary: '#ffffff',
  secondary: '#AC0000',
} as const;

const fontSize = {
  small: '12px',
  medium: '16px',
  large: '32px',
  xLarge: '48px',
  xxLarge: '72px',
} as const;

const lineHeight = {
  small: '16px',
  medium: '20px',
  large: '24px',
  xLarge: '28px',
} as const;

const theme: DefaultTheme = (mode: boolean) => {
  return {
    palette: mode ? blackPalette : whitePalette,
    fontSize,
    lineHeight,
  };
};
export default theme;
