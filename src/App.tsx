import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lightAndDarkThemeAtom } from 'atoms/util/atom';
import Layout from 'components/Layout';
import GlobalStyles from 'libs/styles/globals';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import theme from './libs/styles/theme';

function App() {
  const mode = useRecoilValue(lightAndDarkThemeAtom);
  const themeConfig = theme(mode);
  const qureyClient = new QueryClient();

  return (
    <QueryClientProvider client={qureyClient}>
      <GlobalStyles />
      <ThemeProvider theme={themeConfig}>
        <Layout />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
