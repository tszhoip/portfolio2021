import React from 'react';
import { BlockThumb, BlockThumbFull } from '../component/Block';
import logo from '../assets/logo/lo01.jpg';
import inno from '../assets/logo/lo01.jpg';
import shop from '../assets/logo/lo01.jpg';
import { Container } from '../component/Core';

// Project thumbnails from public folder
const project1 = '/project-1-thumb.jpg';
const project2 = '/project-2-thumb.jpg';
const project3 = '/project-3-thumb.jpg';
const project4 = '/project-4-thumb.jpg';
const project5 = '/project-5-thumb.jpg';


function Work() {
  // Force rebuild - cannob-thumb.jpg should now load
  BlockThumb.defaultProps = {
    width: [1 / 2, 1 / 2, 1 / 2, 1 / 2],
    height: ['320px','400px','480px','560px'],
  };
  BlockThumbFull.defaultProps = {
    width: [1 / 2, 1 / 2, 1 / 2, 1 / 2],
  };
  return (
    <Container width={[1]}display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
      <BlockThumb width={[1,1,1/2,1/2]} img={project1} to="/work/project-1" title="Canoo, Brand" />
      <BlockThumb img={project2} to="/work/project-2" title="Canoo, Design System" />
      <BlockThumb img={project3} to="/work/project-3" title="Canoo, Process" />
      <BlockThumb width={[1,1/2,1/2,1/2]}  img={project4} to="/work/project-4" title="Joy & peace, Product" />
      <BlockThumb img={project5} to="/work/project-5" title="Nike, Art Direction" />
      <BlockThumb img={inno} to="/inno" title="Innocell, App" />
      <BlockThumb img={shop} to="/shopify" title="shopify, Ecommerce" />
      <BlockThumb img={logo} to="/logo" title="Logos" />
    </Container>
  );
}

export default Work;
