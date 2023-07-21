import React from 'react';
import { ProductSliderFull } from '../component/ProductSlider';
import { base } from '../theme';
import { ThemeProvider, isStyledComponent } from "styled-components";

import sl1 from '../Assets/font/air/air1-1.jpg';
import sl2 from '../Assets/font/air/air1-2.jpg';
import sl3 from '../Assets/font/air/air1-3.jpg';
import sl4 from '../Assets/font/air/air1-4.jpg';
import sl5 from '../Assets/font/air/air1-5.jpg';
import sl6 from '../Assets/font/air/air1-6.jpg';

import sl7 from '../Assets/font/air/air2-1.jpg';
import sl8 from '../Assets/font/air/air2-2.jpg';
import sl9 from '../Assets/font/air/air2-3.jpg';
import sl10 from '../Assets/font/air/air2-4.jpg';
import sl11 from '../Assets/font/air/air2-5.jpg';
import sl12 from '../Assets/font/air/air2-6.jpg';

import ban1 from '../Assets/font/air/airpro-01.jpg';
import ban2 from '../Assets/font/air/airpro-02.jpg';
import ban3 from '../Assets/font/air/airpro-03.jpg';
import ban4 from '../Assets/font/air/airpro-04.jpg';
import ban5 from '../Assets/font/air/airpro-05.jpg';
import ban6 from '../Assets/font/air/airpro-06.jpg';

import set1 from '../Assets/font/air/airproset.jpg';

import { ContainerBase, Wrap, Button, H1, Text } from '../component/Core';
import { BlockType2s, BlockType2w } from '../component/Block';

const slider1 = [
  sl1,
  sl2,
  sl3,
  sl4,
  sl5,
  sl6
]

const slider2 = [
  sl7,
  sl8,
  sl9,
  sl10,
  sl11,
  sl12
]

const banner = [
  ban1,
  ban2,
  ban3,
  ban4,
  ban5,
  ban6
]

const set = [
  set1
]

export const Airpro = (props) => {
  const handleBuyClick = () => {
    window.location.href = 'https://buy.stripe.com/00g4gQ5UY5j5abe8wA';
  };
  const handlelicense = () => {
    window.location.href = '/license';
  };

  return (
    <ThemeProvider theme={base}>
      <ContainerBase width={["100%", "100%", "100%", "100%"]} flexDirection={['column', 'row', 'row', 'row']} flexWrap="wrap" justifyContent="center">
        <Wrap width={["100%", "100%", "100%", "100%"]} flexDirection={['row']} height={["64px", "64px", "64px", "64px"]}>
          <BlockType2w title="Air Pro" body="A USAF revamp version with a modern touch"/>
          <Button fontSize={[0]} variant="primary" width={[1 / 4, 1 / 3, 1 / 2, 1 / 2]} onClick={handleBuyClick} >BUY / 5 USD</Button>
        </Wrap>

        <ProductSliderFull images={banner} objfit="cover" />

        <Wrap width={[1, 1, 1, 1 / 3]}>
        <BlockType2s body="SAME OLD CORNER IS THE ONLY CHARACTERS" meta="blk size 36" />
        </Wrap>

        <Wrap  width={[1, 1, 1 / 2, 1 / 3]}>
        <BlockType2s body="SAME OLD CORNER IS THE ONLY CHARACTERS" meta="blk size 36" />
        </Wrap>

        <Wrap width={[1, 1, 1 / 2, 1 / 3]}>
        <BlockType2s body="SAME OLD CORNER IS THE ONLY CHARACTERS" meta="blk size 36" />
        </Wrap>


        <Wrap width={["100%", "50%", "50%", "50%"]} flexDirection={['row']}>
          <ProductSliderFull images={slider1} objfit="cover" />
        </Wrap>

        <Wrap width={["100%", "50%", "50%", "50%"]} flexDirection={['row']}>
          <ProductSliderFull images={slider2} objfit="cover" />
        </Wrap>

        <Wrap width={["100%", "100%", "100%", "100%"]} flexDirection={['row']}>
          <ProductSliderFull images={set} objfit="cover" />
        </Wrap>
        <Button fontSize={[0]} height={['500px']}variant="primary" width={[1, 1, 1, 1]} onClick={handlelicense} >license</Button>



      </ContainerBase>
    </ThemeProvider>
  )
}