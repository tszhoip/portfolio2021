import React from 'react';
import ProjectTemplate from '../../components/ProjectTemplate';

const Project2 = () => {
  const metadata = {
    title: 'Canoo, Design System',
    role: 'Design Lead',
    deliverable: 'Art Direction, Design System',
    descEN: 'To enhance Canoo\'s design and development processes, we aim to establish a comprehensive design system rooted in functionalism. By addressing the current challenges of misalignment, slow turnaround times, and inconsistent aesthetics, we can streamline workflows, improve code quality, and ensure adherence to our company\'s minimalist design philosophy. Our solution involves creating a centralized repository of reusable UI components, developing a detailed style guide, implementing a version control system, and providing ongoing training and support. This approach will foster collaboration between design and development teams, accelerate project timelines, and deliver high-quality products that align with our brand identity.',
    descCN: '为了提升 Canoo 的设计和开发流程，我们旨在建立一个基于功能主义的综合设计系统。通过解决当前存在的错位、缓慢的周转时间和不一致的美学问题，我们可以简化工作流程，提高代码质量，并确保遵守公司简约的设计理念。我们的解决方案包括创建一个集中的可重用 UI 组件库、开发详细的样式指南、实施版本控制系统以及提供持续的培训和支持。这种方法将促进设计和开发团队之间的协作，加快项目时间表，并交付与我们品牌形象相符的高质量产品。'
  };

  return <ProjectTemplate projectNumber={2} metadata={metadata} />;
};

export default Project2;
