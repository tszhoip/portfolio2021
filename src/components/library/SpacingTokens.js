import React from 'react';
import styled from 'styled-components';

const TokenContainer = styled.div`
  margin: 40px 0;
`;

const SpacingGrid = styled.div`
  display: grid;
  gap: 24px;
  margin-top: 24px;
`;

const SpacingItem = styled.div`
  border: 1px solid #EAEAEA;
  border-radius: 4px;
  padding: 24px;
  background-color: #FFF;
`;

const SpacingLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
`;

const SpacingVisual = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 12px;
`;

const SpacingBox = styled.div`
  width: ${props => props.size}px;
  height: 20px;
  background-color: #000;
  border-radius: 2px;
`;

const SpacingInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #666;
`;

const SpacingValue = styled.span`
  font-family: 'Courier New', monospace;
  font-weight: 600;
  color: #000;
`;

const ContextGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;

const ContextBox = styled.div`
  border: 1px solid #EAEAEA;
  border-radius: 4px;
  padding: 12px;
  background-color: #f5f5f5;
  font-size: 12px;
  text-align: center;
  color: #666;
`;

const SpacingTokens = () => {
  const spacingUnits = [
    { name: '4px', value: 4, description: '1 unit - Minimal spacing' },
    { name: '8px', value: 8, description: '2 units - Tight spacing' },
    { name: '12px', value: 12, description: '3 units - Standard spacing' },
    { name: '16px', value: 16, description: '4 units - Default padding' },
    { name: '32px', value: 32, description: '8 units - Large spacing' }
  ];

  return (
    <TokenContainer>
      <h3 style={{ marginTop: 0, marginBottom: 32 }}>Spacing</h3>

      <SpacingGrid>
        {spacingUnits.map((unit, index) => (
          <SpacingItem key={index}>
            <SpacingLabel>{unit.name}</SpacingLabel>
            <SpacingVisual>
              <SpacingBox size={unit.value} />
            </SpacingVisual>
            <SpacingInfo>
              <span>{unit.description}</span>
              <SpacingValue>{unit.value}px</SpacingValue>
            </SpacingInfo>
          </SpacingItem>
        ))}
      </SpacingGrid>

      <div style={{ marginTop: 40 }}>
        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Spacing Scale (4px Base)</h4>
        <ContextGrid>
          <ContextBox>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4 }}>4px</div>
            <div>1 × base</div>
          </ContextBox>
          <ContextBox>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4 }}>8px</div>
            <div>2 × base</div>
          </ContextBox>
          <ContextBox>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4 }}>12px</div>
            <div>3 × base</div>
          </ContextBox>
          <ContextBox>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4 }}>16px</div>
            <div>4 × base</div>
          </ContextBox>
          <ContextBox>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4 }}>32px</div>
            <div>8 × base</div>
          </ContextBox>
        </ContextGrid>
      </div>

      <div style={{ marginTop: 40 }}>
        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Usage Guidelines</h4>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: '#666' }}>
          <div style={{ marginBottom: 12 }}>
            <strong>4px:</strong> Minimal spacing for tight layouts, icon margins, internal component gaps.
          </div>
          <div style={{ marginBottom: 12 }}>
            <strong>8px:</strong> Tight spacing between small elements, icon/text pairs, compact sections.
          </div>
          <div style={{ marginBottom: 12 }}>
            <strong>12px:</strong> Standard internal component spacing, form field margins, small gaps.
          </div>
          <div style={{ marginBottom: 12 }}>
            <strong>16px:</strong> Default padding for buttons, cards, sections. Most common padding value.
          </div>
          <div>
            <strong>32px:</strong> Large spacing between major sections, substantial visual separation.
          </div>
        </div>
      </div>
    </TokenContainer>
  );
};

export default SpacingTokens;
