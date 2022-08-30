import React from 'react';
import ProductSlider from './ProductSlider.js';
import Type2 from './Type2.js';
import Cta1 from './Cta1.js';
import styled from 'styled-components';
import d1 from '../assets/product/1.jpg';
import d2 from '../assets/product/2.jpg';
import d3 from '../assets/product/3.jpg';
import d4 from '../assets/product/4.jpg';

const ProductContainer = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: start;
    @media only screen and (min-width : 480px) {
    }
    @media only screen and (min-width : 768px) {
    }
    @media only screen and (min-width : 1000px) {
    }
    @media only screen and (min-width : 1600px) {
    }
`
const ProductInfo = styled.div`
    width: 50%;
    display: grid; 
    border-bottom: 1px solid #f5f5f5;
    color: black;
    grid-template-columns: repeat (1, 1);

`


const images3 = [
    d1,
    d2,
    d3,
    d4
  ]

const L01 = (props) => {
  


return (
    <ProductContainer>
    <ProductSlider images={images3} objfit="cover"/>
      <ProductInfo>
        <Type2 text="Leather Wallet L01" />
        <Cta1 grow="1"linkto="/" text="BUY  $100" />
     </ProductInfo>
    </ProductContainer>
)}

export default L01;
