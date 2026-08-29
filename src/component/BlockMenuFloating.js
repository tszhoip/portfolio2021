import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";

import { base } from '../theme';
import {  BlockMenu } from './Block';


const MenuWrapper = styled.div`
position: ${({ isSticky }) => (isSticky ? 'absolute' : 'fixed')};
bottom: 0;
left: 0;
top: auto;
width: 100vw;
height: auto;
z-index: 99;
transition: position 0.3s ease;
animation: slideUp 0.5s ease-out;

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
`;

export const BlockMenuFloating = ({ footerHeight }) => {
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();


  const handleScroll = () => {
    const footerElement = document.querySelector('.block-footer');
    if (!footerElement) return;

    const footerTopPosition = footerElement.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    const distanceFromBottom = footerTopPosition - viewportHeight;
    // isSticky = true when footer IS visible (switch to absolute)
    // isSticky = false when footer NOT visible (keep fixed at bottom)
    setIsSticky(distanceFromBottom < 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={base}>
        <MenuWrapper isSticky={isSticky} footerHeight={footerHeight}>
<BlockMenu />
        </MenuWrapper>
    </ThemeProvider>
  )
};

