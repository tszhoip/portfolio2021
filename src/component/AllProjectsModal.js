import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { base } from '../theme';
import { Text } from './Core';

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
  overflow: hidden;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 0;
  padding: 32px;
  max-width: 90vw;
  width: 100%;
  max-height: 80vh;
  overflow: hidden;
  position: relative;
  z-index: 300;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #000;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  letter-spacing: -0.02em;
`;

const CloseButton = styled.button`
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

const ProjectsGridContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  flex: 1;
  padding-right: 16px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 4px;

    &:hover {
      background-color: #666;
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  min-width: min-content;
  width: fit-content;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-radius: 0;
  width: 200px;
  height: 240px;

  &:hover {
    background-color: #fff;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 180px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    height: 100px;
    margin-bottom: 8px;
  }
`;

const ProjectTitle = styled(Text)`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: #000;
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
`;

export const AllProjectsModal = ({ isOpen, onClose, allProjects, currentProjectNumber }) => {
  const navigate = useNavigate();

  if (!isOpen || !allProjects) {
    return null;
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCardClick = (projectNumber) => {
    navigate(`/work/project-${projectNumber}`);
    onClose();
  };

  // Get all projects as array
  const allProjectsList = Object.entries(allProjects)
    .map(([projectNum, project]) => ({
      number: parseInt(projectNum, 10),
      ...project,
    }))
    .sort((a, b) => a.number - b.number);

  return (
    <ThemeProvider theme={base}>
      <ModalBackdrop onClick={handleBackdropClick}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>All Projects</ModalTitle>
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </ModalHeader>

          <ProjectsGridContainer>
            <ProjectsGrid>
              {allProjectsList.map((project) => (
                <ProjectCard
                  key={project.number}
                  onClick={() => handleCardClick(project.number)}
                >
                  <ProjectImage
                    src={`/images/project-${project.number}/thumb-hover.jpg`}
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 140'%3E%3Crect fill='%23f5f5f5' width='200' height='140'/%3E%3C/svg%3E`;
                    }}
                  />
                  <ProjectTitle>{project.title}</ProjectTitle>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </ProjectsGridContainer>
        </ModalContent>
      </ModalBackdrop>
    </ThemeProvider>
  );
};

export default AllProjectsModal;
