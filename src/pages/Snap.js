import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { base } from '../theme';
import { Wrap } from '../component/Core';

/**
 * Archive Page - Displays ARE.NA mastertaste channel posts
 * Channel: https://www.are.na/tsz-ho-ip/mastertaste
 *
 * On Vercel production: Fetches via serverless function (/api/arena.js)
 * On local dev: Shows helpful message with link to ARE.NA
 *
 * ARE.NA blocks client-side requests (CORS), so server-side fetch is required
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
  const [isDemo, setIsDemo] = useState(false);

  useEffect(() => {
    const fetchAreNaContent = async () => {
      try {
        setLoading(true);
        // Fetch from serverless function (only works on Vercel, not on local dev)
        const response = await fetch('/api/arena', { signal: AbortSignal.timeout(5000) });

        if (response.ok) {
          const data = await response.json();
          if (data?.images && data.images.length > 0) {
            setImages(data.images);
          }
        }
      } catch (err) {
        // Fallback: Use demo data on local dev if REACT_APP_DEMO_MODE is set
        if (process.env.REACT_APP_DEMO_MODE === 'true') {
          setIsDemo(true);
          // Sample ARE.NA posts for demo
          setImages([
            { url: 'https://d2w9rnfcy7mm78.cloudfront.net/17372957/original_4cc3c6e7b0cdbe2fa8e3b7c4f49b59eb.jpg', title: 'Design 1' },
            { url: 'https://d2w9rnfcy7mm78.cloudfront.net/17372958/original_4cc3c6e7b0cdbe2fa8e3b7c4f49b59ec.jpg', title: 'Design 2' },
            { url: 'https://d2w9rnfcy7mm78.cloudfront.net/17372959/original_4cc3c6e7b0cdbe2fa8e3b7c4f49b59ed.jpg', title: 'Design 3' },
            { url: 'https://d2w9rnfcy7mm78.cloudfront.net/17372960/original_4cc3c6e7b0cdbe2fa8e3b7c4f49b59ee.jpg', title: 'Design 4' },
            { url: 'https://d2w9rnfcy7mm78.cloudfront.net/17372961/original_4cc3c6e7b0cdbe2fa8e3b7c4f49b59ef.jpg', title: 'Design 5' },
            { url: 'https://d2w9rnfcy7mm78.cloudfront.net/17372962/original_4cc3c6e7b0cdbe2fa8e3b7c4f49b59f0.jpg', title: 'Design 6' },
            { url: 'https://d2w9rnfcy7mm78.cloudfront.net/17372963/original_4cc3c6e7b0cdbe2fa8e3b7c4f49b59f1.jpg', title: 'Design 7' },
            { url: 'https://d2w9rnfcy7mm78.cloudfront.net/17372964/original_4cc3c6e7b0cdbe2fa8e3b7c4f49b59f2.jpg', title: 'Design 8' },
          ]);
        }
        console.log('Archive: Serverless function not available (expected on local dev)');
      } finally {
        setLoading(false);
      }
    };

    fetchAreNaContent();
  }, []);

  const isLocalhost = typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

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
        ) : (
          // Dev or loading state
          <MessageContainer>
            <div>
              {isLocalhost ? (
                <>
                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                    💡 On <strong>Vercel production</strong>, Archive displays all 39 ARE.NA posts in a grid
                  </p>
                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
                    On local development, view your posts at:
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
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    View 39 Posts on ARE.NA
                  </a>
                </>
              ) : (
                <>
                  <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
                    {loading ? 'Loading archive...' : 'Unable to load archive'}
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
