import styled, { css } from 'styled-components';

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

interface TitleStyleProps {
  align?: 'left' | 'center' | 'right';
}

function Title({ children, align, ...rest }: TitleProps) {
  return (
    <>
      <S.Wrapper align={align} {...rest}>
        {children}
      </S.Wrapper>
    </>
  );
}
export default Title;

const Wrapper = styled.div<TitleStyleProps>`
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: ${({ align }) => align};
`;

const S = {
  Wrapper,
};
