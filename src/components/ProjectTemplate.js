import React, { useState, useEffect } from 'react';
import { BlockImg, BlockVideo, Blockitem } from '../component/Block';
import { Container } from '../component/Core';
import { ThemeProvider } from "styled-components";
import { base } from '../theme';
import { getProjectMetadata, projectsMetadata } from '../data/projectsMetadata';
import { parseMediaArray } from './MediaGalleryBuilder';
import { FeaturedProjects } from './FeaturedProjects';
import SubNav from '../component/SubNav';
import ProjectInfoModal from '../component/ProjectInfoModal';
import AllProjectsModal from '../component/AllProjectsModal';

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
        {/* Headline Image - Optional section if 1-headline.jpg exists */}
        <BlockImg image={`/images/project-${projectNumber}/1-headline.jpg`} />

        {/* Media Gallery - Images + Videos - Full Width */}
        {mediaArray.map((media, index) => (
          media.type === 'image' ? (
            <BlockImg key={index} image={media.file} />
          ) : (
            <BlockVideo key={index} video={media.url} />
          )
        ))}

        {/* Featured Projects Section */}
        <FeaturedProjects currentProjectNumber={projectNumber} allProjects={projectsMetadata} />
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
