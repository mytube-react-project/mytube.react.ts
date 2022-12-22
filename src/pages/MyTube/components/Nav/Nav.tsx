import Input from 'components/Input/Input';
import * as S from './style';

function Nav() {
  return (
    <S.NavWrapper>
      <button>Create Your Category +</button>
      <div>
        <Input shape="square" inputSize="medium" />
        <button>Search</button>
      </div>
    </S.NavWrapper>
  );
}

export default Nav;
