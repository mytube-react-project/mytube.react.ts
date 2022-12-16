import React, { FC } from 'react';
import * as S from './style';

export interface AlertProps {
  variant?: 'alert' | 'confirm';
  title?: string;
  children?: React.ReactNode;
  onSucces?: () => void;
  onCancle?: () => void;
}

const Alert: FC<AlertProps> = ({ variant, title, children, onSucces, onCancle }: AlertProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        {title} <span>x</span>
      </S.Header>
      <S.Content>{children}</S.Content>
      <S.Button>
        <button onClick={onSucces}>확인</button>
        {variant === 'confirm' && <button onClick={onCancle}>취소</button>}
      </S.Button>
    </S.Wrapper>
  );
};
export default Alert;
