import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px;
`;

export const Thumbnail = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #2c3e50;
  margin-bottom: 16px;
`;

export const Meta = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  color: #7f8c8d;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

export const Category = styled.span`
  background-color: #3498db;
  color: white;
  padding: 6px 14px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
`;

export const Content = styled.div`
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  margin: 32px 0;
  white-space: pre-wrap;
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;

export const NotFound = styled.div`
  text-align: center;
  padding: 64px 32px;
  color: #7f8c8d;
  font-size: 20px;
`;