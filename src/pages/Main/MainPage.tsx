import Line from 'components/Line/Line';
import Title from './components/TItle/Title';
import * as S from './style';

function MainPage() {
  return (
    <S.Wrapper>
      <Title>Please, Login</Title>
      <Line direction="right" width={60} height={0.5} />
    </S.Wrapper>
  );
}
export default MainPage;
