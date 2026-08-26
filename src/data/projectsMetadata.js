/**
 * Projects Metadata
 *
 * Centralized source of all project metadata synced with Google Sheet:
 * https://docs.google.com/spreadsheets/d/1_19XPYR2QdK6QgrrHTEtIQySUafmgYdOLABhpmpTXDA/
 *
 * Each project contains:
 * - title: Project name
 * - role: Designer's role
 * - deliverable: What was delivered
 * - descEN: English description
 * - descCN: Chinese description
 */

export const projectsMetadata = {
  1: {
    title: 'Canoo, Brand',
    role: 'Design Lead',
    deliverable: 'Brand Identity, Visual Language',
    descEN: 'CanooB, an electric vehicle startup, has been at the forefront of innovative mobility solutions since 2018. Initially focusing on niche markets like urban commute and subscription services, the company shifted its priority to commercial vehicles post-IPO. This strategic pivot necessitated a reevaluation of the brand\'s visual identity. The Brand Vision project aims to realign the visual and brand messaging to better reflect the company\'s evolving ethos and motto.',
    descCN: 'CanooB是一家电动汽车初创公司，自2018年以来一直走在创新出行解决方案的前沿。该公司最初专注于城市通勤和订阅服务等利基市场，但在IPO后将优先级转向商用车辆。这一战略转变需要重新评估该品牌的视觉形象。品牌愿景项目旨在调整视觉和品牌信息，以更好地反映公司不断发展的精神和座右铭。'
  },
  2: {
    title: 'Canoo, Design System',
    role: 'Design Lead',
    deliverable: 'Art Direction, Design System',
    descEN: 'To enhance Canoo\'s design and development processes, we aim to establish a comprehensive design system rooted in functionalism. By addressing the current challenges of misalignment, slow turnaround times, and inconsistent aesthetics, we can streamline workflows, improve code quality, and ensure adherence to our company\'s minimalist design philosophy. Our solution involves creating a centralized repository of reusable components, developing a detailed style guide, implementing a version control system, and providing ongoing training and support. This approach will foster collaboration between design and development teams, accelerate project timelines, and deliver high-quality products that align with our brand identity.',
    descCN: '为了提升Canoo的设计和开发流程，我们致力于建立一个以功能性为根基的综合设计系统。通过解决当前的不对齐、缓慢的周转时间和不一致的美学问题，我们能够简化工作流程、提高代码质量，并确保遵守我们公司的极简设计理念。我们的解决方案涉及创建可复用组件的中央存储库、开发详细的风格指南、实施版本控制系统，以及提供持续的培训和支持。这种方法将促进设计和开发团队之间的协作，加快项目时间表，并交付与我们品牌形象相一致的高质量产品。'
  },
  3: {
    title: 'Aboard, Visual Identity',
    role: 'Logo Designer',
    deliverable: 'Logos',
    descEN: 'Aboard is an RV company that has a whole new idea for EV RV. We created a distinctive visual identity that captures their innovative approach to electric recreational vehicles. The design reflects their commitment to combining adventure with sustainability, establishing a strong brand presence in the emerging EV RV market.',
    descCN: 'Aboard是一家电动房车公司，拥有全新的电动房车理念。我们创建了一个独特的视觉形象，捕捉了他们对电动房车的创新方法。该设计反映了他们将冒险与可持续性相结合的承诺，在新兴电动房车市场中建立了强大的品牌形象。'
  },
  4: {
    title: 'Coco Robotics, Branding',
    role: 'Brand designer',
    deliverable: 'Logos, Design System',
    descEN: 'Coco Robotics is an innovative company focused on robotic solutions. Through strategic branding and visual identity design, we established a comprehensive design system that reflects their cutting-edge technology and forward-thinking approach to robotics. The brand identity conveys precision, innovation, and reliability in the robotics industry.',
    descCN: 'Coco Robotics是一家专注于机器人解决方案的创新公司。通过战略品牌设计和视觉识别，我们建立了一套全面的设计系统，反映了他们在机器人技术中的前沿地位和前瞻性方法。品牌形象传达了机器人行业中的精确性、创新性和可靠性。'
  },
  5: {
    title: 'Innocell, Brand Concept',
    role: 'Design Consultant',
    deliverable: 'Concept Design, Art Direction',
    descEN: 'Innocell is a hostel and coworking space located right next to the university. The hotel embraces a tech-forward experience where anything can be controlled through an app. The art direction features a nomadic style with neumorphism elements, creating a modern and intuitive visual language that resonates with digital natives.',
    descCN: 'Innocell是一个位于大学旁边的青年旅舍和共享办公空间。这家酒店拥抱技术前沿的体验,任何东西都可以通过应用程序控制。艺术方向采用游牧风格和神经拟态元素,创造了一个现代化和直观的视觉语言,与数字一代产生共鸣。'
  },
  6: {
    title: 'Project 6',
    role: 'Designer',
    deliverable: 'TBD',
    descEN: 'Project description coming soon. Please update from Google Sheet.',
    descCN: '项目描述即将推出。请从 Google Sheet 更新。'
  }
};

export const getProjectMetadata = (projectNumber) => {
  return projectsMetadata[projectNumber] || null;
};

export default projectsMetadata;
