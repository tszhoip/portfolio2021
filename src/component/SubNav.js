import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { base } from '../theme';
import { Wrap, Button, Text } from './Core';

const SubNavWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: #f5f5f5;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

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

  const navigateBack = () => {
    navigate('/');
  };

  return (
    <ThemeProvider theme={base}>
      <SubNavWrapper>
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
