import React from 'react';
import ProductSlider from './ProductSlider.js';
import { base } from '../theme';
import styled, { ThemeProvider } from "styled-components";
import d1 from '../Assets/product/1.jpg';
import d2 from '../Assets/product/2.jpg';
import d3 from '../Assets/product/3.jpg';
import d4 from '../Assets/product/4.jpg';
import d5 from '../Assets/product/5.jpg';
import d6 from '../Assets/product/6.jpg';
import d7 from '../Assets/product/7.jpg';
import d8 from '../Assets/product/8.jpg';
import d9 from '../Assets/product/9.jpg';
import { Button } from '../component/Buttons';
import { BlockTwoLn100 } from '../component/Block';
import { color, typography, space, layout, flexbox, position, width } from "styled-system";
import { ContainerBase, Wrap } from '../component/Core';


const ProductInfo = styled.div`
    width: 50%;
    color: black;
    grid-template-columns: repeat (1, 1);
    @media only screen and (min-width : 300px) {
      width: 100%;
    }
    @media only screen and (min-width : 768px) {
      width: 50%;
    }
    @media only screen and (min-width : 1000px) {
      width: 50%;
    }
    @media only screen and (min-width : 1600px) {
      width: 50%;
    }

`


const images3 = [
  d1,
  d2,
  d3,
  d4,
  d5,
  d6,
  d7,
  d8,
  d9
]

const L01 = (props) => {


  const handleBuyClick = () => {
    window.location.href = 'https://buy.stripe.com/00g4gQ5UY5j5abe8wA';
  };

  return (
    <ThemeProvider theme={base}>
      <ContainerBase flexDirection={['column', 'row', 'row', 'row']} flexWrap="wrap" justifyContent="center">
        <ProductSlider images={images3} objfit="cover" />
        <Wrap width={["100%","100%","50%", "50%"]} height="100%">
          <BlockTwoLn100 title="AIR PRO™" body="Meet AIR PRO™, a Modular sans serif, meticulously crafted with current trends in mind - street, modern, and sleek. Perfect for versatile design projects, it features OpenType attributes like ligatures and ordinals, along with multi-lingual support, currency figures, numerals, punctuation, and arrows.Ideal for graphic design, signage, movie posters, logos, print, business cards, and branding materials, SP ROBUS promises to be an excellent asset to your design toolkit. is designed especially for display and small sizes screen. Perfect for web performance and minimalist aesthetic. Come in single weight, uppercase and lowercase with a character set that covers over 300 Glyphs. Developed & Published 2022 © Noname™View Standard LicenseView WebFont License" />
          <Button variant="secondary" width={[1, 1, 1, 1]} onClick={handleBuyClick} >BUY NOW</Button>
        </Wrap>
      </ContainerBase>
    </ThemeProvider>
  )
}

export default L01;
