import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const TopNavContainer = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background-color: #f5f5f5;
  border-bottom: 1px solid #EAEAEA;
  z-index: 99;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 901px) {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NavContent = styled.div`
  display: flex;
  gap: 0;
  padding: 0 20px;
  min-width: min-content;
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  color: ${props => props.active ? '#000' : '#666'};
  text-decoration: none;
  white-space: nowrap;
  background-color: ${props => props.active ? '#FFF' : 'transparent'};
  border-bottom: ${props => props.active ? '2px solid #000' : '2px solid transparent'};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const LibraryTopNav = ({ activeSection }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to active item when section changes
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector(
        `a[href="#${activeSection}"]`
      );
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeSection]);

  return (
    <TopNavContainer ref={scrollContainerRef}>
      <NavContent>
        <NavItem
          href="#tokens"
          active={activeSection === 'tokens'}
        >
          Tokens
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
      </NavContent>
    </TopNavContainer>
  );
};

export default LibraryTopNav;
