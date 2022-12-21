import MainDesc from './components/Desc/Desc';
import MainForm from './components/Form';
import MainVideoList from './components/List/List';
import MainVideoSearch from './components/Search/Search';
import * as S from './style';

function MainPage() {
  return (
    <S.Wrapper>
      <MainForm />
      <MainDesc />
      <MainVideoSearch />
      <MainVideoList />
    </S.Wrapper>
  );
}
export default MainPage;
