/**
 * Serverless function to scrape ARE.NA channel data
 * Scrapes live HTML instead of using deprecated v2 API
 * Automatically syncs with https://www.are.na/tsz-ho-ip/mastertaste
 */

export default async function handler(req, res) {
  try {
    const channelUrl = 'https://www.are.na/tsz-ho-ip/mastertaste';

    // Fetch ARE.NA channel HTML
    const response = await fetch(channelUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; portfolio-archive/1.0)'
      },
      signal: AbortSignal.timeout(10000)
    });

    if (!response.ok) {
      console.error(`ARE.NA fetch error: ${response.status}`);
      return res.status(500).json({
        error: `Failed to fetch ARE.NA page: ${response.status}`,
        images: []
      });
    }

    const html = await response.text();

    // Extract image data from HTML
    // ARE.NA stores image data in data attributes and script tags
    // Pattern: Look for image URLs in the JSON embedded in the page
    const images = extractImagesFromHtml(html);

    res.status(200).json({
      images,
      total: images.length,
      channel: 'tsz-ho-ip/mastertaste',
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error scraping ARE.NA:', error);
    res.status(500).json({
      error: error.message || 'Failed to scrape ARE.NA',
      images: []
    });
  }
}

/**
 * Extract image URLs from ARE.NA HTML
 * Looks for image blocks in the HTML structure
 */
function extractImagesFromHtml(html) {
  const images = [];

  // Pattern 1: Look for image URLs in data attributes
  // ARE.NA embeds image data in various formats
  const imageUrlPattern = /https:\/\/d2w9rnfcy7mm78\.cloudfront\.net\/[\w\-/]+\.(jpg|jpeg|png|gif|webp)/gi;
  let match;

  while ((match = imageUrlPattern.exec(html)) !== null) {
    const url = match[0];
    if (!images.some(img => img.url === url)) {
      images.push({
        url: url,
        title: 'Design post',
        sourceUrl: 'https://www.are.na/tsz-ho-ip/mastertaste'
      });
    }
  }

  // Pattern 2: Look for image data in Next.js props or JSON
  // ARE.NA uses Next.js, so check for __NEXT_DATA__ or similar
  const jsonPattern = /"original_url":"(https:\/\/[^"]+)"/g;
  while ((match = jsonPattern.exec(html)) !== null) {
    const url = match[1];
    // Only add ARE.NA CDN images
    if (url.includes('cloudfront.net') && !images.some(img => img.url === url)) {
      images.push({
        url: url,
        title: 'Design post',
        sourceUrl: 'https://www.are.na/tsz-ho-ip/mastertaste'
      });
    }
  }

  // Remove duplicates and return first 100
  const uniqueImages = Array.from(new Map(images.map(img => [img.url, img])).values());
  return uniqueImages.slice(0, 100);
}
