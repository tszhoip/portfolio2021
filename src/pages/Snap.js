import React, { useEffect } from 'react';

/**
 * Archive Page - Links to ARE.NA mastertaste channel
 * Channel: https://www.are.na/tsz-ho-ip/mastertaste
 *
 * Displays 39 blocks of curated modern minimalist & wabi-sabi graphical design
 * including graphic illustration, typography, and branding identity
 */
function Snap() {
  useEffect(() => {
    // Redirect to ARE.NA archive channel
    // ARE.NA APIs are being phased out, so we link directly to the channel
    window.location.href = 'https://www.are.na/tsz-ho-ip/mastertaste';
  }, []);

  return (
    <div style={{
      padding: '60px 20px',
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>📚 Archive</h2>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
        A curated collection of modern minimalist & wabi-sabi graphical design
      </p>
      <p style={{ fontSize: '14px', marginBottom: '10px' }}>
        Redirecting to ARE.NA...
      </p>
      <p style={{ fontSize: '14px' }}>
        If not redirected, <a href="https://www.are.na/tsz-ho-ip/mastertaste" style={{ color: '#0066cc', textDecoration: 'underline' }}>click here to view the archive</a>
      </p>
    </div>
  );
}

export default Snap;
