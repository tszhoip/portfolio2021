import React, { useState } from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 12px;
  font-weight: 500;
  margin: 0 0 24px 0;
  letter-spacing: -0.01em;
  text-transform: uppercase;
`;

const SectionDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 32px 0;
`;

const CardTypeContainer = styled.div`
  margin-bottom: 48px;
`;

const CardTypeTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 24px 0;
  letter-spacing: -0.01em;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
`;

const DemoCard = styled.div`
  border: 1px solid #EAEAEA;
  border-radius: 4px;
  overflow: hidden;
  background-color: #FFF;
  transition: all 0.2s ease;

  &:hover {
    background-color: #FFF;
    border-color: #000;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: ${props => props.height}px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #999;
  overflow: hidden;
  position: relative;

  &::before {
    content: attr(data-alt);
    position: absolute;
  }
`;

const CardContent = styled.div`
  padding: ${props => props.padding};
  background-color: #f5f5f5;
  transition: background-color 0.2s ease;

  ${DemoCard}:hover & {
    background-color: #FFF;
  }
`;

const CardTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #000;
  margin: 0;
`;

const CardDescription = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 8px;
`;

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  margin-top: 12px;
`;

const SpecItem = styled.div`
  background-color: #FFF;
  border: 1px solid #EAEAEA;
  padding: 8px;
  border-radius: 2px;
  font-size: 11px;
  text-align: center;

  div:first-child {
    font-weight: 600;
    color: #000;
  }

  div:last-child {
    color: #999;
    margin-top: 4px;
  }
`;

const VariantGuide = styled.div`
  background-color: #f5f5f5;
  border-left: 4px solid #000;
  padding: 16px;
  border-radius: 4px;
  font-size: 13px;
  line-height: 1.6;
  color: #333;
  margin: 24px 0;
`;

const CodeBlock = styled.pre`
  background-color: #111;
  color: #39FF14;
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 12px;
  font-family: 'Courier New', monospace;
  line-height: 1.5;
  margin: 16px 0 0 0;
`;

const CardSection = () => {
  const cardTypes = [
    {
      name: 'Thumbnail',
      key: 'thumb',
      imageHeight: 200,
      padding: '12px',
      width: '100%',
      description: 'Project thumbnail card with hover image swap',
      specs: [
        { label: 'Size', value: 'Variable' },
        { label: 'Image', value: '200px' },
        { label: 'Padding', value: '12px' }
      ]
    },
    {
      name: 'Small (S)',
      key: 'small',
      imageHeight: 120,
      padding: '12px',
      width: '100%',
      description: 'Compact card for list items and quick previews',
      specs: [
        { label: 'Size', value: '100%' },
        { label: 'Image', value: '120px' },
        { label: 'Padding', value: '12px' }
      ]
    },
    {
      name: 'Medium (M)',
      key: 'medium',
      imageHeight: 240,
      padding: '16px',
      width: '100%',
      description: 'Standard card for main content areas',
      specs: [
        { label: 'Size', value: '100%' },
        { label: 'Image', value: '240px' },
        { label: 'Padding', value: '16px' }
      ]
    },
    {
      name: 'Large (L)',
      key: 'large',
      imageHeight: 320,
      padding: '24px',
      width: '100%',
      description: 'Featured card for hero sections and highlights',
      specs: [
        { label: 'Size', value: '100%' },
        { label: 'Image', value: '320px' },
        { label: 'Padding', value: '24px' }
      ]
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>Card</SectionTitle>
      <SectionDescription>
        Cards are flexible containers for grouping content. We provide four sizes for different contexts and layouts.
      </SectionDescription>

      {cardTypes.map((cardType) => (
        <CardTypeContainer key={cardType.key}>
          <CardTypeTitle>{cardType.name}</CardTypeTitle>
          <VariantGuide>{cardType.description}</VariantGuide>

          <CardGrid>
            <div>
              <h4 style={{ fontSize: 12, fontWeight: 600, marginBottom: 12, marginTop: 0, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Default
              </h4>
              <DemoCard>
                <CardImage height={cardType.imageHeight} data-alt={`${cardType.imageHeight}px`} />
                <CardContent padding={cardType.padding}>
                  <CardTitle>{cardType.name} Card</CardTitle>
                  <CardDescription>Card title and description text</CardDescription>
                </CardContent>
              </DemoCard>
            </div>

            <div>
              <h4 style={{ fontSize: 12, fontWeight: 600, marginBottom: 12, marginTop: 0, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Hover
              </h4>
              <DemoCard style={{ backgroundColor: '#FFF', borderColor: '#000' }}>
                <CardImage height={cardType.imageHeight} />
                <CardContent padding={cardType.padding} style={{ backgroundColor: '#FFF' }}>
                  <CardTitle>{cardType.name} Hover</CardTitle>
                  <CardDescription>White background shows hover state</CardDescription>
                </CardContent>
              </DemoCard>
            </div>
          </CardGrid>

          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, marginBottom: 12, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Specifications
            </h4>
            <SpecsGrid>
              {cardType.specs.map((spec, idx) => (
                <SpecItem key={idx}>
                  <div>{spec.label}</div>
                  <div>{spec.value}</div>
                </SpecItem>
              ))}
            </SpecsGrid>
          </div>

          <CodeBlock>{`<Card variant="${cardType.key}">
  <CardImage src="..." />
  <CardContent>
    <CardTitle>${cardType.name} Title</CardTitle>
    <CardDescription>Description text</CardDescription>
  </CardContent>
</Card>`}</CodeBlock>
        </CardTypeContainer>
      ))}

      <div style={{ marginTop: 48 }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 24, letterSpacing: '-0.01em' }}>
          Card Layouts
        </h3>
        <VariantGuide>
          Cards can be arranged in grids or stacks depending on context and viewport size.
        </VariantGuide>

        <div style={{ marginTop: 24 }}>
          <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Grid Layout (Desktop)</h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            marginBottom: 32
          }}>
            {[1, 2, 3].map((i) => (
              <DemoCard key={i}>
                <CardImage height={150} />
                <CardContent padding="12px">
                  <CardTitle>Card {i}</CardTitle>
                </CardContent>
              </DemoCard>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Responsive Layout (Mobile)</h4>
          <p style={{ fontSize: 13, color: '#666', marginBottom: 16, lineHeight: 1.6 }}>
            On mobile and tablet, cards stack vertically (1 column) or display in 2 columns depending on card size and screen width.
          </p>
          <CodeBlock>{`/* Desktop (3 columns) */
@media (min-width: 900px) {
  grid-template-columns: repeat(3, 1fr);
}

/* Tablet (2 columns) */
@media (max-width: 900px) {
  grid-template-columns: repeat(2, 1fr);
}

/* Mobile (1 column) */
@media (max-width: 600px) {
  grid-template-columns: 1fr;
}`}</CodeBlock>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CardSection;
