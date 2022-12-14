const blackPalette = {
  white: '#ffffff',
  black: '#222222',
  fontColor: '#222222',
  fontSubColor: '#ffffff',
  primary: '#4E4E4E',
  secondary: '#E1BF45',
  borderColor: '#4E4E4E',
} as const;

const whitePalette = {
  white: '#ffffff',
  black: '#222222',
  fontColor: '#ffffff',
  fontSubColor: '#222222',
  primary: '#ffffff',
  secondary: '#AC0000',
  borderColor: '#222222',
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

const theme = (mode: boolean) => {
  return {
    palette: mode ? whitePalette : blackPalette,
    borderColor: mode ? whitePalette : blackPalette,
    fontSize,
    lineHeight,
  };
};
export default theme;
