import styled from 'styled-components';

export const TextareaWrapper = styled.div`
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

export const Textarea = styled.textarea<{ hasError?: boolean }>`
  padding: 10px 14px;
  border: 2px solid ${props => props.hasError ? '#dc3545' : '#ddd'};
  border-radius: 6px;
  font-size: 15px;
  font-family: inherit;
  resize: vertical;
  min-height: 150px;
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