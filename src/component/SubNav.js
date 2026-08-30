import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { base } from '../theme';
import { Wrap, Text } from './Core';

const SubNavButton = styled.button`
  width: 25%;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  font-size: 12px;
  font-weight: 500;
  padding: 12px;
  background-color: transparent;
  color: #000;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: color 0.2s ease;
  letter-spacing: -0.02em;

  &:hover {
    color: white;
  }
`;

const SubNavText = styled(Text)`
  width: 25%;
  padding: 12px;
  background-color: transparent;
  cursor: default;
  margin: 0;
`;

const SubNavWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: #f5f5f5;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  transition: ${(props) => props.isUnsticking ? 'opacity 0.2s ease' : 'none'};
  opacity: ${(props) => props.isUnsticking ? 0 : 1};
  pointer-events: ${(props) => props.isUnsticking ? 'none' : 'auto'};
  z-index: 100;
  border-top: 1px solid #e0e0e0;

  &:hover {
    background-color: #fff;
  }
`;

export const SubNav = ({
  projectNumber,
  projectTitle,
  onProjectInfoClick,
  onAllProjectsClick
}) => {
  const navigate = useNavigate();
  const [isUnsticking, setIsUnsticking] = useState(false);

  // Handle scroll to detect when main menu is approaching
  useEffect(() => {
    const handleScroll = () => {
      // Find the BlockMenu element (main menu with "Noname" + "Shop")
      const blockMenu = document.querySelector('[class*="BlockMenu"]');

      if (blockMenu) {
        const blockMenuRect = blockMenu.getBoundingClientRect();

        // If menu is visible in viewport (top is above viewport height), start unsticking
        if (blockMenuRect.top < window.innerHeight) {
          setIsUnsticking(true);
        } else {
          setIsUnsticking(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateBack = () => {
    navigate('/');
  };

  return (
    <ThemeProvider theme={base}>
      <SubNavWrapper isUnsticking={isUnsticking}>
        <Wrap width="100%" style={{ gap: 0 }}>
          {/* Back Button */}
          <SubNavButton onClick={navigateBack}>
            Back
          </SubNavButton>

          {/* Project Title */}
          <SubNavText
            fontFamily={[0]}
            fontSize="12px"
            fontWeight="500"
            color="#000"
          >
            {projectTitle}
          </SubNavText>

          {/* Project Info Button */}
          <SubNavButton onClick={onProjectInfoClick}>
            Project Info
          </SubNavButton>

          {/* All Projects Button */}
          <SubNavButton onClick={onAllProjectsClick}>
            All Projects
          </SubNavButton>
        </Wrap>
      </SubNavWrapper>
    </ThemeProvider>
  );
};

export default SubNav;
