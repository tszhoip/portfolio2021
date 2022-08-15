import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Cta1 from './Cta1';
import Img1 from './Img1';

const Banner = styled(Link)`
    display: flex; 
    justify-content: space-between;
    flex-direction: row;
    margin: auto;
    @media only screen and (min-width : 480px) {
    width: 100%;
    }
    @media only screen and (min-width : 768px) {
    width: 100%;
    }
    @media only screen and (min-width : 1000px) {
    width: 100%;
    }
    @media only screen and (min-width : 1800px) {
    max-width: 1800px;
    }
    &:hover{
      color: #222;
      background-color: #f5f5f5;
     }
     &:active{
       color: #000;
     }

`

const Header = (props) => {
  return (
    <Banner>
      <Img1 grow="1" w="25%" side="left" img={props.img}/>
      <Cta1 grow="1" w="25%" side="left" text="Figs Inc."/>
      <Cta1 grow="1" w="25%" side="left" text="Web UI"/>
    </Banner>
  )
}

export default Header;
