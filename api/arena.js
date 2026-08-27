/**
 * Serverless function to fetch ARE.NA channel data
 * Based on M201 design bot pattern - fetches server-side to bypass CORS
 * Reference: /Users/tsz/Documents/claude/M201/lib/arena.ts
 */

export default async function handler(req, res) {
  try {
    const channelSlug = 'tsz-ho-ip/mastertaste';

    // Fetch from ARE.NA v2 API using /contents endpoint
    const response = await fetch(
      `https://api.are.na/v2/channels/${encodeURIComponent(channelSlug)}/contents?per=100&sort=created_at&direction=desc`,
      {
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(5000)
      }
    );

    if (!response.ok) {
      console.error(`ARE.NA API error: ${response.status} ${response.statusText}`);
      return res.status(response.status).json({
        error: `ARE.NA API error: ${response.status}`,
        images: []
      });
    }

    const data = await response.json();

    // Extract image blocks (following M201 pattern)
    // Filter for Image class and extract image URL from original or display
    const images = (data.contents ?? [])
      .filter(block =>
        block.class === 'Image' &&
        (block.image?.original?.url || block.image?.display?.url)
      )
      .map(block => ({
        url: block.image.original?.url || block.image.display?.url,
        title: block.title || 'Untitled',
        sourceUrl: block.source?.url || `https://www.are.na/block/${block.id}`
      }));

    res.status(200).json({
      images,
      total: images.length,
      channel: channelSlug
    });
  } catch (error) {
    console.error('Error fetching ARE.NA:', error);
    res.status(500).json({
      error: error.message || 'Failed to fetch ARE.NA data',
      images: []
    });
  }
}
