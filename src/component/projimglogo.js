import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjImgLogo = (props) => {


  const LogoImg = styled.img`
    @media only screen and (min-width : 480px) {
    width: 50%;
    }
    @media only screen and (min-width : 768px) {
    width: 50%;
    }
    @media only screen and (min-width : 1000px) {
    width: 50%;
    max-width: 1200px;
    }
    @media only screen and (min-width : 1600px) {
    width: 33.3%;
    max-width: 1400px;
    }
`

  const LogoInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


  return ( 
        <LogoImg src={props.img} />
  )
}

export default ProjImgLogo;
