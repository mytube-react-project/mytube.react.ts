import Category from './components/Category/Category';
import VideoList from './components/VideoList/VideoList';
import * as S from './style';

function Section() {
  return (
    <>
      <S.Section>
        <Category />
        <VideoList />
      </S.Section>
    </>
  );
}

export default Section;
