import React from 'react';
import { BlockThumb } from '../component/Block';
import { Container } from '../component/Core';
import projects from '../data/projects';

function Home() {
  BlockThumb.defaultProps = {
    width: [1 / 2, 1 / 2, 1 / 2, 1 / 2],
    height: ['320px','400px','480px','560px'],
  };

  return (
    <Container width={[1]} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
      {/* Dynamically render project cards from works/ folders */}
      {projects.map((project) => (
        <BlockThumb
          key={project.id}
          width={project.id === 1 ? [1,1,1/2,1/2] : undefined}
          img={project.thumbnail}
          imgHover={project.thumbnailHover}
          to={project.route}
          title={project.title}
          opacity={project.hasContent ? 1 : 0.5}
        />
      ))}
    </Container>
  );
}

export default Home;
