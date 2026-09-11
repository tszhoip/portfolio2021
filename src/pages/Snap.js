import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { base } from '../theme';
import { Wrap } from '../component/Core';

/**
 * Archive Page
 * Reached from the footer "Resource" link (/archive, /snap).
 *
 * Images are read straight from /public/images/archive/, named 1.jpg,
 * 2.jpg, ... using the same numeric-probe approach as MediaGalleryBuilder.
 * No API, no auth, nothing to expire.
 */

const MAX_IMAGES = 120;
const BATCH = 12;
const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

const GridContainer = styled(Wrap)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  padding: 0;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ImageItem = styled.div`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
`;

const exists = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });

const findAt = async (index) => {
  for (const ext of EXTENSIONS) {
    const src = `/images/archive/${index}.${ext}`;
    // eslint-disable-next-line no-await-in-loop
    if (await exists(src)) return src;
  }
  return null;
};

const discoverArchive = async () => {
  const found = [];

  for (let start = 1; start <= MAX_IMAGES; start += BATCH) {
    const indexes = [];
    for (let i = start; i < start + BATCH && i <= MAX_IMAGES; i += 1) {
      indexes.push(i);
    }

    // eslint-disable-next-line no-await-in-loop
    const results = await Promise.all(indexes.map(findAt));
    const hits = results.filter(Boolean);
    found.push(...hits);

    // an entirely empty batch means we have run off the end
    if (hits.length === 0) break;
  }

  return found;
};

function Snap() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    discoverArchive()
      .then((found) => {
        if (!cancelled) setImages(found);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <ThemeProvider theme={base}>
      <Wrap width={[1]} display="flex" flexDirection="column">
        <Wrap padding={[3]} textAlign="center">
          <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Archive</h2>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            A curated collection of modern minimalist &amp; wabi-sabi graphical design
          </p>
        </Wrap>

        {images.length > 0 ? (
          <GridContainer>
            {images.map((src) => (
              <ImageItem key={src}>
                <img src={src} alt="" loading="lazy" />
              </ImageItem>
            ))}
          </GridContainer>
        ) : (
          <MessageContainer>
            <p style={{ fontSize: '14px', color: '#666' }}>
              {loading ? 'Loading archive…' : 'Coming soon.'}
            </p>
          </MessageContainer>
        )}
      </Wrap>
    </ThemeProvider>
  );
}

export default Snap;
