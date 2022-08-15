import React from 'react';
import styled from 'styled-components';
import Cta1 from './Cta1';
import Img1 from './Img1';

const Banner = styled.div`
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
      <Img1 grow="1" w="50%" side="left"/>
      <Cta1 grow="1" w="50%" side="left" linkto="/work" text="Figs Inc. / Web Ui"/>
    </Banner>
  )
}

export default Header;
