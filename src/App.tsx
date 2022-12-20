import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lightAndDarkThemeAtom } from 'atoms/util/atom';
import { globalStyle } from 'libs/styles/globalStyle';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import theme from './libs/styles/theme';
import { useRoutes } from 'react-router-dom';
import Router from 'routes/Router';

function App() {
  const mode = useRecoilValue(lightAndDarkThemeAtom);
  const themeConfig = theme(mode);
  const qureyClient = new QueryClient();
  const routes = useRoutes(Router());
  const GlobalStyle = globalStyle(themeConfig);

  return (
    <QueryClientProvider client={qureyClient}>
      <GlobalStyle />
      <ThemeProvider theme={themeConfig}>{routes}</ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
