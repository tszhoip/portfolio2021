/**
 * Projects Configuration
 *
 * This file defines all available projects.
 * When you add a new project folder to assets/works/project-X/,
 * just add it here and it will appear on the home page.
 *
 * Structure:
 * - id: project number (1, 2, 3, etc.)
 * - title: display title
 * - thumbnail: public path to thumbnail
 * - thumbnailHover: (optional) path to hover/mobile alternate image
 * - hasContent: true if project has metadata/images, false if placeholder
 */

export const projects = [
  {
    id: 1,
    title: 'Canoo, Brand',
    thumbnail: '/images/project-1/thumb.jpg',
    thumbnailHover: '/images/project-1/thumb-hover.jpg',
    hasContent: true,
    route: '/work/project-1'
  },
  {
    id: 2,
    title: 'Canoo, Design System',
    thumbnail: '/images/project-2/thumb.jpg',
    thumbnailHover: '/images/project-2/thumb-hover.jpg',
    hasContent: true,
    route: '/work/project-2'
  },
  {
    id: 3,
    title: 'Aboard, Visual Identity',
    thumbnail: '/images/project-3/thumb.jpg',
    thumbnailHover: '/images/project-3/thumb-hover.jpg',
    hasContent: true,
    route: '/work/project-3'
  },
  {
    id: 4,
    title: 'Coco Robotics, Branding',
    thumbnail: '/images/project-4/thumb.jpg',
    thumbnailHover: '/images/project-4/thumb-hover.jpg',
    hasContent: true,
    route: '/work/project-4'
  },
  {
    id: 5,
    title: 'Innocell, Brand Concept',
    thumbnail: '/images/project-5/thumb.jpg',
    thumbnailHover: '/images/project-5/thumb-hover.jpg',
    hasContent: true,
    route: '/work/project-5'
  },
  {
    id: 6,
    title: 'Project 6',
    thumbnail: '/images/project-6/thumb.jpg',
    thumbnailHover: '/images/project-6/thumb-hover.jpg',
    hasContent: true,
    route: '/work/project-6'
  }
];

export default projects;
