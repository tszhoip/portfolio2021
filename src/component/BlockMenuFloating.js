import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";

import { base } from '../theme';
import {  BlockMenu } from './Block';


const MenuWrapper = styled.div`
position: ${({ isSticky }) => (isSticky ? 'fixed' : 'absolute')};
bottom: ${({ isSticky }) => (isSticky ? '0' : '-1000px')};
bottom: 0;
left: 0; 
width: 100vw; 
height: auto;
z-index: 999;
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
    setIsSticky(distanceFromBottom > 0);
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

