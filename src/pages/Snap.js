import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { base } from '../theme';
import { Page } from '../components/layout/Page';
import { Section } from '../components/layout/Section';
import { EmptyState } from '../components/layout/EmptyState';
import { Type } from '../components/layout/Type';

/**
 * Archive Page
 * Reached from the footer "Resource" link (/archive, /snap).
 *
 * Images are read straight from /public/images/archive/, named 1.jpg,
 * 2.jpg, ... using the same numeric-probe approach as MediaGalleryBuilder.
 * No API, no auth, nothing to expire.
 *
 * With the folder empty the page shows a closed state. Drop files in and it
 * swaps to the grid on its own.
 */

const MAX_IMAGES = 120;
const BATCH = 12;
const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
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

  // Nothing in /public/images/archive yet, so the page reads as closed.
  // Dropping files in swaps this for the grid with no code change.
  if (images.length === 0) {
    return (
      <ThemeProvider theme={base}>
        <Page>
          <EmptyState title="Archive" note={loading ? '' : 'Coming soon'} />
        </Page>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={base}>
      <Page>
        <Section>
          <Type as="h1" size="L">Archive</Type>
          <Type size="M" muted>
            A curated collection of modern minimalist &amp; wabi-sabi graphical design
          </Type>
        </Section>

        <Section variant="bleed">
          <Grid>
            {images.map((src) => (
              <Tile key={src}>
                <img src={src} alt="" loading="lazy" />
              </Tile>
            ))}
          </Grid>
        </Section>

        <Section>
          <Type size="M" muted>{`${images.length} saved`}</Type>
        </Section>
      </Page>
    </ThemeProvider>
  );
}

export default Snap;
