import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  color: #000;
  text-decoration: none;
  background-color: #f5f5f5;
  margin: 0;
  border: none;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #FFF;
    color: #000;
  }
`;

const LibrarySidebar = ({ activeSection }) => {
  return (
    <SidebarContainer>
      <NavItem
        href="#tokens"
        active={activeSection === 'tokens'}
      >
        Design Tokens
      </NavItem>
      <NavItem
        href="#button"
        active={activeSection === 'button'}
      >
        Button
      </NavItem>
      <NavItem
        href="#input"
        active={activeSection === 'input'}
      >
        Input
      </NavItem>
      <NavItem
        href="#card"
        active={activeSection === 'card'}
      >
        Card
      </NavItem>
    </SidebarContainer>
  );
};

export default LibrarySidebar;
