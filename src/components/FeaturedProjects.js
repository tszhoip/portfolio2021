import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { base } from '../theme';

/**
 * FeaturedProjects
 * Display featured projects in a responsive grid at the end of project pages
 * - Desktop: 4 columns
 * - Mobile/Tablet: 2 columns
 * - Each card: 3:2 landscape image + title/type
 */

const FeaturedContainer = styled.div`
  width: 100vw;
  background-color: transparent;
  margin-left: calc(-50vw + 50%);
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-radius: 0;
  margin: 0;
  gap: 0;

  &:hover {
    background-color: #fff;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 3 / 2;
  display: block;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px 12px;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: #000;
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
`;

export const FeaturedProjects = ({ currentProjectNumber, allProjects }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 900;
    }
    return false;
  });

  useEffect(() => {
    // Set initial state
    setIsMobile(window.innerWidth < 900);

    // Handle resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!allProjects || !currentProjectNumber) {
    return null;
  }

  // Filter: get featured projects but exclude current project
  const featured = Object.entries(allProjects)
    .filter(([projectNum, project]) => {
      const num = parseInt(projectNum, 10);
      return (
        num !== currentProjectNumber && // Exclude self
        project.feature === true // Only featured projects
      );
    })
    .map(([projectNum, project]) => ({
      number: parseInt(projectNum, 10),
      ...project,
    }))
    .sort((a, b) => a.number - b.number);

  // Get first 2 projects on mobile/tablet, 4 on desktop
  const projectCount = isMobile ? 2 : 4;
  const displayedProjects = featured.slice(0, projectCount);

  if (displayedProjects.length === 0) {
    return null;
  }

  const handleCardClick = (projectNumber) => {
    navigate(`/work/project-${projectNumber}`);
  };

  return (
    <ThemeProvider theme={base}>
      <FeaturedContainer>
        <FeaturedGrid>
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.number}
              onClick={() => handleCardClick(project.number)}
            >
              <ProjectImage
                src={`/images/project-${project.number}/thumb-hover.jpg`}
                alt={project.title}
              />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </FeaturedGrid>
      </FeaturedContainer>
    </ThemeProvider>
  );
};

export default FeaturedProjects;
