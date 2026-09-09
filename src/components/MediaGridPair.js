import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 0;
  margin: 0;
  padding: 0;
  aspect-ratio: 16 / 9;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    aspect-ratio: 16 / 9;
  }
`;

const GridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  margin: 0;
  padding: 0;
`;

/**
 * MediaGridPair - Display two images in a 2-column grid
 * Used when XXA.jpg and XXB.jpg variants are found
 *
 * Props:
 *   - imageA: Path to first image
 *   - imageB: Path to second image
 */
export const MediaGridPair = ({ imageA, imageB }) => {
  return (
    <GridWrapper>
      <GridImage src={imageA} alt="Grid item A" loading="lazy" />
      <GridImage src={imageB} alt="Grid item B" loading="lazy" />
    </GridWrapper>
  );
};

export default MediaGridPair;
