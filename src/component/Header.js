import React from 'react';
import styled from 'styled-components';
import Cta1 from './Cta1';

const Head = styled.nav`
    display: flex; 
    // position: fixed;
    // background-color: white;
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

const Header = (props) => {
  return (
    <Head>
      <Cta1
        grow="1"
        w="25%"
        side="LEFT"
        linkto="/work"
        text="NONAME.la"
      />
      <Cta1
        grow="1"
        w="25%"
        side="LEFT"
        linkto="/feed"
        text="Feed"
      />
      <Cta1
        grow="1"
        w="25%"
        side="LEFT"
        linkto="/snap"
        text="SNAP"
      />
      <Cta1
        grow="1"
        w="25%"
        side="LEFT"
        linkto="/shop"
        text="Shop"
      />
    </Head>
  )
}

export default Header;
