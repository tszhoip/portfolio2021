import React from 'react';
import styled from 'styled-components';
import TypeCta from './TypeCta';

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
      <TypeCta
        grow="1"
        w="25%"
        side="left"
        linkto="/work"
        text="NONAME"
      />
      <TypeCta
        grow="1"
        w="25%"
        side="left"
        linkto="/shop"
        text="SHOP"
      />
    </Head>
  )
}

export default Header;
