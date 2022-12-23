import { Button } from 'components/Button/style';
import { Input } from 'components/Input/style';
import { flexCenter } from 'libs/styles/common';
import { Dispatch, SetStateAction, useRef } from 'react';
import styled from 'styled-components';

interface SignUpFormProps {
  isSignUp: boolean;
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}

interface SignUpFormStyleProps {
  isSignUp: boolean;
}

function SignUpForm({ isSignUp, setIsSignUp }: SignUpFormProps) {
  const SigunUpFormRef = useRef<HTMLFormElement>(null);
  const onCloseSignUp = () => {
    setIsSignUp(false);
  };

  return (
    <S.Form isSignUp={isSignUp} ref={SigunUpFormRef}>
      <S.ToggleBtn onClick={onCloseSignUp} type="button">
        {'>'}
      </S.ToggleBtn>
      <Input inputSize={'full'} shape={'square'} placeholder="E-MAIL" />
      <Input inputSize={'full'} shape={'square'} placeholder="PASSWORD" />
      <Input inputSize={'full'} shape={'square'} placeholder="PASSWORD-CONFIRM" />
      <Button variant={'primary'} size={'full'} shape={'square'}>
        SIGN UP
      </Button>
    </S.Form>
  );
}
export default SignUpForm;

const Form = styled.form<SignUpFormStyleProps>`
  position: absolute;
  width: ${({ isSignUp }) => (isSignUp ? '460px' : '0')};
  padding: 48px 0;
  padding: ${({ isSignUp }) => (isSignUp ? '48px 16px' : '48px 0')};
  overflow: hidden;
  top: 10%;
  right: 0;
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.fontColor};
  ${flexCenter}
  flex-direction: column;
  z-index: 100;
  border-radius: 8px 0 0 8px;
  transition: all 0.5s ease-in-out;

  & input {
    margin: 10px;
    text-align: center;
  }
`;

const ToggleBtn = styled.button`
  position: absolute;
  top: 5%;
  left: 5%;
  background-color: ${({ theme }) => theme.palette.white};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.palette.primary};
  }
`;

const S = {
  Form,
  ToggleBtn,
};
