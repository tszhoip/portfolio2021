import React from 'react';
import ProductSlider from './ProductSlider.js';
import TypeStatic from './TypeStatic.js';
import TypeCta from './TypeCta.js';
import styled from 'styled-components';
import d1 from '../assets/product/1.jpg';
import d2 from '../assets/product/2.jpg';
import d3 from '../assets/product/3.jpg';
import d4 from '../assets/product/4.jpg';
import d5 from '../assets/product/5.jpg';
import d6 from '../assets/product/6.jpg';
import d7 from '../assets/product/7.jpg';
import d8 from '../assets/product/8.jpg';
import d9 from '../assets/product/9.jpg';
import { PButton } from '../component/Buttons';
import { BlockTwoLn100, BlockTwoLn50 } from '../component/Block';

const ProductContainer = styled.div`
    display: flex; 
    justify-content: start;
    @media only screen and (min-width : 300px) {
      flex-direction: column;
    }
    @media only screen and (min-width : 768px) {
      flex-direction: row;
    }
    @media only screen and (min-width : 1000px) {
      flex-direction: row;
    }
    @media only screen and (min-width : 1600px) {
      flex-direction: row;
    }
`
const ProductInfo = styled.div`
    width: 50%;
    display: grid; 
    border-bottom: 1px solid #f5f5f5;
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



  return (
    <ProductContainer>
      <ProductSlider images={images3} objfit="cover" />
      <ProductInfo>
        <BlockTwoLn100
        title="NN N1 MONO™" 
        body="NN N1 MONO is designed especially for display and small sizes screen. Perfect for web performance and minimalist aesthetic. Come in single weight, uppercase and lowercase with a character set that covers over 300 Glyphs. Developed & Published 2022 © Noname™View Standard LicenseView WebFont License" />
        <PButton cta="BUY"/>

        <TypeStatic text="View Standard License" />
        <TypeCta grow="1" linkto="/" text="BUY  $100" />
      </ProductInfo>
    </ProductContainer>
  )
}

export default L01;
