import { Button } from 'components/Button/style';
import Input from 'components/Input/Input';
import { Line } from 'components/Line/style';
import Title from '../Title/Title';
import * as S from './style';

function MainVideoSearch() {
  return (
    <S.Wrapper>
      <Title align={'center'} style={{ padding: '32px 0' }}>
        Search, your Video
      </Title>
      <Line direction={'right'} width={70} height={0.5} />
      <S.Container>
        <Input inputSize={'xxLarge'} shape={'square'} style={{ textAlign: 'center' }} />
        <Button variant={'primary'} size={'small'} shape={'square'} style={{ marginLeft: 16 }}>
          GO
        </Button>
      </S.Container>
    </S.Wrapper>
  );
}
export default MainVideoSearch;
