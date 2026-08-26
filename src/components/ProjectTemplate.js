import React, { useState, useEffect } from 'react';
import { BlockImg, Blockitem } from '../component/Block';
import { Container } from '../component/Core';
import { ThemeProvider } from "styled-components";
import { base } from '../theme';
import { getProjectMetadata } from '../data/projectsMetadata';

/**
 * ProjectTemplate - Reusable project detail page component
 *
 * Props:
 *   - projectNumber: 1-5 (or higher)
 *
 * Metadata is fetched from centralized projectsMetadata.js (synced with Google Sheet)
 * Automatically loads images from public/images/project-{n}/1.jpg through however many exist
 */
export const ProjectTemplate = ({ projectNumber }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Dynamically discover how many images exist for this project
    // by trying to load images 1.jpg through 15.jpg
    const loadImages = async () => {
      const loadedImages = [];
      for (let i = 1; i <= 15; i++) {
        const imagePath = `/images/project-${projectNumber}/${i}.jpg`;

        // Test if image exists by creating an Image object
        const img = new Image();
        img.onload = () => {
          loadedImages[i - 1] = imagePath;
        };
        img.onerror = () => {
          // Stop when we hit the first missing image
          if (i === 1) {
            setImages(loadedImages.filter(Boolean));
          }
        };
        img.src = imagePath;
      }

      // Give images time to load, then filter and sort
      setTimeout(() => {
        const sortedImages = loadedImages.filter(Boolean);
        setImages(sortedImages);
      }, 500);
    };

    loadImages();
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

        {/* Image Gallery - Full Width */}
        {images.map((imagePath, index) => (
          <BlockImg key={index} image={imagePath} />
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default ProjectTemplate;
