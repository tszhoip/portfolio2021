import React, { useState, useEffect } from 'react';
import { BlockImgCon } from '../component/BlockImgPlay';

/**
 * Archive Page - Displays curated content from ARE.NA channel
 * Channel: https://www.are.na/tsz-ho-ip/mastertaste
 * Auto-updates when channel changes (no code edits needed)
 */
function Snap() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blocks from ARE.NA channel
    fetch('https://api.are.na/v2/channels/tsz-ho-ip/mastertaste')
      .then(res => res.json())
      .then(data => {
        // Filter to image blocks only and extract URLs
        const imageBlocks = data.contents
          .filter(block => block.image && block.image.display && block.image.display.url)
          .map(block => block.image.display.url);

        setImages(imageBlocks);
      })
      .catch(error => {
        console.error('Error fetching ARE.NA channel:', error);
        setImages([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <p>Loading archive...</p>
      </div>
    );
  }

  return (
    <div>
      {images.length > 0 ? (
        <BlockImgCon images={images} gtcD="repeat(4, 25%)" gtcM="repeat(2, 50%)" />
      ) : (
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <p>No images in archive yet. Check your ARE.NA channel!</p>
        </div>
      )}
    </div>
  );
}

export default Snap;
