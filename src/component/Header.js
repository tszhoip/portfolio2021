import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Cta1 from './Cta1';

const Head = styled.nav`
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
    max-width: 1200px;
    }
`
const Menu = styled.div`
`

const Header = (props) => {
  return (
    <Head>
      <Cta1 grow="2" t1="NONAME.LA" linkto="/" />
      <Cta1 grow="1" t1="Work" linkto="/work" />
      <Cta1 grow="1" t1="Shop" linkto="/shop" />
    </Head>
  )
}

export default Header;
