import React, { useState, useEffect } from 'react';
import { BlockImg, BlockVideo, Blockitem, BlockMenu } from '../component/Block';
import { Container } from '../component/Core';
import { ThemeProvider } from "styled-components";
import styled from 'styled-components';
import { base } from '../theme';
import { getProjectMetadata, projectsMetadata } from '../data/projectsMetadata';
import { parseMediaArray } from './MediaGalleryBuilder';
import { FeaturedProjects } from './FeaturedProjects';
import { HeadlineSection } from './HeadlineSection';
import { MediaGridPair } from './MediaGridPair';
import SubNav from '../component/SubNav';
import ProjectInfoModal from '../component/ProjectInfoModal';
import AllProjectsModal from '../component/AllProjectsModal';

const MediaGalleryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const MediaGallerySectionWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const FeaturedProjectsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const FeaturedProjectsSectionWrapper = styled.div`
  width: 100%;
  position: relative;
`;


const SubNavWrapper = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  z-index: 101;
`;

const MainMenuWrapper = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  z-index: 101;
  background-color: #f5f5f5;
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
        {/* Media Gallery Section with SubNav */}
        <MediaGallerySectionWrapper>
          {/* Media Gallery - Headline Text Sections, Regular Images + Videos */}
          <MediaGalleryWrapper>
            {mediaArray.map((media, index) => {
              if (media.type === 'headline') {
                // Render headline IMAGE
                return <BlockImg key={index} image={media.file} />;
              } else if (media.type === 'image') {
                return <BlockImg key={index} image={media.file} />;
              } else if (media.type === 'video') {
                return <BlockVideo key={index} video={media.url} />;
              } else if (media.type === 'grid') {
                // Render A/B variant grid (2-column layout)
                return (
                  <MediaGridPair
                    key={index}
                    imageA={media.files[0]}
                    imageB={media.files[1]}
                  />
                );
              }
              return null;
            })}
          </MediaGalleryWrapper>

          {/* SubNav - Sticky to bottom of media gallery section */}
          <SubNavWrapper>
            <SubNav
              projectNumber={projectNumber}
              projectTitle={m.title}
              onProjectInfoClick={() => setInfoModalOpen(true)}
              onAllProjectsClick={() => setAllProjectsModalOpen(true)}
            />
          </SubNavWrapper>
        </MediaGallerySectionWrapper>

        {/* Featured Projects Section with Main Menu */}
        <FeaturedProjectsSectionWrapper>
          <FeaturedProjectsWrapper>
            <FeaturedProjects currentProjectNumber={projectNumber} allProjects={projectsMetadata} />
          </FeaturedProjectsWrapper>

          {/* Main Menu - Sticky to bottom of featured projects section */}
          <MainMenuWrapper>
            <BlockMenu />
          </MainMenuWrapper>
        </FeaturedProjectsSectionWrapper>
      </Container>
    </ThemeProvider>
  );
};

export default ProjectTemplate;
