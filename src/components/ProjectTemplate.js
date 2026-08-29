import React, { useState, useEffect } from 'react';
import { BlockImg, BlockVideo, Blockitem } from '../component/Block';
import { Container } from '../component/Core';
import { ThemeProvider } from "styled-components";
import { base } from '../theme';
import { getProjectMetadata, projectsMetadata } from '../data/projectsMetadata';
import { parseMediaArray } from './MediaGalleryBuilder';
import { FeaturedProjects } from './FeaturedProjects';

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
      <Container width={[1]} flexDirection='column' flexWrap="wrap" alignItems="center">
        <Container width={[1]} flexWrap="wrap" maxWidth={["1440px"]} pb={[0, 4, 4, 5]}>
          {/* Left Column - Project Info */}
          <Container width={[1, 1 / 2, 1 / 2, 1 / 2]} flexDirection={[1]} flexWrap="wrap">
            <Blockitem
              title="Title"
              body={m.title}
            />
            <Blockitem
              title="Role"
              body={m.role}
            />
            <Blockitem
              title="Deliverable"
              body={m.deliverable}
            />
          </Container>

          {/* Right Column - Description */}
          <Container width={[1, 1 / 2, 1 / 2, 1 / 2]} flexDirection={[1]} flexWrap="wrap">
            <Blockitem
              title="Project / EN"
              body={m.descEN}
            />
            <Blockitem
              title="项目 / CN"
              body={m.descCN}
            />
          </Container>
        </Container>

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
    </ThemeProvider>
  );
};

export default ProjectTemplate;
