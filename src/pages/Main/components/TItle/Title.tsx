import styled from 'styled-components';

function Title({ children, ...rest }: { children: React.ReactNode }) {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>;
}
export default Title;

const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  padding-left: 32px;
`;

const S = {
  Wrapper,
};
