import * as S from './style';
import Video from 'components/Video/Video';

function VideoList() {
  return (
    <S.VideoListWrapper>
      <li>
        <Video />
      </li>
      <li>
        <Video />
      </li>
      <li>
        <Video />
      </li>
      <li>
        <Video />
      </li>
      <li>
        <Video />
      </li>
    </S.VideoListWrapper>
  );
}

export default VideoList;
