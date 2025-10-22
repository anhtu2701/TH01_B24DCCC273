import type { SelectHTMLAttributes } from 'react';
import * as S from './index.styles';

interface BaseSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const BaseSelect = ({ label, error, options, ...props }: BaseSelectProps) => {
  return (
    <S.SelectWrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.Select hasError={!!error} {...props}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.Select>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.SelectWrapper>
  );
};

export default BaseSelect;