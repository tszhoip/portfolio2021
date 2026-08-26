import React from 'react';
import ProjectTemplate from '../../components/ProjectTemplate';

const Project5 = () => {
  const metadata = {
    title: 'Nike, Art Direction',
    role: 'Design Lead',
    deliverable: 'Art Direction',
    descEN: 'Project description coming soon...',
    descCN: '项目描述即将推出...'
  };

  return <ProjectTemplate projectNumber={5} metadata={metadata} />;
};

export default Project5;
