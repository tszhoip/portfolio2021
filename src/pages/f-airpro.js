import React from 'react';
import { ProductSliderFull } from '../component/ProductSlider';
import { base } from '../theme';
import { ThemeProvider, useTheme } from "styled-components";

import ban1 from '../assets/logo/lo01.jpg';
import ban2 from '../assets/logo/lo01.jpg';
import ban3 from '../assets/logo/lo01.jpg';
import ban4 from '../assets/logo/lo01.jpg';

import ban1m from '../assets/logo/lo01.jpg';
import ban2m from '../assets/logo/lo01.jpg';
import ban3m from '../assets/logo/lo01.jpg';
import ban4m from '../assets/logo/lo01.jpg';

import ga1 from '../assets/logo/lo01.jpg';
import ga2 from '../assets/logo/lo01.jpg';
import ga3 from '../assets/logo/lo01.jpg';
import ga4 from '../assets/logo/lo01.jpg';

import { BlockImg } from '../component/BlockImgLR'

import set1 from '../assets/logo/lo01.jpg';

import { Container, Wrap, Button, Spacer } from '../component/Core';
import { Type } from '../components/layout/Type';
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
  const isMobile = window.innerWidth <= parseInt(theme.breakpoints.M, 10);
  const tabsBLK = [
    {
      label: 'Title',
      content:
        <Wrap flexDirection='column' height="100%" justifyContent="space-between" padding="loose">
          <Type as="h2" pl={2} fontFamily={[1]} fontWeight={[700]} size="L" >
            AIR FORCE 1
          </Type>
          <Type as="h2" pl={2} fontFamily={[1]} variant='indent' fontWeight={[700]} size="L" >
            (169)
          </Type>
          <Type pl={2} fontFamily={[1]} fontWeight={[700]} size="S" width="80%">
            Air Force One is the official air traffic control designated call sign for a United States Air Force aircraft carrying the president of the United States. In common parlance, the term is used to denote U.S. Air Force aircraft modified and used to transport the president and a metonym for the primary presidential aircraft, VC-25, although it can be used to refer to any Air Force aircraft the president travels on.(1)(2)
          </Type>
          <BlockList title="formats" description={"OTF, TTF (variable), WOFF, WOFF2"} />
          <BlockList title="formats" description={"OTF, TTF (variable), WOFF, WOFF2"} />
          <BlockList title="formats" description={"OTF, TTF (variable), WOFF, WOFF2"} />
          <BlockList title="formats" description={"OTF, TTF (variable), WOFF, WOFF2"} />

        </Wrap>,

    },
    {
      label: 'Body',
      content:
        <Type as="h2" pl={2} fontFamily={[1]} fontWeight={[700]} size="S" >
          Lower priced for a reason. This phrase encapsulates how MUJI first began in 1980. We launched products that might almost be regarded as substandard if based on traditional criteria.<br /><br />Focusing on our three priorities of “selection of materials,” “streamlining of processes,” and “simplification of packages,” we have grown into a brand with over 7,000 no-frills quality products.
          This site introduces MUJI from various perspectives such as Message from MUJI / Products and Services / Stores / MUJI's Expanding Activities.<br /><br />
        </Type>,
    },
    // Add more tabs as needed
  ];




  return (
    <ThemeProvider theme={base}>
      <Container width='100%' flexDirection='column' flexWrap="wrap" alignItems='center' justifyContent="center" bg="#f5f5f5">

        <BlockHeader title="AIR PRO™" description="A Modern Version of Air Force font" handleBuyClick={handleBuyClick} buttonText='BUY' />

        <Wrap width={[1, 1, 1, 1]} mt="loose">
          {isMobile ? (
            <ProductSliderFull images={bannerm} objfit="cover" />
          ) : (
            <ProductSliderFull images={banner} objfit="cover" />
          )
          }
        </Wrap>

        <Wrap width={[1, 1, 2 / 3, 1 / 2]} flexDirection='column' height="auto" justifyContent="space-between">

          <Wrap flexGrow='4' p="tight" flexDirection='column' justifyContent="center">
            <Type fontFamily={[0]} color={['blk50']} variant='indent' size="S">Introducing AIR™, a versatile and clean font inspired by the United States Air Force font. AIR™ retains the simplicity and limited character set of its inspiration, but has been further refined to offer a range of weight options.
              It works very well in combo or solo. It is made up of six styles, from cap light to cap bold.</Type>
            <Spacer height="16px" />
            <Type fontFamily={[0]} color={['blk50']} variant='indent' size="S">
              Our goal with AIR™ was to create a font that is both functional and visually appealing, with as little design as possible to maximize utility. We believe that the best fonts are those that can be used in a variety of contexts, from branding and marketing to product packaging and signage.</Type>
          </Wrap>

          <Wrap flexGrow='4' p="tight" flexDirection='column' justifyContent="center">
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

      </Container>
    </ThemeProvider>
  )
}