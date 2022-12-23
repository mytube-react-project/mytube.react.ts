import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'text';
  size: 'small' | 'medium' | 'large' | 'full' | 'default';
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
