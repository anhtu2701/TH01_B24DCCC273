import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardBody = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  color: #2c3e50;
`;

export const Meta = styled.div`
  display: flex;
  gap: 8px;
  font-size: 13px;
  color: #7f8c8d;
  margin-bottom: 8px;
`;

export const Category = styled.span`
  background-color: #3498db;
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`;

export const Description = styled.p`
  color: #555;
  font-size: 14px;
  line-height: 1.6;
  margin: 16px 0;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;