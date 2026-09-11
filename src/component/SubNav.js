import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { base } from '../theme';
import { Wrap, Button, Text } from './Core';

const SubNavWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

const SubNavContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  gap: 0;
`;

const BackButton = styled.button`
  flex: 1;
  background-color: #f5f5f5;
  border: none;
  color: #000;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.02em;
  cursor: pointer;
  padding: 8px 12px;
  margin: 0;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #fff;
  }
`;

const InfoButton = styled.button`
  flex: 1;
  background-color: #f5f5f5;
  border: none;
  color: #000;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.02em;
  cursor: pointer;
  padding: 8px 12px;
  margin: 0;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: background-color 0.2s ease;

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

  const navigateBack = () => {
    navigate('/');
  };

  return (
    <ThemeProvider theme={base}>
      <SubNavWrapper>
        <SubNavContent>
          {/* Back Arrow Button (Left) */}
          <BackButton onClick={navigateBack}>
            ←
          </BackButton>

          {/* Info Button (Right) */}
          <InfoButton onClick={onProjectInfoClick}>
            Info
          </InfoButton>
        </SubNavContent>
      </SubNavWrapper>
    </ThemeProvider>
  );
};

export default SubNav;
