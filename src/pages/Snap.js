import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { base } from '../theme';
import { Wrap } from '../component/Core';

/**
 * Archive Page - Displays ARE.NA mastertaste channel posts
 * Channel: https://www.are.na/tsz-ho-ip/mastertaste
 *
 * Fetches posts via serverless function (Vercel production)
 * Displays in custom grid layout with site menu preserved
 */

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
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
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

function Snap() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDev, setIsDev] = useState(false);

  useEffect(() => {
    // Check if running on localhost (development)
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    setIsDev(isLocalhost);

    const fetchAreNaContent = async () => {
      try {
        setLoading(true);
        // Try serverless function (works on Vercel production)
        const response = await fetch('/api/arena', { signal: AbortSignal.timeout(5000) });

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        if (data.images && data.images.length > 0) {
          setImages(data.images);
        }
      } catch (err) {
        console.log('Archive fetch note:', err.message, '(This is expected in development)');
        // On dev/localhost, serverless function won't work, show helpful message
      } finally {
        setLoading(false);
      }
    };

    fetchAreNaContent();
  }, []);

  return (
    <ThemeProvider theme={base}>
      <Wrap width={[1]} display="flex" flexDirection="column">
        <Wrap padding={[3]} textAlign="center">
          <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Archive</h2>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            A curated collection of modern minimalist & wabi-sabi graphical design
          </p>
        </Wrap>

        {images.length > 0 ? (
          // Production: Display ARE.NA posts in grid
          <GridContainer>
            {images.map((img, idx) => (
              <ImageItem key={idx}>
                <img src={img.url} alt={img.title} loading="lazy" />
              </ImageItem>
            ))}
          </GridContainer>
        ) : loading ? (
          // Loading state
          <MessageContainer>
            <div>
              <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>
                Loading archive from ARE.NA...
              </p>
            </div>
          </MessageContainer>
        ) : (
          // Dev/Error state
          <MessageContainer>
            <div>
              {isDev ? (
                <>
                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                    ℹ️ Archive fetches live data from ARE.NA on production (Vercel)
                  </p>
                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
                    On local development, view your 39 posts at:
                  </p>
                  <a
                    href="https://www.are.na/tsz-ho-ip/mastertaste"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '10px 20px',
                      backgroundColor: '#0066cc',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      fontSize: '14px'
                    }}
                  >
                    View on ARE.NA
                  </a>
                </>
              ) : (
                <>
                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
                    Unable to load archive
                  </p>
                  <a
                    href="https://www.are.na/tsz-ho-ip/mastertaste"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#0066cc',
                      textDecoration: 'underline',
                      fontSize: '14px'
                    }}
                  >
                    View on ARE.NA
                  </a>
                </>
              )}
            </div>
          </MessageContainer>
        )}
      </Wrap>
    </ThemeProvider>
  );
}

export default Snap;
