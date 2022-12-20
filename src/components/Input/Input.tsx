import { ReactNode } from 'react';
import * as S from './style';

export interface InputProps {
  inputSize: 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge' | 'full';
  shape: 'square' | 'round';
}

function Input({ inputSize, shape, ...rest }: InputProps) {
  return <S.Input inputSize={inputSize} shape={shape} {...rest} />;
}

export default Input;
