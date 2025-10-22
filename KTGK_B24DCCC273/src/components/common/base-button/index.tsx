import type { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './index.styles';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

const BaseButton = ({ children, variant = 'primary', size = 'medium', ...props }: BaseButtonProps) => {
  return (
    <S.Button variant={variant} size={size} {...props}>
      {children}
    </S.Button>
  );
};

export default BaseButton;