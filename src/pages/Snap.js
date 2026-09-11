import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { base } from '../theme';
import { Wrap } from '../component/Core';

/**
 * Archive Page
 * Reached from the footer "Resource" link (/archive, /snap).
 */

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
`;

function Snap() {
  return (
    <ThemeProvider theme={base}>
      <Wrap width={[1]} display="flex" flexDirection="column">
        <Wrap padding={[3]} textAlign="center">
          <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Archive</h2>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            A curated collection of modern minimalist &amp; wabi-sabi graphical design
          </p>
        </Wrap>

        <MessageContainer>
          <p style={{ fontSize: '14px', color: '#666' }}>Coming soon.</p>
        </MessageContainer>
      </Wrap>
    </ThemeProvider>
  );
}

export default Snap;
