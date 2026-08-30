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

const InfoButton = styled.button`
  width: 50%;
  padding: 12px 16px;
  background-color: #f5f5f5;
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: black;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  letter-spacing: -0.02em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: none;
  flex-grow: 1;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;

const InfoTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: black;
  margin-bottom: 4px;
`;

const InfoLabel = styled.div`
  font-size: 11px;
  font-weight: 400;
  color: #888;
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

          {/* Project Title + Info Button (Merged) */}
          <InfoButton onClick={onProjectInfoClick}>
            <InfoTitle>{projectTitle}</InfoTitle>
            <InfoLabel>Project Info</InfoLabel>
          </InfoButton>

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
