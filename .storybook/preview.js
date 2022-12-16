import { ThemeProvider } from 'styled-components';
import theme from '../src/libs/styles/theme';
import GlobalStyles from '../src/libs/styles/globals';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const themeConfig = theme(true);
export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeConfig}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
