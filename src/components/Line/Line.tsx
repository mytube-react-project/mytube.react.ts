import * as S from './style';

interface LineProps {
  direction: 'left' | 'right';
  width: number;
  height: number;
}

function Line({ direction, width, height }: LineProps) {
  return (
    <S.Wrapper direction={direction}>
      <S.Line width={width} height={height} />
    </S.Wrapper>
  );
}
export default Line;
