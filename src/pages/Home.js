import React from 'react';
import { BlockThumb } from '../component/Block';
import { Container } from '../component/Core';
import { Page } from '../components/layout/Page';
import { Section } from '../components/layout/Section';
import projects from '../data/projects';

/**
 * Home - the thumbnail wall.
 *
 * One bleed section at content height: the wall is as tall as the rows it
 * holds, and runs the full viewport width with no gutter and no cap, so the
 * images meet the edges of the screen.
 */

function Home() {
  BlockThumb.defaultProps = {
    width: [1 / 2, 1 / 2, 1 / 2, 1 / 2],
    height: ['320px', '400px', '480px', '560px'],
  };

  return (
    <Page>
      <Section bleed>
        <Container width={[1]} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
          {/* Dynamically render project cards from works/ folders */}
          {projects.map((project) => (
            <BlockThumb
              key={project.id}
              width={project.wide ? [1, 1, 1 / 2, 1 / 2] : undefined}
              img={project.thumbnail}
              imgHover={project.thumbnailHover}
              to={project.route}
              title={project.title}
              opacity={project.hasContent ? 1 : 0.5}
            />
          ))}
        </Container>
      </Section>
    </Page>
  );
}

export default Home;
