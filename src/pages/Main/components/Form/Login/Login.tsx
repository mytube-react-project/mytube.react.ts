import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import styled from 'styled-components';

function LoginForm() {
  return (
    <S.Form>
      <Input inputSize={'full'} shape={'square'} placeholder={'E-MAIL'} />
      <Input inputSize={'full'} shape={'square'} placeholder={'PASSWORD'} />
      <Button variant={'primary'} size={'full'} shape={'square'}>
        L O G I N
      </Button>
    </S.Form>
  );
}
export default LoginForm;

const Form = styled.form`
  position: absolute;
  left: 30%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 380px;

  & input,
  button {
    text-align: center;
    margin: 16px 0;
  }
`;

const S = {
  Form,
};
