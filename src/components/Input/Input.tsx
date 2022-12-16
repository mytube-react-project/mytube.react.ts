import { ReactNode } from 'react';
import * as S from './style';

export interface InputProps {
  inputSize: 'small' | 'medium' | 'large' | 'full';
  shape: 'square' | 'round';
  children: ReactNode;
}

function Input({ inputSize, shape, children, ...rest }: InputProps) {
  return (
    <S.Input inputSize={inputSize} shape={shape} {...rest}>
      {children}
    </S.Input>
  );
}

export default Input;
