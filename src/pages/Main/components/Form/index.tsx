import { Line } from 'components/Line/style';
import Title from '../Title/Title';
import LoginForm from './Login/Login';
import * as S from './style';

function MainForm() {
  return (
    <>
      <Title style={{ paddingLeft: 32 }}>Please, Login</Title>
      <Line direction={'left'} width={60} height={0.5} />
      <S.Wrapper>
        <LoginForm />
        <S.ButtonBox>
          S<br />
          I<br />
          G<br />
          N<br />
          <br />
          U<br />P
        </S.ButtonBox>
        <S.TextBox>
          <h1>
            <span>If</span> you want Sign up <br />
            of this page, <br />
            click this button.
          </h1>
        </S.TextBox>
      </S.Wrapper>
    </>
  );
}
export default MainForm;
