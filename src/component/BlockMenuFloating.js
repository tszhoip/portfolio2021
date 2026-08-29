import React from 'react';
import styled, { ThemeProvider } from "styled-components";

import { base } from '../theme';
import { BlockMenu } from './Block';

const MenuWrapper = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: auto;
  z-index: 99;
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

export const BlockMenuFloating = () => {
  return (
    <ThemeProvider theme={base}>
      <MenuWrapper>
        <BlockMenu />
      </MenuWrapper>
    </ThemeProvider>
  );
};

