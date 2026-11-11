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
 * - type: Project type/category (for featured section)
 * - feature: Boolean flag to mark project as featured
 */

/* Canoo copy, authored in public/images/canoo-brand/2-headline.txt and hard
   rendered here. One home for each string: the blocks below and the project
   info modal both read these. */
const canooTaglineEN = "A brand identity that doesn't want to feel like a car brand";
const canooDescEN =
  'Canoo, an electric vehicle startup, has been at the forefront of innovative mobility solutions since 2018. Initially focusing on niche markets like urban commute and subscription services, the company shifted its priority to commercial vehicles post-IPO. This strategic pivot necessitated a reevaluation of the brand\'s visual identity. The Brand Vision project aims to realign the visual and brand messaging to better reflect the company\'s evolving ethos and motto.';
const canooDescCN =
  'Canoo 是一家電動車初創公司，自 2018 年起一直走在創新出行方案的前沿。公司最初專注於城市通勤及訂閱服務等小眾市場，上市後將重心轉向商用車。這次策略轉型，令品牌需要重新審視其視覺形象。Brand Vision 項目旨在重新調整視覺與品牌訊息，以更貼切地反映公司不斷演變的理念與宗旨。';
const canooType = 'Branding, Identity, Visual Direction';
const canooMedia = '/images/canoo-brand';
const systemMedia = '/images/canoo-system';

