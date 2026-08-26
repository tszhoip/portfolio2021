import React from 'react';
import ProjectTemplate from '../../components/ProjectTemplate';

const Project4 = () => {
  const metadata = {
    title: 'Joy & Peace, Product',
    role: 'Design Lead',
    deliverable: 'Product Design',
    descEN: 'Project description coming soon...',
    descCN: '项目描述即将推出...'
  };

  return <ProjectTemplate projectNumber={4} metadata={metadata} />;
};

export default Project4;
