import React from 'react';
import { BlockImgPlay } from '../component/BlockImgPlay'
import lo1 from '../Assets/feed/feed-1.jpg';
import lo2 from '../Assets/feed/feed-2.jpg';
import lo3 from '../Assets/feed/feed-3.jpg';
import lo4 from '../Assets/feed/feed-4.jpg';
import lo5 from '../Assets/feed/feed-5.jpg';
import lo6 from '../Assets/feed/feed-6.jpg';
import lo7 from '../Assets/feed/feed-7.jpg';
import lo8 from '../Assets/feed/feed-8.jpg';
import lo9 from '../Assets/feed/feed-9.jpg';

import { Container, Wrap, Button, H1, Text, Spacer } from '../component/Core';
import { base } from '../theme';
import { ThemeProvider, isStyledComponent } from "styled-components";
import { BlockList, BlockHeader } from '../component/Block';

const ImgLogo = [
  { img: lo1 },
  { img: lo2 },
  { img: lo3, colSpan: 3, rowSpan: 2 },
  { img: lo4 },
  { img: lo5 },
  { img: lo6 },
  { img: lo7 },
  { img: lo8 },
  { img: lo9 },
  { img: lo5 },
  { img: lo6 },
  { img: lo7 },
  { img: lo8 },
  { img: lo9 },
]

function About() {
  return (
    <ThemeProvider theme={base}>
      <Container width='100%' flexDirection='column' flexWrap="wrap" alignItems='center' justifyContent="center">

      <Wrap width={[1, 1, 2 / 3, 1 / 2]} flexDirection='column' height="auto" justifyContent="space-between">

 

<Wrap flexGrow='4' p={[2]} flexDirection='column' justifyContent="center">
  <Wrap flexDirection='row' height="auto">
    <BlockList title="formats" description={"OTF, TTF (variable), WOFF, WOFF2"} />
  </Wrap>

  <Wrap flexDirection='row' height="auto">
    <BlockList title="Glyph" description={"40"} />
  </Wrap>

  <Wrap flexDirection='row' height="auto">
    <BlockList title="Release date" description={"Aug 2023 (1.0.0)"} />
  </Wrap>

  <Wrap flexDirection='row' height="auto">
    <BlockList title="Licensing" description={"A basic license purchased via this website combines desktop and web license. Desktop covers installation on a given number of workstations. Web allows you to self-host webfont files for a single domain with no time limitation. For more information, please check FAQ or get in touch."} />
  </Wrap>

</Wrap>

</Wrap>

        <BlockImgPlay images={ImgLogo} gtcD="repeat(4, 25%)" gtcM="repeat(2, 50%)" />

      </Container>
    </ThemeProvider>
  );
}

export default About;
