import styled from 'styled-components';
import { NavLink as NavLinkRouter } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #2c3e50;
  padding: 16px 32px;
`;

export const NavContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

export const NavLink = styled(NavLinkRouter)`
  color: #ecf0f1;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }

  &.active {
    color: #3498db;
    padding-bottom: 4px;
  }
`;