import React from 'react';
import ProjectTemplate from '../../components/ProjectTemplate';

const Project4 = () => {
  const metadata = {
    title: 'Coco Robotics, Branding',
    role: 'Brand designer',
    deliverable: 'Logos, Design System',
    descEN: 'Coco Robotics is an innovative company focused on robotic solutions. Through strategic branding and visual identity design, we established a comprehensive design system that reflects their cutting-edge technology and forward-thinking approach to robotics.',
    descCN: 'Coco Robotics是一家专注于机器人解决方案的创新公司。通过战略品牌设计和视觉识别，我们建立了一套全面的设计系统，反映了他们在机器人技术中的前沿地位和前瞻性方法。'
  };

  return <ProjectTemplate projectNumber={4} metadata={metadata} />;
};

export default Project4;
