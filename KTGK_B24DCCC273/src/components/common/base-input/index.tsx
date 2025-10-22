import type { InputHTMLAttributes } from 'react';
import * as S from './index.styles';

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const BaseInput = ({ label, error, ...props }: BaseInputProps) => {
  return (
    <S.InputWrapper>  
      {label && <S.Label>{label}</S.Label>}
      <S.Input hasError={!!error} {...props} />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.InputWrapper>
  );
};

export default BaseInput;