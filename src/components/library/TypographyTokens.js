import React from 'react';
import styled from 'styled-components';

const TokenContainer = styled.div`
  margin: 40px 0;
`;

const TokenGrid = styled.div`
  display: grid;
  gap: 32px;
  margin-top: 24px;
`;

const TokenItem = styled.div`
  border: 1px solid #EAEAEA;
  border-radius: 4px;
  padding: 24px;
  background-color: #FFF;
`;

const TokenLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #999;
  margin-bottom: 12px;
`;

const H1Example = styled.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
`;

const H2Example = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
`;

const H3Example = styled.h3`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
`;

const BodyExample = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
`;

const CaptionExample = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
  color: #666;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
`;

const UsageCode = styled.pre`
  background-color: #f5f5f5;
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 12px;
  overflow-x: auto;
  margin: 12px 0 0 0;
  font-family: 'Courier New', monospace;
  line-height: 1.4;
`;

const TypographyTokens = () => {
  return (
    <TokenContainer>
      <h3 style={{ marginTop: 0, marginBottom: 32 }}>Typography</h3>

      <TokenGrid>
        <TokenItem>
          <TokenLabel>H1 - Large Heading</TokenLabel>
          <H1Example>Design tokens define visual language</H1Example>
          <CaptionExample style={{ marginTop: 12 }}>
            20px / 500 medium / Switzer / -0.02em letter-spacing
          </CaptionExample>
          <UsageCode>{`<H1>Design tokens define visual language</H1>`}</UsageCode>
        </TokenItem>

        <TokenItem>
          <TokenLabel>H2 - Section Heading</TokenLabel>
          <H2Example>Section heading example</H2Example>
          <CaptionExample style={{ marginTop: 12 }}>
            16px / 500 medium / Switzer / -0.02em letter-spacing
          </CaptionExample>
          <UsageCode>{`<H2>Section heading example</H2>`}</UsageCode>
        </TokenItem>

        <TokenItem>
          <TokenLabel>H3 - Subsection Heading</TokenLabel>
          <H3Example>Subsection heading</H3Example>
          <CaptionExample style={{ marginTop: 12 }}>
            12px / 500 medium / Switzer / -0.02em letter-spacing
          </CaptionExample>
          <UsageCode>{`<H3>Subsection heading</H3>`}</UsageCode>
        </TokenItem>

        <TokenItem>
          <TokenLabel>Body - Regular Text</TokenLabel>
          <BodyExample>
            This is regular body text used for descriptions, content, and general information. It maintains good readability at 16px with a 1.5 line height.
          </BodyExample>
          <CaptionExample style={{ marginTop: 12 }}>
            16px / 400 regular / Switzer / 1.5 line height
          </CaptionExample>
          <UsageCode>{`<Text>Regular body text</Text>`}</UsageCode>
        </TokenItem>

        <TokenItem>
          <TokenLabel>Caption - Small Supporting Text</TokenLabel>
          <CaptionExample>
            12px / 400 regular / Switzer / 1.4 line height. Used for labels, hints, and supporting information.
          </CaptionExample>
          <CaptionExample style={{ marginTop: 12 }}>
            12px / 400 regular / Switzer / 1.4 line height
          </CaptionExample>
          <UsageCode>{`<Caption>Small supporting text</Caption>`}</UsageCode>
        </TokenItem>
      </TokenGrid>
    </TokenContainer>
  );
};

export default TypographyTokens;
