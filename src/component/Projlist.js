import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductSlider from './ProductSlider.js';
import Type1 from './type1';
import d1 from '../assets/d-1.jpg';
import Container1 from '../style/container1';

const images1 = [
  d1,
  d1,
  d1
]
const Projlist = (props) => {
  const ProjLink = styled(Link)`
    width: 100%;
    display: flex; 
    flex-direction: column;
    margin: auto;
    border-bottom: 1px solid #f5f5f5;
    &:hover {
      border-bottom: 1px solid #888;
    }
    &:hover p{
      color: #888;
    }
    @media only screen and (min-width : 480px) {
    width: 100%;
    }
    @media only screen and (min-width : 768px) {
    width: 100%;
    }
    @media only screen and (min-width : 1000px) {
    width: 100%;
    }
    @media only screen and (min-width : 1600px) {
    max-width: 1600px;
    }
    }
`
  const SliderWrapper = styled.div`
    @media only screen and (min-width : 480px) {
   padding: 16px;
    }
    @media only screen and (min-width : 768px) {
    padding: 16px;
    }
    @media only screen and (min-width : 1000px) {
    padding: 16px 10%;
    }
    @media only screen and (min-width : 1600px) {
    max-width: 16px 20%;
    }
  `

  return (
    <Container1>
      <Type1 t1={props.t1} t2={props.t2} t3={props.t3} />
      <SliderWrapper>
        <ProductSlider images={props.images}/>
      </SliderWrapper>
      <ProjLink to={props.path}></ProjLink>
    </Container1>
  )
}

export default Projlist;
