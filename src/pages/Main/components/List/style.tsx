import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 780px;
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 300px;
  gap: 16px;
`;
