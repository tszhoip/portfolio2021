import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { base } from '../theme';
import { Wrap, Button, Text } from './Core';

const SubNavWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  transition: ${(props) => props.isUnsticking ? 'opacity 0.2s ease' : 'none'};
  opacity: ${(props) => props.isUnsticking ? 0 : 1};
  pointer-events: ${(props) => props.isUnsticking ? 'none' : 'auto'};
  z-index: 100;
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
        <Wrap width="100%">
          {/* Back Button */}
          <Button
            fontFamily={[0]}
            width="25%"
            fontSize="12px"
            fontWeight="500"
            padding={[3]}
            variant="footer"
            flexGrow="1"
            textAlign="left"
            onClick={navigateBack}
          >
            Back
          </Button>

          {/* Project Title */}
          <Wrap
            width="25%"
            padding={[3]}
            flexDirection="column"
            justifyContent="center"
            backgroundColor="#000"
            cursor="default"
          >
            <Text
              fontFamily={[0]}
              fontSize="12px"
              fontWeight="500"
              color="#888"
              margin="0"
              padding="0"
            >
              {projectTitle}
            </Text>
          </Wrap>

          {/* Project Info Button */}
          <Button
            fontFamily={[0]}
            width="25%"
            fontSize="12px"
            fontWeight="500"
            padding={[3]}
            variant="footer"
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
            variant="footer"
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
