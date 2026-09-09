import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { base } from '../theme';
import { Wrap, Button, Text } from './Core';

const SubNavWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: #000;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #1a1a1a;
  }
`;

const SubNavContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  gap: 12px;
`;

const BackButton = styled.button`
  flex: 1;
  background-color: #000;
  border: none;
  color: #fff;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.02em;
  cursor: pointer;
  padding: 0;
  margin: 0;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background-color: #1a1a1a;
  }
`;

const Divider = styled.span`
  color: #888;
  font-size: 12px;
`;

const InfoButton = styled.button`
  flex: 1;
  background-color: #000;
  border: none;
  color: #fff;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.02em;
  cursor: pointer;
  padding: 0;
  margin: 0;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &:hover {
    background-color: #1a1a1a;
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

          {/* Divider */}
          <Divider>|</Divider>

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
