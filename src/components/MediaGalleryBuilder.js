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
  const mediaArray = [];

  // If no metadata provided, just load images
  if (!metadata) {
    return loadImagesOnly(projectNumber);
  }

  // Add images (1.jpg, 2.jpg, etc.)
  const images = await discoverImages(projectNumber);
  mediaArray.push(
    ...images.map((file, idx) => ({
      type: 'image',
      file,
      order: (idx + 1) * 10, // Default order: 10, 20, 30, etc. (leaves room for videos in between)
    }))
  );

  // Add video if it exists
  if (metadata.video) {
    mediaArray.push({
      type: 'video',
      url: metadata.video,
      order: 999, // Default to end (can be overridden by metadata)
    });
  }

  // Re-sort by order field if metadata provides ordering
  if (metadata.media && Array.isArray(metadata.media)) {
    // If metadata has explicit media ordering, use it
    return metadata.media;
  }

  // Sort by order field
  mediaArray.sort((a, b) => a.order - b.order);

  return mediaArray;
};

/**
 * Discover images in project folder
 * Tries 1.jpg through 15.jpg (skips videos at position 1)
 */
const discoverImages = async (projectNumber) => {
  const images = [];
  let consecutiveMisses = 0;

  for (let i = 1; i <= 15; i++) {
    const imagePath = `/images/project-${projectNumber}/${i}.jpg`;
    const exists = await imageExists(imagePath);

    if (exists) {
      images.push(imagePath);
      consecutiveMisses = 0; // Reset counter when we find an image
    } else {
      consecutiveMisses++;
      // Stop after 2 consecutive misses (allows for videos mixed in)
      if (consecutiveMisses >= 2) {
        break;
      }
    }
  }

  return images;
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
