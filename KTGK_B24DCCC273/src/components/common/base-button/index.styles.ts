import styled from 'styled-components';

export const Button = styled.button<{ 
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
}>`
  padding: ${props => {
    switch (props.size) {
      case 'small': return '6px 12px';
      case 'large': return '14px 28px';
      default: return '10px 20px';
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '13px';
      case 'large': return '17px';
      default: return '15px';
    }
  }};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  background-color: ${props => {
    switch (props.variant) {
      case 'danger': return '#dc3545';
      case 'secondary': return '#6c757d';
      default: return '#007bff';
    }
  }};
  
  color: #ffffff;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;