import React from 'react';
import { useLocation } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";

import { base } from '../theme';
import { BlockMenu } from './Block';
import { projectPaths } from '../data/projectsMetadata';

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
  const location = useLocation();

  // Hide BlockMenuFloating on project detail pages (MainMenuWrapper will show instead).
  // Matched against the known project routes rather than a '/work/project-'
  // prefix, so a renamed project still counts as one.
  const isProjectPage = projectPaths.some(
    (path) => path.toLowerCase() === location.pathname.toLowerCase()
  );

  if (isProjectPage) {
    return null;
  }

  return (
    <ThemeProvider theme={base}>
      <MenuWrapper>
        <BlockMenu />
      </MenuWrapper>
    </ThemeProvider>
  );
};

