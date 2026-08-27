/**
 * Serverless function to fetch ARE.NA channel data using Puppeteer
 * Renders the live page to extract posts after JavaScript loads
 * Automatically syncs with https://www.are.na/tsz-ho-ip/mastertaste
 */

import puppeteer from 'puppeteer';

// Reuse browser connection across function invocations
let browserWSEndpoint = null;

export default async function handler(req, res) {
  try {
    const channelUrl = 'https://www.are.na/tsz-ho-ip/mastertaste';

    // Launch or connect to browser
    const browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();

    // Set viewport and user agent
    await page.setViewport({ width: 1280, height: 800 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');

    // Navigate to channel
    await page.goto(channelUrl, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Extract image URLs from rendered DOM
    const images = await page.evaluate(() => {
      const imageElements = document.querySelectorAll('img[src*="cloudfront.net"]');
      const images = [];
      const seenUrls = new Set();

      imageElements.forEach(img => {
        let url = img.src || img.dataset.src;

        // Clean up URL - remove query params but keep the image ID
        if (url && url.includes('cloudfront.net')) {
          // Extract just the base URL without tracking params
          const baseUrl = url.split('?')[0];

          if (baseUrl && !seenUrls.has(baseUrl)) {
            seenUrls.add(baseUrl);
            images.push({
              url: baseUrl,
              title: img.alt || 'Design post',
              sourceUrl: 'https://www.are.na/tsz-ho-ip/mastertaste'
            });
          }
        }
      });

      return images;
    });

    await browser.close();

    res.status(200).json({
      images,
      total: images.length,
      channel: 'tsz-ho-ip/mastertaste',
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching ARE.NA with Puppeteer:', error);
    res.status(500).json({
      error: error.message || 'Failed to fetch ARE.NA',
      images: []
    });
  }
}
