import { ThemeProvider } from 'styled-components';
import theme from './libs/styles/theme';

function App() {
  const themeConfig = theme(true);
  console.log(themeConfig);

  return <ThemeProvider theme={themeConfig}>:)</ThemeProvider>;
}

export default App;
