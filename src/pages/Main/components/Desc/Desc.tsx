import { Line } from 'components/Line/style';
import Title from '../Title/Title';

import * as S from './style';

function MainDesc() {
  return (
    <>
      <Line direction={'right'} width={90} height={0.5} />
      <S.Wrapper>
        <Title style={{ paddingLeft: 32 }}>MyTube</Title>
        <S.TextBox index={0}>
          <span>No</span> more messy <br />
          YouTube lists.. <br />
        </S.TextBox>
        <S.TextBox index={1}>
          <span>You</span> can now organize <br />
          your YouTube listings <br />
          <br />
          by dividing them into <br />
          categories.
        </S.TextBox>
      </S.Wrapper>
    </>
  );
}
export default MainDesc;
