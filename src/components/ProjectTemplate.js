import React, { useState, useEffect } from 'react';
import { BlockImg, BlockVideo, Blockitem } from '../component/Block';
import { Container } from '../component/Core';
import { ThemeProvider } from "styled-components";
import styled from 'styled-components';
import { base } from '../theme';
import { getProjectMetadata, projectsMetadata } from '../data/projectsMetadata';
import { parseMediaArray } from './MediaGalleryBuilder';
import { FeaturedProjects } from './FeaturedProjects';
import SubNav from '../component/SubNav';
import ProjectInfoModal from '../component/ProjectInfoModal';
import AllProjectsModal from '../component/AllProjectsModal';

const HeadlineTextSection = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 16px 16px 48px 16px;
  background-color: #fff;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const HeadlineTitle = styled.h1`
  margin: 0 0 16px 0;
  font-size: 32px;
  font-weight: 600;
  color: #000;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  letter-spacing: -0.02em;
`;

const HeadlineTagline = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  color: #000;
  line-height: 1.4;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  letter-spacing: -0.02em;
`;

const MediaGalleryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadlineImageSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 16px 16px 48px 16px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const HeadlineImage = styled.img`
  width: 75%;
  height: auto;
  object-fit: cover;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

/**
 * ProjectTemplate - Reusable project detail page component
 *
 * Props:
 *   - projectNumber: 1-5 (or higher)
 *
 * Metadata is fetched from centralized projectsMetadata.js (synced with Google Sheet)
 * Automatically loads images from public/images/project-{n}/1.jpg and videos from metadata
 * Renders media in order specified by order field
 */
export const ProjectTemplate = ({ projectNumber }) => {
  const [mediaArray, setMediaArray] = useState([]);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [allProjectsModalOpen, setAllProjectsModalOpen] = useState(false);

  useEffect(() => {
    // Load metadata and build media array
    const loadMedia = async () => {
      const metadata = getProjectMetadata(projectNumber);
      const media = await parseMediaArray(projectNumber, metadata);
      setMediaArray(media);
    };

    loadMedia();
  }, [projectNumber]);

  // Fetch metadata from centralized data source
  const m = getProjectMetadata(projectNumber) || {
    title: `Project ${projectNumber}`,
    role: 'Design Lead',
    deliverable: 'Art Direction, Design System',
    descEN: 'Project description in English',
    descCN: '项目中文描述'
  };

  return (
    <ThemeProvider theme={base}>
      {/* Project Info Modal */}
      <ProjectInfoModal
        isOpen={infoModalOpen}
        onClose={() => setInfoModalOpen(false)}
        projectData={m}
      />

      {/* All Projects Modal */}
      <AllProjectsModal
        isOpen={allProjectsModalOpen}
        onClose={() => setAllProjectsModalOpen(false)}
        allProjects={projectsMetadata}
        currentProjectNumber={projectNumber}
      />

      <Container width={[1]} flexDirection='column' flexWrap="wrap" alignItems="center" pb={[0]}>
        {/* Media Gallery and Featured Projects Wrapper */}
        <MediaGalleryWrapper>
          {/* Media Gallery - Headline Images, Regular Images + Videos */}
          {mediaArray.map((media, index) => {
            if (media.type === 'headline') {
              return (
                <HeadlineImageSection key={index}>
                  <HeadlineImage src={media.file} />
                </HeadlineImageSection>
              );
            } else if (media.type === 'image') {
              return <BlockImg key={index} image={media.file} />;
            } else if (media.type === 'video') {
              return <BlockVideo key={index} video={media.url} />;
            }
            return null;
          })}

          {/* Featured Projects Section */}
          <FeaturedProjects currentProjectNumber={projectNumber} allProjects={projectsMetadata} />
        </MediaGalleryWrapper>
      </Container>

      {/* SubNav - Sticky navigation at bottom */}
      <SubNav
        projectNumber={projectNumber}
        projectTitle={m.title}
        onProjectInfoClick={() => setInfoModalOpen(true)}
        onAllProjectsClick={() => setAllProjectsModalOpen(true)}
      />
    </ThemeProvider>
  );
};

export default ProjectTemplate;
