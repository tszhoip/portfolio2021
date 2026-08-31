/**
 * MediaGalleryBuilder
 * Combines images and videos into a single ordered media array
 *
 * Scans /public/images/project-{n}/ for image files (1.jpg, 2.jpg, etc.)
 * and combines them with video URL from metadata
 * Sorts by order field
 */

/**
 * Build media array from images and optional video
 * Returns array of media objects: { type: 'image'|'video', file/url, order }
 */
export const buildMediaArray = async (projectNumber, metadata) => {
  // If metadata has explicit media ordering, use it
  if (metadata && metadata.media && Array.isArray(metadata.media)) {
    return metadata.media;
  }

  // Otherwise, discover media with priority order:
  // 1. X-vid.mp4 (video)
  // 2. X-headline.jpg (headline image)
  // 3. X.jpg (regular image)
  const discoveredMedia = await discoverMedia(projectNumber);

  // Sort by order field
  discoveredMedia.sort((a, b) => a.order - b.order);

  return discoveredMedia;
};

/**
 * Discover media for project folder with priority order:
 * 1. X-vid.mp4 (video) - highest priority
 * 2. X-headline.jpg (headline image) - second priority
 * 3. X.jpg (regular image) - lowest priority
 */
const discoverMedia = async (projectNumber) => {
  const mediaItems = [];
  let consecutiveMisses = 0;

  for (let i = 1; i <= 15; i++) {
    let found = false;

    // Priority 1: Check for video
    const videoPath = `/images/project-${projectNumber}/${i}-vid.mp4`;
    if (await videoExists(videoPath)) {
      mediaItems.push({
        type: 'video',
        url: videoPath,
        order: i * 10
      });
      found = true;
      consecutiveMisses = 0;
    }
    // Priority 2: Check for headline image
    else if (await imageExists(`/images/project-${projectNumber}/${i}-headline.jpg`)) {
      mediaItems.push({
        type: 'headline',
        file: `/images/project-${projectNumber}/${i}-headline.jpg`,
        order: i * 10
      });
      found = true;
      consecutiveMisses = 0;
    }
    // Priority 3: Check for regular image
    else if (await imageExists(`/images/project-${projectNumber}/${i}.jpg`)) {
      mediaItems.push({
        type: 'image',
        file: `/images/project-${projectNumber}/${i}.jpg`,
        order: i * 10
      });
      found = true;
      consecutiveMisses = 0;
    }

    // Track consecutive misses
    if (!found) {
      consecutiveMisses++;
      // Stop after 3 consecutive misses
      if (consecutiveMisses >= 3) {
        break;
      }
    }
  }

  return mediaItems;
};

/**
 * Legacy function - redirect to discoverMedia
 */
const discoverImages = async (projectNumber) => {
  const media = await discoverMedia(projectNumber);
  return media.filter(m => m.type === 'image').map(m => m.file);
};

/**
 * Check if image exists
 */
const imageExists = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};

/**
 * Check if video exists
 */
const videoExists = (src) => {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.onloadedmetadata = () => resolve(true);
    video.onerror = () => resolve(false);
    video.src = src;
  });
};

/**
 * Load only images (no video)
 */
const loadImagesOnly = async (projectNumber) => {
  const images = await discoverImages(projectNumber);
  return images.map((file, idx) => ({
    type: 'image',
    file,
    order: (idx + 1) * 10,
  }));
};

/**
 * Parse media array from metadata
 * If metadata.media is provided, use it directly
 * Otherwise build from images + video
 */
export const parseMediaArray = async (projectNumber, metadata) => {
  if (metadata && metadata.media && Array.isArray(metadata.media)) {
    // Media array already provided in metadata
    return metadata.media;
  }

  // Build media array from images + video
  return buildMediaArray(projectNumber, metadata);
};
