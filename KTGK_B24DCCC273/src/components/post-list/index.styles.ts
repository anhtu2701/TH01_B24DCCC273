import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
`;

export const Header = styled.div`
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 16px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  gap: 1rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  max-width: 400px;
  padding: 10px 14px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 15px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const PostCount = styled.div`
  color: #7f8c8d;
  font-size: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 64px 32px;
  color: #7f8c8d;
  font-size: 18px;
`;