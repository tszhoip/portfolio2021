import React from 'react';
import ProjectTemplate from '../../components/ProjectTemplate';

const Project3 = () => {
  const metadata = {
    title: 'Canoo, Process',
    role: 'Design Lead',
    deliverable: 'Process Documentation',
    descEN: 'Project description coming soon...',
    descCN: '项目描述即将推出...'
  };

  return <ProjectTemplate projectNumber={3} metadata={metadata} />;
};

export default Project3;
