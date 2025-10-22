import type { TextareaHTMLAttributes } from 'react';
import * as S from './index.styles';

interface BaseTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const BaseTextarea = ({ label, error, ...props }: BaseTextareaProps) => {
  return (
    <S.TextareaWrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.Textarea hasError={!!error} {...props} />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.TextareaWrapper>
  );
};

export default BaseTextarea;