import React from 'react';
import { BlockThumb } from '../component/Block';
import logo from '../assets/logo/lo01.jpg';
import inno from '../assets/logo/lo01.jpg';
import shop from '../assets/logo/lo01.jpg';
import { Container } from '../component/Core';
import projects from '../data/projects';

function Work() {
  BlockThumb.defaultProps = {
    width: [1 / 2, 1 / 2, 1 / 2, 1 / 2],
    height: ['320px','400px','480px','560px'],
  };

  return (
    <Container width={[1]} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
      {/* Dynamically render project cards */}
      {projects.map((project) => (
        <BlockThumb
          key={project.id}
          width={project.id === 1 ? [1,1,1/2,1/2] : undefined}
          img={project.thumbnail}
          to={project.route}
          title={project.title}
          opacity={project.hasContent ? 1 : 0.5}
        />
      ))}

      {/* Static cards */}
      <BlockThumb img={inno} to="/inno" title="Innocell, App" />
      <BlockThumb img={shop} to="/shopify" title="shopify, Ecommerce" />
      <BlockThumb img={logo} to="/logo" title="Logos" />
    </Container>
  );
}

export default Work;
