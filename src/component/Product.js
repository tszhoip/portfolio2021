import React from 'react';
import Productkeen from './Productkeen.js';
import styled from 'styled-components';

const Product = (props) => {
  const ProductContainer = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
    color: black;
`
const ProductInfo = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
    color: black;
`
 const Lp = styled.p`
    width: 50%;
    padding: 16px;
`
 const Mp = styled.p`
    width: 30%;
    padding: 16px;
    color: lightgrey;
`
const Rp = styled.p`
width: 20%;
padding: 16px;
color: lightgrey;
text-align: right;
`
  const Aa = styled.a`
background-color: black;
padding: 16px;
color: white;
text-align: right;
width: 25%;
text-align: center;
&:hover {
  background-color: grey;
}
`


return (
    <ProductContainer>
      <Productkeen/>
      <ProductInfo>
        <Lp>{props.title}</Lp>
        <Mp>{props.type}</Mp>
        <Rp>{props.year}</Rp>
        <Aa href={props.href}>BUY</Aa>
     </ProductInfo>
    </ProductContainer>
)}

export default Product;
