import React from 'react';
import ProjectTemplate from '../../components/ProjectTemplate';

const Project5 = () => {
  const metadata = {
    title: 'Innocell, Brand Concept',
    role: 'Design Consultant',
    deliverable: 'Concept Design, Art Direction',
    descEN: 'Innocell is a hostel and coworking space located right next to the university. The hotel embraces a tech-forward experience where anything can be controlled through an app. The art direction features a nomadic style with neumorphism elements, creating a modern and intuitive visual language.',
    descCN: 'Innocell是一个位于大学旁边的青年旅舍和共享办公空间。这家酒店拥抱技术前沿的体验,任何东西都可以通过应用程序控制。艺术方向采用游牧风格和神经拟态元素,创造了一个现代化和直观的视觉语言。'
  };

  return <ProjectTemplate projectNumber={5} metadata={metadata} />;
};

export default Project5;
