import React, { useState, useEffect } from 'react';
import { BlockImgCon } from '../component/BlockImgPlay';

/**
 * Archive Page - Displays curated content from ARE.NA channel
 * Channel: https://www.are.na/tsz-ho-ip/mastertaste
 * Uses ARE.NA Electron API (current stable endpoint)
 */
function Snap() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use ARE.NA Electron API - their current stable endpoint
    fetch('https://www.are.na/tsz-ho-ip/mastertaste.json')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        // Extract image URLs from blocks
        const imageBlocks = (data.contents || [])
          .filter(block => block.image)
          .map(block => {
            // ARE.NA returns image URLs in different formats
            return block.image.display?.url || block.image.url || block.image;
          })
          .filter(url => url && typeof url === 'string');

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
        <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
          <p>📌 <a href="https://www.are.na/tsz-ho-ip/mastertaste" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'underline' }}>View Archive on ARE.NA</a></p>
          <p style={{ fontSize: '14px', marginTop: '10px' }}>Add images to your mastertaste channel to populate the archive</p>
        </div>
      )}
    </div>
  );
}

export default Snap;
