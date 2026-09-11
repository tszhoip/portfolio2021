import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Wrap, Text, H1, Container } from '../component/Core';

/**
 * Archive Page
 * Reached from the footer "Resource" link (/archive, /snap).
 *
 * Images are read straight from /public/images/archive/, named 1.jpg,
 * 2.jpg, ... using the same numeric-probe approach as MediaGalleryBuilder.
 * No API, no auth, nothing to expire.
 *
 * With the folder empty the page shows a skeleton of the grid it will
 * become. Drop files in and it swaps to the real thing on its own.
 */

const MAX_IMAGES = 120;
const BATCH = 12;
const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];
const SKELETON_TILES = 8;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Tile = styled.div`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.gre10};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const SkeletonTile = styled(Tile)`
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors.gre20} inset;
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

  const isEmpty = !loading && images.length === 0;

  return (
    <Container
      width={['100%', '100%', '100%', '80%']}
      flexDirection={['column']}
      p="4"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      <Wrap width="100%" flexDirection="column" justifyContent="start" alignItems="start">
        <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]} marginBottom="8px">
          Archive
        </H1>

        <Text fontFamily={[0]} color={['blk40']} fontSize={[1]} marginBottom="32px">
          A curated collection of modern minimalist &amp; wabi-sabi graphical design
        </Text>

        {images.length > 0 ? (
          <Grid>
            {images.map((src) => (
              <Tile key={src}>
                <img src={src} alt="" loading="lazy" />
              </Tile>
            ))}
          </Grid>
        ) : (
          <Grid>
            {Array.from({ length: SKELETON_TILES }, (unused, i) => (
              <SkeletonTile key={`skeleton-${i}`} />
            ))}
          </Grid>
        )}

        <Text
          fontFamily={[0]}
          color={['blk60']}
          fontSize={[1]}
          marginTop="16px"
          marginBottom="0"
        >
          {loading ? 'Loading archive' : null}
          {isEmpty ? 'Coming soon' : null}
          {!loading && images.length > 0 ? `${images.length} saved` : null}
        </Text>
      </Wrap>
    </Container>
  );
}

export default Snap;
