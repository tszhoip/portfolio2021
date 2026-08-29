import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";

import { base } from '../theme';
import {  BlockMenu } from './Block';


const MenuWrapper = styled.div`
position: fixed;
bottom: ${({ bottomOffset }) => bottomOffset}px;
left: 0;
width: 100vw;
height: auto;
z-index: 99;
transition: bottom 0.3s ease;
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
  const [bottomOffset, setBottomOffset] = useState(0);
  const navigate = useNavigate();


  const handleScroll = () => {
    const footerElement = document.querySelector('.block-footer');
    if (!footerElement) return;

    const footerTopPosition = footerElement.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    const distanceFromBottom = footerTopPosition - viewportHeight;

    // If footer is visible (distanceFromBottom < 0), calculate how much menu should move up
    // Otherwise, keep menu at bottom of viewport (offset = 0)
    if (distanceFromBottom < 0) {
      // Footer is visible: move menu up by the overlap distance
      setBottomOffset(Math.abs(distanceFromBottom));
    } else {
      // Footer is not visible: keep menu at viewport bottom
      setBottomOffset(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={base}>
        <MenuWrapper bottomOffset={bottomOffset} footerHeight={footerHeight}>
<BlockMenu />
        </MenuWrapper>
    </ThemeProvider>
  )
};

