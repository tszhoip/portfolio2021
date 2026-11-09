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

/**
 * Clients reads as four equal columns from L up, the label holding the first:
 *
 *   Clients | brand | brand | brand
 *
 * Below L the label stacks above a two-column list instead.
 *
 * The brands are a nested grid rather than three more cells, so that they
 * wrap under each other and never under the label. That nesting is why the
 * label column is sized by hand: a plain 1fr/3fr split leaves it wider than
 * the brand columns by the gaps the inner grid spends. One quarter of the
 * width minus the three gaps between four columns is the figure that makes
 * all four the same.
 */
const ClientBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.layout.space.snug};

  @media (min-width: ${(props) => props.theme.breakpoints.L}) {
    grid-template-columns:
      calc((100% - 3 * ${(props) => props.theme.layout.gap.snug}) / 4) 1fr;
    column-gap: ${(props) => props.theme.layout.gap.snug};
    row-gap: ${(props) => props.theme.layout.gap.none};
  }
`;

const Label = styled(Type)``;

const ClientGrid = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.layout.gap.tight}
    ${(props) => props.theme.layout.gap.snug};

  @media (min-width: ${(props) => props.theme.breakpoints.L}) {
    grid-template-columns: repeat(3, 1fr);
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

// Name and bio share the width evenly from L up, and stack below it. Same
// rule as Clients, one breakpoint, so both sections of the page turn at the
// same width rather than at 900 and 1400 respectively.
const ProfileText = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.layout.space.snug};

  @media (min-width: ${(props) => props.theme.breakpoints.L}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${(props) => props.theme.layout.gap.snug};
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
          <ClientBlock>
            <Label as="h2" size="M">Clients</Label>
            <ClientGrid>
              {clients.map((client) => (
                <ClientName as="li" size="M" key={client}>{client}</ClientName>
              ))}
            </ClientGrid>
          </ClientBlock>
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
