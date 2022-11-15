import React from 'react';
import styled from 'styled-components';
import TypeCta from './TypeCta';

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
      <TypeCta
        grow="1"
        w="25%"
        side="left"
        linkto="/feed"
        text="FEED"
      />
      <TypeCta
        grow="1"
        w="25%"
        side="left"
        linkto="/snap"
        text="SNAP"
      />
    </Foot>
  )
}

export default Footer;
