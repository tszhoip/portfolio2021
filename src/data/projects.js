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
 * - hasContent: true if project has metadata/images, false if placeholder
 */

export const projects = [
  {
    id: 1,
    title: 'Canoo, Brand',
    thumbnail: '/images/project-1/thumb.jpg',
    hasContent: true,
    route: '/work/project-1'
  },
  {
    id: 2,
    title: 'Canoo, Design System',
    thumbnail: '/images/project-2/thumb.jpg',
    hasContent: true,
    route: '/work/project-2'
  },
  {
    id: 3,
    title: 'Aboard, Visual Identity',
    thumbnail: '/images/project-3/thumb.jpg',
    hasContent: true,
    route: '/work/project-3'
  },
  {
    id: 4,
    title: 'Coco Robotics, Branding',
    thumbnail: '/images/project-4/thumb.jpg',
    hasContent: true,
    route: '/work/project-4'
  },
  // Project 5+ coming soon - add to Google Sheet first
  // Add new projects here:
  // {
  //   id: 5,
  //   title: 'Project 5',
  //   thumbnail: '/images/project-5/thumb.jpg',
  //   hasContent: false,
  //   route: '/work/project-5'
  // }
];

export default projects;
