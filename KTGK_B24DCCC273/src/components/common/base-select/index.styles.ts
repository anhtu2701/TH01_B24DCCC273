import styled from 'styled-components';

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-weight: 500;
  color: #333;
  font-size: 14px;
`;

export const Select = styled.select<{ hasError?: boolean }>`
  padding: 10px 14px;
  border: 2px solid ${props => props.hasError ? '#dc3545' : '#ddd'};
  border-radius: 6px;
  font-size: 15px;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#dc3545' : '#007bff'};
  }
`;

export const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 13px;
`;