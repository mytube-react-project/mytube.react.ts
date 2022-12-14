import Video from 'components/Video/Video';
import VideoSkeleton from 'components/Video/Video.Skeleton';
import { useState } from 'react';
import * as S from './style';

function MainVideoList() {
  const [videoList] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
  const [loading] = useState(true);

  return (
    <S.Wrapper>
      <S.Container>
        {videoList.length > 0 ? (
          videoList.map(() => (loading ? <VideoSkeleton /> : <Video />))
        ) : (
          <h1>Please Search Video Name</h1>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
export default MainVideoList;
