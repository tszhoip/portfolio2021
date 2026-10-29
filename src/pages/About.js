import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { base } from '../theme';

/**
 * About - MHZ Design Office
 *
 * Structure:
 *   Lead statement → studio approach → clients → founder profiles
 *   Profile images are full-bleed, sourced from /images/about/
 */

const FONT = `'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif`;

const AboutContainer = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`;

// Text sections share one padded column so copy lines up edge to edge
const Section = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 48px 16px;

  @media (max-width: 900px) {
    padding: 32px 16px;
  }
`;

const LeadStatement = styled.h1`
  margin: 0;
  max-width: 680px;
  font-family: ${FONT};
  font-size: 32px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: #000;

  @media (max-width: 900px) {
    font-size: 24px;
  }
`;

const Label = styled.h2`
  margin: 0 0 24px 0;
  font-family: ${FONT};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #000;
`;

const ClientGrid = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px 16px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ClientName = styled.li`
  font-family: ${FONT};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.02em;
  color: #000;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 3 / 2;
  display: block;
  margin: 0;
`;

// Name sits in a narrow left column, bio in the wider right column
const ProfileText = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const ProfileName = styled.h3`
  margin: 0;
  font-family: ${FONT};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: #000;
`;

const ProfileBio = styled.p`
  margin: 0;
  max-width: 640px;
  font-family: ${FONT};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.45;
  letter-spacing: -0.02em;
  color: #000;
`;

const clients = [
  'Elephant',
  'Huge Inc.',
  'Hyundai',
  'Microsoft',
  'Apple Music',
  'Figs',
  'Nike',
  'Joy & Peace',
  'Treedom',
  'VW',
  'Innocell',
  'Canoo',
];

const people = [
  {
    name: 'Tsz Ho Ip',
    image: '/images/about/tsz.jpg',
    // the name is the heading beside the bio, so the copy opens on a pronoun
    bio: 'His work goes beyond aesthetics into robust design systems that hold up across every medium. From fast-turnaround branding to emotionally driven campaigns, he adapts his approach to what each project actually needs.',
  },
  {
    name: 'Michelle Han',
    image: '/images/about/mh.jpg',
    bio: "She builds brand experiences that move fluidly between digital and physical touchpoints. Her approach is tailored to each client's business goals, so the design doesn't just look right, it works.",
  },
];

const SITE_TITLE = 'MHZ Design Office';

function About() {
  // index.html carries the site-wide title, so set the page title here and
  // restore it on unmount rather than leaving it on other routes
  useEffect(() => {
    document.title = `About — ${SITE_TITLE}`;
    return () => {
      document.title = SITE_TITLE;
    };
  }, []);

  return (
    <ThemeProvider theme={base}>
      <AboutContainer>
        <Section>
          <LeadStatement>
            At mhz design office, we craft brands that make a statement. By merging the
            timeless precision of Bauhaus with bold strategy, we create brands that connect
            deeply with modern audiences and leave a lasting impression.
          </LeadStatement>
        </Section>

        <Section>
          <Label>Clients</Label>
          <ClientGrid>
            {clients.map((client) => (
              <ClientName key={client}>{client}</ClientName>
            ))}
          </ClientGrid>
        </Section>

        {people.map((person) => (
          <React.Fragment key={person.name}>
            <ProfileImage src={person.image} alt={person.name} loading="lazy" />
            <Section>
              <ProfileText>
                <ProfileName>{person.name}</ProfileName>
                <ProfileBio>{person.bio}</ProfileBio>
              </ProfileText>
            </Section>
          </React.Fragment>
        ))}
      </AboutContainer>
    </ThemeProvider>
  );
}

export default About;
