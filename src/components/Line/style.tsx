import styled from 'styled-components';

interface LineStyleProps {
  direction?: 'left' | 'right';
  width?: number;
  height?: number;
}

export const Wrapper = styled.div<LineStyleProps>`
  display: flex;
  justify-content: ${({ direction }) => (direction === 'left' ? 'flex-start' : 'fflex-end')};
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Line = styled.div<LineStyleProps>`
  width: ${({ width }) => `${width}%`};
  height: ${({ height }) => `${height}px`};
  background: ${({ theme }) => theme.palette.secondary};
`;
