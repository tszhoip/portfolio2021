import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LibrarySidebar from '../components/LibrarySidebar';
import LibraryTopNav from '../components/LibraryTopNav';
import TypographyTokens from '../components/library/TypographyTokens';
import ColorTokens from '../components/library/ColorTokens';
import SpacingTokens from '../components/library/SpacingTokens';
import ButtonSection from '../components/library/ButtonSection';
import InputSection from '../components/library/InputSection';
import CardSection from '../components/library/CardSection';

const LibraryContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr;
  width: 100%;
  min-height: 100vh;
  background-color: #FFF;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SidebarWrapper = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

const MainContent = styled.div`
  padding: 0;
  overflow-y: auto;

  @media (max-width: 900px) {
    padding-top: 60px;
  }
`;

const SectionWrapper = styled.div`
  border-bottom: 1px solid #EAEAEA;
  padding: 40px;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 900px) {
    padding: 32px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 12px;
  font-weight: 500;
  margin: 0 0 24px 0;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #000;
`;

const Library = () => {
  const [activeSection, setActiveSection] = useState('tokens');
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 900);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || 'tokens';
      setActiveSection(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Set initial section from hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {!isDesktop && <LibraryTopNav activeSection={activeSection} />}

      <LibraryContainer>
        <SidebarWrapper>
          <LibrarySidebar activeSection={activeSection} />
        </SidebarWrapper>

        <MainContent>
          <SectionWrapper id="tokens">
            <SectionTitle>Design Tokens</SectionTitle>
            <TypographyTokens />
            <ColorTokens />
            <SpacingTokens />
          </SectionWrapper>

          <SectionWrapper id="button">
            <ButtonSection />
          </SectionWrapper>

          <SectionWrapper id="input">
            <InputSection />
          </SectionWrapper>

          <SectionWrapper id="card">
            <CardSection />
          </SectionWrapper>
        </MainContent>
      </LibraryContainer>
    </>
  );
};

export default Library;
