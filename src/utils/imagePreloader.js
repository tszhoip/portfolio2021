/**
 * Image Preloader Utility
 * Preloads images in the background to avoid flashing/flicker
 * when swapping images on hover
 */

const imageCache = new Set();

/**
 * Preload a single image
 * @param {string} url - Image URL to preload
 * @returns {Promise<void>}
 */
export const preloadImage = (url) => {
  return new Promise((resolve, reject) => {
    // If already cached, resolve immediately
    if (imageCache.has(url)) {
      resolve();
      return;
    }

    const img = new Image();

    img.onload = () => {
      imageCache.add(url);
      resolve();
    };

    img.onerror = () => {
      console.warn(`Failed to preload image: ${url}`);
      reject(new Error(`Failed to preload image: ${url}`));
    };

    img.src = url;
  });
};

/**
 * Preload multiple images in parallel
 * @param {string[]} urls - Array of image URLs to preload
 * @returns {Promise<void>}
 */
export const preloadImages = (urls) => {
  return Promise.allSettled(
    urls
      .filter(url => url) // Filter out null/undefined
      .map(url => preloadImage(url))
  );
};

/**
 * Check if image is already cached
 * @param {string} url - Image URL to check
 * @returns {boolean}
 */
export const isImageCached = (url) => {
  return imageCache.has(url);
};

/**
 * Clear image cache
 */
export const clearImageCache = () => {
  imageCache.clear();
};
