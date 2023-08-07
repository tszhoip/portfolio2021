import React from 'react';
import { ProductSliderFull } from '../component/ProductSlider';
import { base } from '../theme';
import { ThemeProvider, useTheme } from "styled-components";

import ban1 from '../Assets/font/air/airpro-01.jpg';
import ban2 from '../Assets/font/air/airpro-02.jpg';
import ban3 from '../Assets/font/air/airpro-03.jpg';
import ban4 from '../Assets/font/air/airpro-04.jpg';

import ban1m from '../Assets/font/air/airpro-01-m.jpg';
import ban2m from '../Assets/font/air/airpro-02-m.jpg';
import ban3m from '../Assets/font/air/airpro-03-m.jpg';
import ban4m from '../Assets/font/air/airpro-04-m.jpg';

import ga1 from '../Assets/font/air/airpro-ga-1.jpg';
import ga2 from '../Assets/font/air/airpro-ga-2.jpg';
import ga3 from '../Assets/font/air/airpro-ga-3.jpg';
import ga4 from '../Assets/font/air/airpro-ga-4.jpg';

import { BlockImg } from '../component/BlockImgLR'

import set1 from '../Assets/font/air/airproset.jpg';

import { ContainerBase, Wrap, Button, H1, Text, Spacer } from '../component/Core';
import { BlockList, BlockHeader } from '../component/Block';
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

const ga = [
  { img: ga1 },
  { img: ga2 },
  { img: ga3 },
  { img: ga4 }
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
        <Wrap flexDirection='column' height="100%" justifyContent="space-between" padding={[4]}>
          <H1 pl={2} fontFamily={[1]} fontWeight={[700]} fontSize={[3, 3, 4, 4]} lineHeight={[1.4]} letterSpacing={["-4px"]} >
            AIR FORCE 1
          </H1>
          <H1 pl={2} fontFamily={[1]} variant='indent' fontWeight={[700]} fontSize={[3, 3, 4, 4]} lineHeight={[1.4]} letterSpacing={["-4px"]} >
            (169)
          </H1>
          <Text pl={2} fontFamily={[1]} fontWeight={[700]} fontSize={[0, 0, 0, 0]} lineHeight={[1.6]} width="80%">
            Air Force One is the official air traffic control designated call sign for a United States Air Force aircraft carrying the president of the United States. In common parlance, the term is used to denote U.S. Air Force aircraft modified and used to transport the president and a metonym for the primary presidential aircraft, VC-25, although it can be used to refer to any Air Force aircraft the president travels on.(1)(2)
          </Text>
          <BlockList title="formats" description={"OTF, TTF (variable), WOFF, WOFF2"} />
          <BlockList title="formats" description={"OTF, TTF (variable), WOFF, WOFF2"} />
          <BlockList title="formats" description={"OTF, TTF (variable), WOFF, WOFF2"} />
          <BlockList title="formats" description={"OTF, TTF (variable), WOFF, WOFF2"} />

        </Wrap>,

    },
    {
      label: 'Body',
      content:
        <H1 pl={2} fontFamily={[1]} fontWeight={[700]} fontSize={[0, 0, 1, 1]} lineHeight={[1.6]} >
          Lower priced for a reason. This phrase encapsulates how MUJI first began in 1980. We launched products that might almost be regarded as substandard if based on traditional criteria.<br /><br />Focusing on our three priorities of “selection of materials,” “streamlining of processes,” and “simplification of packages,” we have grown into a brand with over 7,000 no-frills quality products.
          This site introduces MUJI from various perspectives such as Message from MUJI / Products and Services / Stores / MUJI's Expanding Activities.<br /><br />
        </H1>,
    },
    // Add more tabs as needed
  ];




  return (
    <ThemeProvider theme={base}>
      <ContainerBase width='100%' flexDirection='column' flexWrap="wrap" alignItems='center' justifyContent="center" bg="#f5f5f5">

        <BlockHeader title="AIR PRO™" description="A Modern Version of Air Force font" handleBuyClick={handleBuyClick} buttonText='BUY' />

        <Wrap width={[1, 1, 1, 1]} mt="5">
          {isMobile ? (
            <ProductSliderFull images={bannerm} objfit="cover" />
          ) : (
            <ProductSliderFull images={banner} objfit="cover" />
          )
          }
        </Wrap>

        <Wrap width={[1, 1, 2 / 3, 1 / 2]} flexDirection='column' height="auto" justifyContent="space-between">

          <Wrap flexGrow='4' p={[2]} flexDirection='column' justifyContent="center">
            <Text fontFamily={[0]} color={['blk50']} variant='indent' fontSize={[1]}>Introducing AIR™, a versatile and clean font inspired by the United States Air Force font. AIR™ retains the simplicity and limited character set of its inspiration, but has been further refined to offer a range of weight options.
              It works very well in combo or solo. It is made up of six styles, from cap light to cap bold.</Text>
            <Spacer height="16px" />
            <Text fontFamily={[0]} color={['blk50']} variant='indent' fontSize={[1]}>
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

            <Wrap flexDirection='row' height="auto">
              <BlockList title="Licensing" description={"A basic license purchased via this website combines desktop and web license. Desktop covers installation on a given number of workstations. Web allows you to self-host webfont files for a single domain with no time limitation. For more information, please check FAQ or get in touch."} />
            </Wrap>

          </Wrap>

        </Wrap>

        <Spacer height="96px" />


        <Wrap width={["100%"]} flexWrap="wrap" justifyContent="center">
          <BlockTabs tabs={tabsBLK} />
        </Wrap>

        <Wrap>
          <BlockImg images={ga} />
        </Wrap>

      </ContainerBase>
    </ThemeProvider>
  )
}