export const projectsMetadata = {
  1: {
    slug: 'canoo-brand',
    title: 'Canoo, Brand',
    role: 'Design Lead',
    deliverable: 'Brand Identity, Visual Language',
    descEN: canooDescEN,
    descCN: canooDescCN,
    type: canooType,
    feature: true,
    /* Hard rendered from the folder: every file listed once, in order, so the
       page makes exactly the requests it needs instead of probing for names
       that may not exist. Re-render this list when the folder changes. */
    media: [
      { type: 'video', url: `${canooMedia}/1-vid.mp4` },
      {
        type: 'blockA',
        items: [
          { label: 'Type', body: canooType },
          { label: 'Description', body: [canooTaglineEN, canooDescEN] },
        ],
      },
      { type: 'grid', files: [`${canooMedia}/3a.jpg`, `${canooMedia}/3b.jpg`] },
      { type: 'image', file: `${canooMedia}/4.jpg`, ratio: '2250 / 1594' },
      { type: 'grid', files: [`${canooMedia}/5a.jpg`, `${canooMedia}/5b.jpg`] },
      { type: 'image', file: `${canooMedia}/6.jpg`, ratio: '2254 / 1500' },
      { type: 'image', file: `${canooMedia}/7.jpg`, ratio: '2254 / 1500' },
      { type: 'blockB', lines: ['Build for the work. Not the showroom.'] },
      { type: 'image', file: `${canooMedia}/9.jpg`, ratio: '2250 / 1500' },
      { type: 'image', file: `${canooMedia}/10.jpg`, ratio: '2250 / 1500' },
    ],
  },
  2: {
    slug: 'canoo-system',
    title: 'Canoo, Design System',
    headline: {
      title: 'Design System',
      tagline: 'A comprehensive design system rooted in functionalism.'
    },
    role: 'Design Lead',
    deliverable: 'Art Direction, Design System',
    descEN: 'To enhance Canoo\'s design and development processes, we aim to establish a comprehensive design system rooted in functionalism. By addressing the current challenges of misalignment, slow turnaround times, and inconsistent aesthetics, we can streamline workflows, improve code quality, and ensure adherence to our company\'s minimalist design philosophy. Our solution involves creating a centralized repository of reusable components, developing a detailed style guide, implementing a version control system, and providing ongoing training and support. This approach will foster collaboration between design and development teams, accelerate project timelines, and deliver high-quality products that align with our brand identity.',
    descCN: '为了提升Canoo的设计和开发流程，我们致力于建立一个以功能性为根基的综合设计系统。通过解决当前的不对齐、缓慢的周转时间和不一致的美学问题，我们能够简化工作流程、提高代码质量，并确保遵守我们公司的极简设计理念。我们的解决方案涉及创建可复用组件的中央存储库、开发详细的风格指南、实施版本控制系统，以及提供持续的培训和支持。这种方法将促进设计和开发团队之间的协作，加快项目时间表，并交付与我们品牌形象相一致的高质量产品。',
    type: 'Design System',
    feature: true,
    /* Hard rendered from the folder: fifteen images, in order, nothing else.
       Re-render this list when the folder changes. */
    media: [
      { type: 'image', file: `${systemMedia}/1.jpg`, ratio: '2160 / 1440' },
      { type: 'image', file: `${systemMedia}/2.jpg`, ratio: '2160 / 1440' },
      { type: 'image', file: `${systemMedia}/3.jpg`, ratio: '2160 / 1440' },
      { type: 'image', file: `${systemMedia}/4.jpg`, ratio: '2160 / 1440' },
      { type: 'image', file: `${systemMedia}/5.jpg`, ratio: '2160 / 1440' },
      { type: 'image', file: `${systemMedia}/6.jpg`, ratio: '2160 / 1440' },
      { type: 'image', file: `${systemMedia}/7.jpg`, ratio: '2160 / 1440' },
      { type: 'image', file: `${systemMedia}/8.jpg`, ratio: '2160 / 1440' },
      { type: 'image', file: `${systemMedia}/9.jpg`, ratio: '2160 / 1440' },
      { type: 'image', file: `${systemMedia}/10.jpg`, ratio: '2160 / 1440' },
      { type: 'image', file: `${systemMedia}/11.jpg`, ratio: '2400 / 1920' },
      { type: 'image', file: `${systemMedia}/12.jpg`, ratio: '2400 / 1580' },
      { type: 'image', file: `${systemMedia}/13.jpg`, ratio: '2400 / 1580' },
      { type: 'image', file: `${systemMedia}/14.jpg`, ratio: '2400 / 1580' },
      { type: 'image', file: `${systemMedia}/15.jpg`, ratio: '2400 / 1580' },
    ],
  },
  3: {
    title: 'Aboard, Visual Identity',
    headline: {
      title: 'Aboard',
      tagline: 'A distinctive visual identity for electric recreational vehicles.'
    },
    role: 'Logo Designer',
    deliverable: 'Logos',
    descEN: 'Aboard is an RV company that has a whole new idea for EV RV. We created a distinctive visual identity that captures their innovative approach to electric recreational vehicles. The design reflects their commitment to combining adventure with sustainability, establishing a strong brand presence in the emerging EV RV market.',
    descCN: 'Aboard是一家电动房车公司，拥有全新的电动房车理念。我们创建了一个独特的视觉形象，捕捉了他们对电动房车的创新方法。该设计反映了他们将冒险与可持续性相结合的承诺，在新兴电动房车市场中建立了强大的品牌形象。',
    type: 'Logo Design',
    feature: true
  },
  4: {
    title: 'Coco Robotics, Branding',
    headline: {
      title: 'Coco Robotics',
      tagline: 'Precision, innovation, and reliability in robotics.'
    },
    role: 'Brand designer',
    deliverable: 'Logos, Design System',
    descEN: 'Coco Robotics is an innovative company focused on robotic solutions. Through strategic branding and visual identity design, we established a comprehensive design system that reflects their cutting-edge technology and forward-thinking approach to robotics. The brand identity conveys precision, innovation, and reliability in the robotics industry.',
    descCN: 'Coco Robotics是一家专注于机器人解决方案的创新公司。通过战略品牌设计和视觉识别，我们建立了一套全面的设计系统，反映了他们在机器人技术中的前沿地位和前瞻性方法。品牌形象传达了机器人行业中的精确性、创新性和可靠性。',
    type: 'Branding',
    feature: true
  },
  5: {
    title: 'Nike, Holiday Campaign',
    headline: {
      title: 'Nike Holiday Campaign 2019',
      tagline: 'A holiday campaign for Nike SoHo — one tape graphic, carried across space, motion, and fixture.'
    },
    role: 'Art Director',
    deliverable: 'Art Direction, Environmental Graphics, Motion',
    descEN: 'Nike\'s 2019 holiday campaign needed to live in the SoHo store, not just hang on its walls. We took the campaign\'s tape graphic — a repeating band of swoosh and headline type — and treated it as the one device that could travel: into floor graphics that redraw the retail floor as a court, up into wall-height typography, through the motion on the in-store displays, and onto the fixtures themselves. The headline, It\'s Only A Crazy Dream Until You Do It, scales from a single strip of tape to the full height of the ground floor, with athlete lockups carrying the secondary message at eye level.',
    descCN: '耐克 2019 节日营销需要真正落地于 SoHo 门店，而不只是挂在墙上。我们以campaign的胶带图形——由 Swoosh 与标语重复排列而成的条带——作为唯一贯穿始终的视觉装置：延伸为将零售地面重新绘制成球场的地贴，向上放大为整墙字体，进入店内屏幕的动态内容，最终落到陈列道具之上。主标语 It\'s Only A Crazy Dream Until You Do It 从一条胶带放大到首层通高的尺度，运动员组合图则在视平线高度承载次级信息。',
    type: 'Campaign',
    feature: true
  },
  6: {
    title: 'Project 6',
    headline: {
      title: 'Project 6',
      tagline: 'Project description coming soon.'
    },
    role: 'Designer',
    deliverable: 'TBD',
    descEN: 'Project description coming soon. Please update from Google Sheet.',
    descCN: '项目描述即将推出。请从 Google Sheet 更新。',
    type: 'TBD',
    feature: false
  }
};

export const getProjectMetadata = (projectNumber) => {
  return projectsMetadata[projectNumber] || null;
};

/**
 * A project's slug is its one identifier: it names the route AND the media
 * folder, so /work/canoo-brand reads its images from /images/canoo-brand.
 * Renaming a project is adding a `slug` here and renaming the folder to
 * match - nothing else needs to know.
 *
 * A project without a slug keeps the project-{n} name it has always had.
 */
export const projectSlug = (projectNumber) =>
  projectsMetadata[projectNumber]?.slug || `project-${projectNumber}`;

export const projectPath = (projectNumber) => `/work/${projectSlug(projectNumber)}`;

export const projectMedia = (projectNumber) => `/images/${projectSlug(projectNumber)}`;

// every route that resolves to a project page, for callers that need to ask
// "is this a project page?" without matching on the shape of the slug
export const projectPaths = Object.keys(projectsMetadata).map(projectPath);

export default projectsMetadata;
