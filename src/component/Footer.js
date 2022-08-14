import React from 'react';
import styled from 'styled-components';
import Cta1 from './Cta1';

const Foot = styled.nav`
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
`

const Footer = (props) => {
  return (
    <Foot>
      <Cta1 grow="2" text="Play" linkto="/" />
      <Cta1 grow="2" text="Inst" linkto="/shop" />
      <Cta1 grow="2" text="TERM" linkto="/" />
      <Cta1 grow="2" text="PRIV" linkto="/work" />
    </Foot>
  )
}

export default Footer;
