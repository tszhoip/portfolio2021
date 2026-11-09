import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { base } from '../theme';
import { Wrap } from '../component/Core';
import { Type } from './layout/Type';

const HeadlineSectionWrapper = styled(Wrap)`
  width: 100%;
  padding: 0;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const HeadlineSectionContent = styled(Wrap)`
  width: 50%;
  max-width: 720px;
  padding: 16px 16px 48px 16px;
  box-sizing: border-box;
  background-color: #000;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const HeadlineSection = ({ title, tagline }) => {
  return (
    <ThemeProvider theme={base}>
      <HeadlineSectionWrapper>
        <HeadlineSectionContent>
          {/* Title and tagline are deliberately the same style. Only the
              title is a heading - the tagline is a paragraph that happens to
              look identical, which is the point of keeping tag and style on
              separate axes. */}
          <Type as="h1" size="L" color="#fff" mb>
            {title}
          </Type>
          <Type size="L" color="#fff">
            {tagline}
          </Type>
        </HeadlineSectionContent>
      </HeadlineSectionWrapper>
    </ThemeProvider>
  );
};

export default HeadlineSection;
