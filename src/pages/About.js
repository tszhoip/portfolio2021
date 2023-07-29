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

import { ContainerBase, Wrap, Button, H1, Text } from '../component/Core';
import { base } from '../theme';
import { ThemeProvider, isStyledComponent } from "styled-components";

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
      <ContainerBase width='100%' flexDirection='column' flexWrap="wrap" alignItems='center' justifyContent="center">

        <Wrap width={[1, 1, 1 / 2, 1 / 2]} flexDirection='row' height="auto">
          <Wrap flexGrow='4' p={[2]} flexDirection='column' justifyContent="center">
            <Text fontFamily={[0]} color={['blk40']} variant='indent' fontSize={[0]}>
            We are an independent Creative duo based in Los Angeles, CA. Both me & Michelle had our own fulltime. And We still like to use our downtime to express our creativity.
              </Text>
              <Text fontFamily={[0]} color={['blk40']} variant='indent' fontSize={[0]}>
              If you have something on your mind, feel free to contact us at hi@inaritype.com. We can’t wait to hear from you.
              </Text>
          </Wrap>
        </Wrap>

        <BlockImgPlay images={ImgLogo} gtcD="repeat(4, 25%)" gtcM="repeat(2, 50%)" />

      </ContainerBase>
    </ThemeProvider>
  );
}

export default About;
