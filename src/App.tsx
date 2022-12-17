import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import theme from './libs/styles/theme';

function App() {
  const themeConfig = theme(true);
  const qureyClient = new QueryClient();

  return (
    <QueryClientProvider client={qureyClient}>
      <RecoilRoot>
        <ThemeProvider theme={themeConfig}>:)</ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
