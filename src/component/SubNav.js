import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { base } from '../theme';
import { Wrap, Button, Text } from './Core';

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

const SubNavTitle = styled.button`
  width: 25%;
  padding: 12px 16px;
  background-color: #f5f5f5;
  cursor: default;
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: black;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  border: none;
  flex-grow: 1;
  text-align: left;

  &:hover {
    background-color: #f5f5f5;
    cursor: default;
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
      // Find the main menu by looking for elements containing "Noname" text
      // The menu wrapper (BlockMenuFloating) contains button elements with "Noname" and "Shop"
      const menuWrappers = document.querySelectorAll('div');
      let blockMenuFloating = null;

      // Find the wrapper that contains both menu items
      for (const wrapper of menuWrappers) {
        const text = wrapper.textContent;
        if (text.includes('Noname') && text.includes('Shop')) {
          // Make sure it's not too large (avoid finding the entire page)
          if (wrapper.children.length > 0 && wrapper.children.length < 10) {
            blockMenuFloating = wrapper.closest('div[style*="fixed"], div[style*="sticky"], [class*="Floating"]') || wrapper;
            break;
          }
        }
      }

      if (blockMenuFloating) {
        const blockMenuRect = blockMenuFloating.getBoundingClientRect();

        // If menu is visible in viewport (top is within viewport), unstick
        if (blockMenuRect.top >= 0 && blockMenuRect.top < window.innerHeight) {
          setIsUnsticking(true);
        } else {
          setIsUnsticking(false);
        }
      }
    };

    // Use scroll event without debounce for immediate response
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateBack = () => {
    navigate('/');
  };

  return (
    <ThemeProvider theme={base}>
      <SubNavWrapper isUnsticking={isUnsticking}>
        <Wrap width="100%">
          {/* Back Button */}
          <Button
            fontFamily={[0]}
            width="25%"
            fontSize="12px"
            fontWeight="500"
            padding={[3]}
            variant="default"
            flexGrow="1"
            textAlign="left"
            onClick={navigateBack}
          >
            Back
          </Button>

          {/* Project Title - Deactivated Button */}
          <SubNavTitle disabled>
            {projectTitle}
          </SubNavTitle>

          {/* Project Info Button */}
          <Button
            fontFamily={[0]}
            width="25%"
            fontSize="12px"
            fontWeight="500"
            padding={[3]}
            variant="default"
            flexGrow="1"
            textAlign="left"
            onClick={onProjectInfoClick}
          >
            Project Info
          </Button>

          {/* All Projects Button */}
          <Button
            fontFamily={[0]}
            width="25%"
            fontSize="12px"
            fontWeight="500"
            padding={[3]}
            variant="default"
            flexGrow="1"
            textAlign="left"
            onClick={onAllProjectsClick}
          >
            All Projects
          </Button>
        </Wrap>
      </SubNavWrapper>
    </ThemeProvider>
  );
};

export default SubNav;
