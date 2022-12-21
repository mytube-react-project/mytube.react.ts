import { useState } from 'react';
import * as S from './style';
import { Skeleton } from '@mui/material';

function Video({ ...rest }) {
  const [loading, setLoading] = useState(true);

  return loading ? <Skeleton animation="wave" width={300} height={300} /> : <S.Viedo {...rest} />;
}

export default Video;
