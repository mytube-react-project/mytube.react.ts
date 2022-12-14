import * as S from './style';
import Button from 'components/Button/Button';
import TokenRepository from 'repository/tokenRepository';
import { useRecoilState } from 'recoil';
import { lightAndDarkThemeAtom } from 'atoms/util/atom';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import LightModeIcon from '@mui/icons-material/LightMode';

function Header() {
  const MY_TUBE = 'MY TUBE';
  const WELCOME_MY_TUBE = 'WELCOME MY TUBE';
  const [lgintAndDarkMode, setLightAndDarkMode] = useRecoilState(lightAndDarkThemeAtom);
  const isLogin = TokenRepository.getToken() ? true : false;

  const onChangeLightAndDarkTheme = () => {
    setLightAndDarkMode((prev) => !prev);
  };

  return (
    <S.HeaderWrapper isLogin={isLogin}>
      <S.Title isLogin={isLogin}>{isLogin ? MY_TUBE : WELCOME_MY_TUBE}</S.Title>
      <S.ButtonWrapper>
        {isLogin && (
          <Button variant="primary" size="small" shape="square">
            LOGOUT
          </Button>
        )}
        <S.ModeBtn onClick={onChangeLightAndDarkTheme}>
          {lgintAndDarkMode ? <Brightness2Icon /> : <LightModeIcon />}
        </S.ModeBtn>
      </S.ButtonWrapper>
    </S.HeaderWrapper>
  );
}

export default Header;
