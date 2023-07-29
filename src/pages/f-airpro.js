import React from 'react';
import { ProductSliderFull } from '../component/ProductSlider';
import { base } from '../theme';
import { ThemeProvider, useTheme } from "styled-components";

import sl1 from '../Assets/font/air/air1-1.jpg';
import sl2 from '../Assets/font/air/air1-2.jpg';
import sl3 from '../Assets/font/air/air1-3.jpg';
import sl4 from '../Assets/font/air/air1-4.jpg';

import sl7 from '../Assets/font/air/air2-1.jpg';
import sl8 from '../Assets/font/air/air2-2.jpg';
import sl9 from '../Assets/font/air/air2-3.jpg';
import sl10 from '../Assets/font/air/air2-4.jpg';

import ban1 from '../Assets/font/air/airpro-01.jpg';
import ban2 from '../Assets/font/air/airpro-02.jpg';
import ban3 from '../Assets/font/air/airpro-03.jpg';
import ban4 from '../Assets/font/air/airpro-04.jpg';

import ban1m from '../Assets/font/air/airpro-01-m.jpg';
import ban2m from '../Assets/font/air/airpro-02-m.jpg';
import ban3m from '../Assets/font/air/airpro-03-m.jpg';
import ban4m from '../Assets/font/air/airpro-04-m.jpg';

import { BlockImg } from '../component/BlockImgLR'

import set1 from '../Assets/font/air/airproset.jpg';

import { ContainerBase, Wrap, Button, H1, Text } from '../component/Core';
import { BlockList, BlockHeader} from '../component/Block';
import { BlockTabs } from '../component/BlockTabs'



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

const example = [
  { img: ban1m },
  { img: ban2m },
  { img: ban3m, colSpan: 3, rowSpan: 2 },
  { img: ban4m },
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
  const tabsBLK = [
    {
      label: 'Title',
      content: 
      <H1 pl={2} fontFamily={[1]} fontWeight={[700]} fontSize={[2,2,3,3]} lineHeight={[1.4]} bg="#e5e5e5">
       Lower priced for a reason. This phrase encapsulates how MUJI first began in 1980. We launched products that might almost be regarded as substandard if based on traditional criteria.<br/><br/>
      </H1>,
    },
    {
      label: 'Body',
      content:
      <H1 pl={2} fontFamily={[1]} fontWeight={[700]} fontSize={[0,0,1,1]} lineHeight={[1.6]} bg="#e5e5e5">
       Lower priced for a reason. This phrase encapsulates how MUJI first began in 1980. We launched products that might almost be regarded as substandard if based on traditional criteria.<br/><br/>Focusing on our three priorities of “selection of materials,” “streamlining of processes,” and “simplification of packages,” we have grown into a brand with over 7,000 no-frills quality products.
This site introduces MUJI from various perspectives such as Message from MUJI / Products and Services / Stores / MUJI's Expanding Activities.<br/><br/> 
      </H1>,
    },
    // Add more tabs as needed
  ];




  return (
    <ThemeProvider theme={base}>
      <ContainerBase width='100%' flexDirection='column' flexWrap="wrap" alignItems='center' justifyContent="center" bg="#f5f5f5">

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
            <Text fontFamily={[0]} color={['blk10']} variant='indent' fontSize={[1]}>Introducing AIR™, a versatile and clean font inspired by the United States Air Force font. AIR™ retains the simplicity and limited character set of its inspiration, but has been further refined to offer a range of weight options.
              It works very well in combo or solo. It is made up of six styles, from cap light to cap bold.
<br/><br/>
Our goal with AIR™ was to create a font that is both functional and visually appealing, with as little design as possible to maximize utility. We believe that the best fonts are those that can be used in a variety of contexts, from branding and marketing to product packaging and signage.</Text>
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



        <Wrap width={["100%"]} flexDirection={['row']} flexWrap="wrap">
          <BlockTabs tabs={tabsBLK}/>

        </Wrap>




        <Wrap>
        <BlockImg images={example} gtcD="repeat(4, 25%)" gtcM="repeat(2, 50%)" />
        </Wrap>

      </ContainerBase>
    </ThemeProvider>
  )
}