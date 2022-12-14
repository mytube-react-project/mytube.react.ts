import { ReactNode } from 'react';
import * as S from './style';

export interface ButtonProps {
  variant: 'primary' | 'text' | 'default';
  size: 'small' | 'medium' | 'large' | 'full';
  shape: 'square' | 'round';
  children: ReactNode;
}

function Button({ variant, size, shape, children, ...rest }: ButtonProps) {
  return (
    <S.Button variant={variant} size={size} shape={shape} {...rest}>
      {children}
    </S.Button>
  );
}
export default Button;
