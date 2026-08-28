import React from 'react';
import styled from 'styled-components';

const TokenContainer = styled.div`
  margin: 40px 0;
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

const ColorCard = styled.div`
  border: 1px solid #EAEAEA;
  border-radius: 4px;
  overflow: hidden;
  background-color: #FFF;
`;

const ColorSwatch = styled.div`
  width: 100%;
  height: 120px;
  background-color: ${props => props.color};
  border-bottom: 1px solid #EAEAEA;
`;

const ColorInfo = styled.div`
  padding: 16px;
`;

const ColorName = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
`;

const ColorHex = styled.div`
  font-size: 12px;
  color: #666;
  font-family: 'Courier New', monospace;
  font-weight: 500;
`;

const Description = styled.div`
  font-size: 12px;
  color: #999;
  margin-top: 8px;
  line-height: 1.4;
`;

const ColorTokens = () => {
  const colors = [
    {
      name: 'Black',
      hex: '#000000',
      description: 'Primary dark text and accents'
    },
    {
      name: 'White',
      hex: '#FFFFFF',
      description: 'Pure white backgrounds and text'
    },
    {
      name: 'Off-white',
      hex: '#f5f5f5',
      description: 'Light background, default menu/card'
    },
    {
      name: 'Off-black',
      hex: '#222222',
      description: 'Dark background for footer'
    },
    {
      name: 'Light Grey',
      hex: '#EAEAEA',
      description: 'Secondary text and borders'
    },
    {
      name: 'Accent Neon',
      hex: '#39FF14',
      description: 'Vibrant accent for highlights'
    }
  ];

  return (
    <TokenContainer>
      <h3 style={{ marginTop: 0, marginBottom: 32 }}>Colors</h3>

      <ColorGrid>
        {colors.map((color, index) => (
          <ColorCard key={index}>
            <ColorSwatch color={color.hex} />
            <ColorInfo>
              <ColorName>{color.name}</ColorName>
              <ColorHex>{color.hex}</ColorHex>
              <Description>{color.description}</Description>
            </ColorInfo>
          </ColorCard>
        ))}
      </ColorGrid>

      <div style={{ marginTop: 40 }}>
        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Usage Guidelines</h4>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: '#666' }}>
          <div style={{ marginBottom: 12 }}>
            <strong>Black (#000000):</strong> Primary text color, headlines, and interactive elements. Use for maximum contrast.
          </div>
          <div style={{ marginBottom: 12 }}>
            <strong>White (#FFFFFF):</strong> Pure white for text on dark backgrounds and card hover states.
          </div>
          <div style={{ marginBottom: 12 }}>
            <strong>Off-white (#f5f5f5):</strong> Default background for menu items, cards, and sections. Provides subtle visual separation.
          </div>
          <div style={{ marginBottom: 12 }}>
            <strong>Off-black (#222222):</strong> Dark background for footer and dark-mode sections with grey text.
          </div>
          <div style={{ marginBottom: 12 }}>
            <strong>Light Grey (#EAEAEA):</strong> Secondary text, borders, and disabled states for subtler communication.
          </div>
          <div>
            <strong>Accent Neon (#39FF14):</strong> Reserved for critical highlights, hover states on dark backgrounds, and primary call-to-action buttons.
          </div>
        </div>
      </div>
    </TokenContainer>
  );
};

export default ColorTokens;
