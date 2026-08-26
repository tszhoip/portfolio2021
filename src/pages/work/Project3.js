import React from 'react';
import ProjectTemplate from '../../components/ProjectTemplate';

const Project3 = () => {
  const metadata = {
    title: 'Aboard, Visual Identity',
    role: 'Logo Designer',
    deliverable: 'Logos',
    descEN: 'aboard is a RV company that has a whole new idea for EV RV.',
    descCN: 'aboard是一家电动房车公司，拥有全新的电动房车理念。'
  };

  return <ProjectTemplate projectNumber={3} metadata={metadata} />;
};

export default Project3;
