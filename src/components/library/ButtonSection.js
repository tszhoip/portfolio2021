import React from 'react';
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

const VariantContainer = styled.div`
  margin-bottom: 48px;
`;

const VariantTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 24px 0;
  letter-spacing: -0.01em;
`;

const StateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
`;

const StateCard = styled.div`
  border: 1px solid #EAEAEA;
  border-radius: 4px;
  padding: 24px;
  background-color: #FFF;
`;

const StateLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #999;
  margin-bottom: 16px;
`;

const ButtonPreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  margin-bottom: 16px;
  background-color: ${props => props.bgColor || '#FFF'};
  border-radius: 4px;
  padding: 12px;
`;

const DemoButton = styled.button`
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  border: none;
  padding: 12px 16px;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.hoverBg};
    color: ${props => props.hoverText};
  }

  &:active {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StateDescription = styled.div`
  font-size: 12px;
  color: #666;
  line-height: 1.5;
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

const VariantGuide = styled.div`
  background-color: #f5f5f5;
  border-left: 4px solid #000;
  padding: 16px;
  border-radius: 4px;
  font-size: 13px;
  line-height: 1.6;
  color: #333;
  margin-top: 16px;
`;

const ButtonSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>Button</SectionTitle>
      <SectionDescription>
        Buttons are the primary call-to-action elements. We offer three variants for different use cases and contexts.
      </SectionDescription>

      {/* Light Variant */}
      <VariantContainer>
        <VariantTitle>Light Variant</VariantTitle>
        <VariantGuide>
          Offwhite background with black text. Use for primary navigation and main content areas.
        </VariantGuide>

        <StateGrid>
          <StateCard>
            <StateLabel>Default</StateLabel>
            <ButtonPreview bgColor="#f5f5f5">
              <DemoButton bgColor="#f5f5f5" textColor="#000" hoverBg="#FFF" hoverText="#000">
                Default Button
              </DemoButton>
            </ButtonPreview>
            <StateDescription>
              Offwhite (#f5f5f5) background, black text. Ready to interact.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Hover</StateLabel>
            <ButtonPreview bgColor="#FFF">
              <DemoButton bgColor="#FFF" textColor="#000" hoverBg="#f5f5f5">
                Hover State
              </DemoButton>
            </ButtonPreview>
            <StateDescription>
              Pure white (#FFF) background indicates interactive state.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Active</StateLabel>
            <ButtonPreview bgColor="#f5f5f5">
              <DemoButton bgColor="#f5f5f5" textColor="#000" hoverBg="#FFF" style={{ opacity: 0.7 }}>
                Active Button
              </DemoButton>
            </ButtonPreview>
            <StateDescription>
              Reduced opacity shows active/pressed state.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Disabled</StateLabel>
            <ButtonPreview bgColor="#f5f5f5">
              <DemoButton bgColor="#f5f5f5" textColor="#000" disabled>
                Disabled Button
              </DemoButton>
            </ButtonPreview>
            <StateDescription>
              50% opacity shows disabled state, not interactive.
            </StateDescription>
          </StateCard>
        </StateGrid>

        <CodeBlock>{`<Button variant="default">
  Default Button
</Button>`}</CodeBlock>
      </VariantContainer>

      {/* Dark Variant */}
      <VariantContainer>
        <VariantTitle>Dark Variant</VariantTitle>
        <VariantGuide>
          Off-black (#222) background with light grey text. Use for footer and dark backgrounds.
        </VariantGuide>

        <StateGrid>
          <StateCard>
            <StateLabel>Default</StateLabel>
            <ButtonPreview bgColor="#222">
              <DemoButton bgColor="#222" textColor="#EAEAEA" hoverBg="#000" hoverText="#FFF">
                Default Button
              </DemoButton>
            </ButtonPreview>
            <StateDescription>
              Off-black (#222) background, light grey (#EAEAEA) text.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Hover</StateLabel>
            <ButtonPreview bgColor="#000">
              <DemoButton bgColor="#000" textColor="#FFF" hoverBg="#222">
                Hover State
              </DemoButton>
            </ButtonPreview>
            <StateDescription>
              Pure black (#000) background, pure white text (#FFF).
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Active</StateLabel>
            <ButtonPreview bgColor="#222">
              <DemoButton bgColor="#222" textColor="#EAEAEA" hoverBg="#000" style={{ opacity: 0.7 }}>
                Active Button
              </DemoButton>
            </ButtonPreview>
            <StateDescription>
              Reduced opacity shows active state.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Disabled</StateLabel>
            <ButtonPreview bgColor="#222">
              <DemoButton bgColor="#222" textColor="#EAEAEA" disabled>
                Disabled Button
              </DemoButton>
            </ButtonPreview>
            <StateDescription>
              50% opacity indicates disabled, not interactive.
            </StateDescription>
          </StateCard>
        </StateGrid>

        <CodeBlock>{`<Button variant="footer">
  Dark Button
</Button>`}</CodeBlock>
      </VariantContainer>

      {/* Prime Variant */}
      <VariantContainer>
        <VariantTitle>Prime Variant</VariantTitle>
        <VariantGuide>
          Accent neon background with white text. Use for critical actions and highlights on dark backgrounds.
        </VariantGuide>

        <StateGrid>
          <StateCard>
            <StateLabel>Default</StateLabel>
            <ButtonPreview bgColor="#FFF">
              <DemoButton bgColor="#39FF14" textColor="#FFF" hoverBg="#22DD00" hoverText="#FFF">
                Prime Action
              </DemoButton>
            </ButtonPreview>
            <StateDescription>
              Neon accent (#39FF14) background, white text. High contrast.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Hover</StateLabel>
            <ButtonPreview bgColor="#000">
              <DemoButton bgColor="#22DD00" textColor="#000" hoverBg="#39FF14">
                Hover State
              </DemoButton>
            </ButtonPreview>
            <StateDescription>
              Darker neon shade indicates interactive state.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Active</StateLabel>
            <ButtonPreview bgColor="#000">
              <DemoButton bgColor="#39FF14" textColor="#FFF" style={{ opacity: 0.7 }}>
                Active Action
              </DemoButton>
            </ButtonPreview>
            <StateDescription>
              Reduced opacity shows active/pressed state.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Disabled</StateLabel>
            <ButtonPreview bgColor="#FFF">
              <DemoButton bgColor="#39FF14" textColor="#FFF" disabled>
                Prime Disabled
              </DemoButton>
            </ButtonPreview>
            <StateDescription>
              50% opacity shows disabled state.
            </StateDescription>
          </StateCard>
        </StateGrid>

        <CodeBlock>{`<Button variant="primary">
  Prime Action
</Button>`}</CodeBlock>
      </VariantContainer>
    </SectionContainer>
  );
};

export default ButtonSection;
