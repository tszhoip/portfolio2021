import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { base } from '../theme';
import { Type } from '../components/layout/Type';

/**
 * About - MHZ Design Office
 *
 * Structure:
 *   Lead statement → studio approach → clients → founder profiles
 *   Profile images are full-bleed, sourced from /images/about/
 */

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

const LeadStatement = styled(Type)`
  max-width: 680px;
`;

const Label = styled(Type)`
  margin-bottom: 24px;
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

const ClientName = styled(Type)``;

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

const ProfileName = styled(Type)``;

const ProfileBio = styled(Type)`
  max-width: 640px;
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
    name: 'Michelle W Han',
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
          <LeadStatement as="h1" size="L" weight="reg" leading="snug">
            At mhz design office, we craft brands that make a statement. By merging the
            timeless precision of Bauhaus with bold strategy, we create brands that connect
            deeply with modern audiences and leave a lasting impression.
          </LeadStatement>
        </Section>

        <Section>
          <Label as="h2" size="M">Clients</Label>
          <ClientGrid>
            {clients.map((client) => (
              <ClientName as="li" size="M" key={client}>{client}</ClientName>
            ))}
          </ClientGrid>
        </Section>

        {people.map((person) => (
          <React.Fragment key={person.name}>
            <ProfileImage src={person.image} alt={person.name} loading="lazy" />
            <Section>
              <ProfileText>
                <ProfileName as="h3" size="M">{person.name}</ProfileName>
                <ProfileBio size="M">{person.bio}</ProfileBio>
              </ProfileText>
            </Section>
          </React.Fragment>
        ))}
      </AboutContainer>
    </ThemeProvider>
  );
}

export default About;
