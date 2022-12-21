import styled from 'styled-components';
import backgroundImage from 'libs/assets/images/image1.png';

interface TextBoxProps {
  index: number;
}

export const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  width: 100%;
  height: 780px;
  padding: 16px 0;
  color: ${({ theme }) => theme.palette.white};
  position: relative;
`;

export const TextBox = styled.div<TextBoxProps>`
  position: absolute;
  top: ${({ index }) => (index === 0 ? '20%' : '80%')};
  left: ${({ index }) => index === 0 && '20%'};
  right: ${({ index }) => index === 1 && '-10%'};
  transform: translate(-50%, -50%);
  font-size: ${({ theme }) => theme.fontSize.large};

  & span {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }
`;
