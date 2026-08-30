import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { base } from '../theme';
import { Wrap, Button, Text, H1 } from './Core';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 20px;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 0;
  padding: 32px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  z-index: 300;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 24px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }
`;

const InfoSection = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled(Text)`
  font-size: 12px;
  font-weight: 500;
  color: #888;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const InfoValue = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  color: #000;
  line-height: 1.5;
`;

export const ProjectInfoModal = ({ isOpen, onClose, projectData }) => {
  if (!isOpen || !projectData) {
    return null;
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ThemeProvider theme={base}>
      <ModalBackdrop onClick={handleBackdropClick}>
        <ModalContent>
          <CloseButton onClick={onClose}>&times;</CloseButton>

          <H1 fontFamily={[0]} fontSize={[2]} mb={[3]} fontWeight="600">
            {projectData.title}
          </H1>

          <InfoSection>
            <InfoLabel>Type</InfoLabel>
            <InfoValue>{projectData.type || 'N/A'}</InfoValue>
          </InfoSection>

          <InfoSection>
            <InfoLabel>English Description</InfoLabel>
            <InfoValue>{projectData.descEN}</InfoValue>
          </InfoSection>

          <InfoSection>
            <InfoLabel>中文描述</InfoLabel>
            <InfoValue>{projectData.descCN}</InfoValue>
          </InfoSection>
        </ModalContent>
      </ModalBackdrop>
    </ThemeProvider>
  );
};

export default ProjectInfoModal;
