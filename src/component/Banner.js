import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Cta1 from './Cta1';
import Type1 from './Type1';
import Img1 from './Img1';

const Banner = styled(Link)`
    width: 100%;
    display: grid;
    grid-gap: 0px;
    background-color: ${props => props.bgc};
    @media only screen and (min-width : 480px) {
        grid-template-columns: repeat(1, auto);
    }
    @media only screen and (min-width : 768px) {
        grid-template-columns: repeat(2, auto);
    }
    @media only screen and (min-width : 1000px) {
            grid-template-columns: repeat(3, 33.3%);
    }
    @media only screen and (min-width : 1600px) {
            grid-template-columns: repeat(3, 33.3%);
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
    <Banner to={props.to}>
      <Img1 grow="1" w="25%" side="left" img={props.img} />
      <Type1 grow="1" w="25%" side="left" text="Figs Inc." />
      <Type1 grow="1" w="25%" side="left" text="Web UI" />
    </Banner>
  )
}

export default Header;
