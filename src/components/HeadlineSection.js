import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { base } from '../theme';
import { Wrap, H1 } from '../component/Core';

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
  width: 80%;
  max-width: 400px;
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
          <H1
            fontFamily={[0]}
            fontSize="20px"
            fontWeight="500"
            color="#fff"
            mb={[2]}
            mt={[0]}
          >
            {title}
          </H1>
          <H1
            fontFamily={[0]}
            fontSize="20px"
            fontWeight="500"
            color="#fff"
            lineHeight="1.4"
            m={[0]}
          >
            {tagline}
          </H1>
        </HeadlineSectionContent>
      </HeadlineSectionWrapper>
    </ThemeProvider>
  );
};

export default HeadlineSection;
