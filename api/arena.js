/**
 * Serverless function to fetch ARE.NA channel data using Puppeteer
 * Renders the live page to extract posts after JavaScript loads
 * Automatically syncs with https://www.are.na/tsz-ho-ip/mastertaste
 */

import puppeteer from 'puppeteer';

// Reuse browser connection across function invocations
let browserWSEndpoint = null;

export default async function handler(req, res) {
  let browser;
  try {
    const channelUrl = 'https://www.are.na/tsz-ho-ip/mastertaste';

    // Launch browser with optimized settings for Vercel
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--disable-web-security'
      ]
    });

    const page = await browser.newPage();

    // Set viewport and user agent
    await page.setViewport({ width: 1280, height: 800 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');

    // Set timeout
    page.setDefaultTimeout(20000);
    page.setDefaultNavigationTimeout(20000);

    // Navigate to channel
    await page.goto(channelUrl, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Scroll to load all lazy-loaded images
    let previousHeight = 0;
    let attempts = 0;
    const maxAttempts = 10;

    while (attempts < maxAttempts) {
      // Get current page height
      const currentHeight = await page.evaluate(() => document.body.scrollHeight);

      if (currentHeight === previousHeight) {
        break; // No more content to load
      }

      previousHeight = currentHeight;

      // Scroll to bottom
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      // Wait for images to load
      await new Promise(resolve => setTimeout(resolve, 500));
      attempts++;
    }

    // Extract image URLs from rendered DOM
    const images = await page.evaluate(() => {
      // Look for img tags and also check background images
      const imageElements = document.querySelectorAll('img');
      const images = [];
      const seenUrls = new Set();

      imageElements.forEach(img => {
        let url = img.src || img.dataset.src;

        // Clean up URL - remove query params
        if (url && url.includes('cloudfront.net')) {
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

    if (browser) {
      await browser.close();
    }

    res.status(200).json({
      images,
      total: images.length,
      channel: 'tsz-ho-ip/mastertaste',
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching ARE.NA with Puppeteer:', error);
    if (browser) {
      try {
        await browser.close();
      } catch (e) {
        console.error('Error closing browser:', e);
      }
    }
    res.status(500).json({
      error: error.message || 'Failed to fetch ARE.NA',
      images: []
    });
  }
}
