import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { base } from '../theme';

/**
 * FeaturedProjects - Clean thumbnail design
 * Image (3:2 landscape) + Text with 16px padding
 * Hover: #f5f5f5 → #fff background
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

const ProjectThumbnail = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  cursor: pointer;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 3 / 2;
  display: block;
  margin: 0;
  padding: 0;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  padding: 16px;
  font-size: 12px;
  font-weight: 500;
  color: #000;
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  background-color: #f5f5f5;
  transition: background-color 0.2s ease;

  ${ProjectThumbnail}:hover & {
    background-color: #fff;
  }
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
    setIsMobile(window.innerWidth < 900);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!allProjects || !currentProjectNumber) {
    return null;
  }

  const featured = Object.entries(allProjects)
    .filter(([projectNum, project]) => {
      const num = parseInt(projectNum, 10);
      return num !== currentProjectNumber && project.feature === true;
    })
    .map(([projectNum, project]) => ({
      number: parseInt(projectNum, 10),
      ...project,
    }))
    .sort((a, b) => a.number - b.number);

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
            <ProjectThumbnail
              key={project.number}
              onClick={() => handleCardClick(project.number)}
            >
              <ProjectImage
                src={`/images/project-${project.number}/thumb.jpg`}
                alt={project.title}
                loading="lazy"
              />
              <ProjectTitle>{project.title}</ProjectTitle>
            </ProjectThumbnail>
          ))}
        </FeaturedGrid>
      </FeaturedContainer>
    </ThemeProvider>
  );
};

export default FeaturedProjects;
