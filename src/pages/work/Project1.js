import React from 'react';
import ProjectTemplate from '../../components/ProjectTemplate';

const Project1 = () => {
  const metadata = {
    title: 'Canoo, Brand',
    role: 'Design Lead',
    deliverable: 'Brand Identity, Visual Language',
    descEN: 'CanooB, an electric vehicle startup, has been at the forefront of innovative mobility solutions since 2018. Initially focusing on niche markets like urban commute and subscription services, the company shifted its priority to commercial vehicles post-IPO. This strategic pivot necessitated a reevaluation of the brand\'s visual identity. The Brand Vision project aims to realign the visual and brand messaging to better reflect the company\'s evolving ethos and motto.',
    descCN: 'CanooB是一家电动汽车初创公司，自2018年以来一直走在创新出行解决方案的前沿。该公司最初专注于城市通勤和订阅服务等利基市场，但在IPO后将优先级转向商用车辆。这一战略转变需要重新评估该品牌的视觉形象。品牌愿景项目旨在调整视觉和品牌信息，以更好地反映公司不断发展的精神和座右铭。'
  };

  return <ProjectTemplate projectNumber={1} metadata={metadata} />;
};

export default Project1;
