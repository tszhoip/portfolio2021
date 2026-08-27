/**
 * Serverless function to fetch ARE.NA channel data
 * Bypasses CORS restrictions by fetching server-side
 */

export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.are.na/v2/channels/tsz-ho-ip/mastertaste?per=100');

    if (!response.ok) {
      return res.status(response.status).json({ error: 'ARE.NA API error' });
    }

    const data = await response.json();

    // Extract image blocks
    const images = data.contents
      .filter(block => block.image)
      .map(block => ({
        url: block.image.url,
        title: block.title || block.source?.title || 'Untitled'
      }));

    res.status(200).json({ images });
  } catch (error) {
    console.error('Error fetching ARE.NA:', error);
    res.status(500).json({ error: 'Failed to fetch ARE.NA data' });
  }
}
