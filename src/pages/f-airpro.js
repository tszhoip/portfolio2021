import React from 'react';
import { ProductSliderFull } from '../component/ProductSlider';
import { base } from '../theme';
import { ThemeProvider } from "styled-components";
import d1 from '../Assets/product/1.jpg';
import d2 from '../Assets/product/2.jpg';
import d3 from '../Assets/product/3.jpg';
import d4 from '../Assets/product/4.jpg';
import d5 from '../Assets/product/5.jpg';
import d6 from '../Assets/product/6.jpg';
import d7 from '../Assets/product/7.jpg';
import d8 from '../Assets/product/8.jpg';
import d9 from '../Assets/product/9.jpg';
import d10 from '../Assets/font/air/airpro-01.jpg';
import d11 from '../Assets/font/air/airpro-02.jpg';
import d12 from '../Assets/font/air/airpro-03.jpg';
import { ContainerBase, Wrap, Button, H1, Text } from '../component/Core';

const images1 = [
  d1,
  d2,
  d3
]
const images2 = [
  d4,
  d5,
  d6
]
const images3 = [
  d7,
  d8,
  d9
]
const images4 = [
  d10,
  d11,
  d12
]

export const Airpro = (props) => {
  const handleBuyClick = () => {
    window.location.href = 'https://buy.stripe.com/00g4gQ5UY5j5abe8wA';
  };

  return (
    <ThemeProvider theme={base}>
      <ContainerBase flexDirection={['column', 'row', 'row', 'row']} flexWrap="wrap" justifyContent="center">
      <Wrap width={["100%","100%","100%", "100%"]}  flexDirection={['row']} height={["64px","64px","64px", "64px"]}>
        <Wrap flexDirection={['column', 'column', 'column', 'column']}   flexWrap="wrap" justifyContent="center"  width={[3/4, 2/3, 1/2, 1/2]}>
          <H1 pl={[2]} fontSize={[0,1,1,1]} >AIR PRO™</H1> 
          <Text pl={[2]} color={'blk40'} fontSize={[0,1,1,1]}>A USAF revamp version with a modern touch</Text>
          </Wrap>
          <Button variant="primary" width={[1/4, 1/3, 1/2, 1/2]} onClick={handleBuyClick} >BUY / 5 USD</Button>
        </Wrap>
        <ProductSliderFull images={images4} objfit="cover" />
         <ProductSliderFull images={images1} objfit="cover" />
         <ProductSliderFull images={images2} objfit="cover" />
         <ProductSliderFull images={images3} objfit="cover" />
         <ProductSliderFull images={images1} objfit="cover" />
         <ProductSliderFull images={images4} objfit="cover" />
       
      </ContainerBase>
    </ThemeProvider>
  )
}