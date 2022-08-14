import React from 'react';
import ProductSlider from './ProductSlider.js';
import Type2 from './Type2.js';
import Cta1 from './Cta1.js';
import styled from 'styled-components';
import Container1 from '../style/container1.js';
import d1 from '../assets/product/1.jpg';
import d2 from '../assets/product/2.jpg';
import d3 from '../assets/product/3.jpg';

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
    display: flex; 
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
    color: black;
    flex-wrap: wrap;
    flex-direction: row;

`


const images3 = [
    d3,
    d1,
    d2
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
