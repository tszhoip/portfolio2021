import React from 'react';
import ProductSlider from './ProductSlider.js';
import styled from 'styled-components';

const Product = (props) => {
  const ProductContainer = styled.div`
    margin: auto;
    margin-bottom: 5vh;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (min-width : 480px) {
width: 100%;
    }
    @media only screen and (min-width : 768px) {
width: 100%;
    }
    @media only screen and (min-width : 1000px) {
max-width: 1200px;
    }
    @media only screen and (min-width : 1800px) {
max-width: 1400px;
    }
`
const ProductInfo = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
    color: black;
    flex-wrap: wrap;
    flex-direction: row;

`
 const Lp = styled.p`
    flex-grow: 2;
    padding: 16px;
`
 const Mp = styled.p`
    flex-grow: 1;
    padding: 16px;
    color: lightgrey;
`
const Rp = styled.p`
flex-grow: 1;
padding: 16px;
color: lightgrey;
text-align: right;
`
  const Aa = styled.a`
background-color: black;
padding: 16px;
color: white;
text-align: right;
width: 100%;
text-align: center;
&:hover {
  background-color: grey;
}
@media only screen and (min-width : 480px) {
width: 100%;
    }
    /* Small Devices, Tablets */
    @media only screen and (min-width : 768px) {
width: 20%;
    }

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {
width: 20%;
    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
width: 20%;
    }
`


return (
    <ProductContainer>
    <ProductSlider images={props.images} objfit={props.objfit}/>
      <ProductInfo>
        <Lp>{props.title}</Lp>
        <Mp>{props.type}</Mp>
        <Rp>{props.year}</Rp>
        <Aa href={props.href}>BUY</Aa>
     </ProductInfo>
    </ProductContainer>
)}

export default Product;
