import React from 'react';
import { ProductSliderFull } from '../component/ProductSlider';
import { base } from '../theme';
import { ThemeProvider, useTheme, isStyledComponent } from "styled-components";

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

import ban1m from '../Assets/font/air/airpro-01-m.jpg';
import ban2m from '../Assets/font/air/airpro-02-m.jpg';
import ban3m from '../Assets/font/air/airpro-03-m.jpg';
import ban4m from '../Assets/font/air/airpro-04-m.jpg';

import set1 from '../Assets/font/air/airproset.jpg';

import { ContainerBase, Wrap, Button, H1, Text } from '../component/Core';
import { BlockType2s, BlockList, BlockHeader } from '../component/Block';

const slider1 = [
  sl1,
  sl2,
  sl3,
  sl4,
  // sl5,
  // sl6
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
  ban4
]

const bannerm = [
  ban1m,
  ban2m,
  ban3m,
  ban4m
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

  const theme = useTheme();
  const isMobile = window.innerWidth <= parseInt(theme.breakpoints.md, 10);


  return (
    <ThemeProvider theme={base}>
      <ContainerBase width='100%' flexDirection='row' flexWrap="wrap" alignItems='center' justifyContent="center">

        <BlockHeader title="AIR PRO™" description="A Modern Version of US AIRFORCE font" handleBuyClick={handleBuyClick} buttonText='BUY' />

        <Wrap width={[1, 1, 1, 1]} mt="5">
          {isMobile ? (
            <ProductSliderFull images={bannerm} objfit="cover" />
          ) : (
            <ProductSliderFull images={banner} objfit="cover" />
          )
          }
        </Wrap>

        <Wrap width={[1, 1, 2 / 3, 1/2]} flexDirection='column' height="auto" justifyContent="space-between">

          <Wrap flexGrow='4' p={[2]} flexDirection='column' justifyContent="center">
            <Text fontFamily={[0]} color={['blk40']} variant='indent' fontSize={[0]}>Introducing AIR™, a versatile and clean font inspired by the United States Air Force font. AIR™ retains the simplicity and limited character set of its inspiration, but has been further refined to offer a range of weight options.
              It works very well in combo or solo. It is made up of six styles, from cap light to cap bold.</Text>

          </Wrap>

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

          </Wrap>

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
        <Button fontSize={[0]} height={['500px']} variant="primary" width={[1, 1, 1, 1]} onClick={handlelicense} >license</Button>



      </ContainerBase>
    </ThemeProvider>
  )
}