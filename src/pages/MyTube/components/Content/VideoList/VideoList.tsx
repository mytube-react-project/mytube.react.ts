import Video from 'components/Video/Video';
import VideoSkeleton from 'components/Video/Video.Skeleton';
import { useState } from 'react';
import * as S from './style';

function VideoList() {
  const [videoList] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
  ]);
  const [loading] = useState(true);

  return (
    <S.Wrapper>
      <S.Container>
        {videoList.length > 0 ? (
          videoList.map((value) =>
            loading ? <VideoSkeleton key={value.id} /> : <Video key={value.id} />,
          )
        ) : (
          <h1>Please Search Video Name</h1>
        )}
      </S.Container>
    </S.Wrapper>
  );
}

export default VideoList;
