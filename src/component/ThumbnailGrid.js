import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Type2 from './Type2';
import Img1 from './Img1';

const Banner = styled(Link)`
    width: 100%;
    display: grid;
    gap: 0px;
    background-color: ${props => props.bgc};
    border: 0.5px solid #f5f5f5;
    grid-row: ${props => props.gr};
    grid-column: ${props => props.gc};
    @media only screen and (min-width : 480px) {
      grid-template-columns: repeat( 1, 100%);  
      }
    @media only screen and (min-width : 768px) {
      grid-template-columns: repeat( 1, 100%);  
    }
    @media only screen and (min-width : 1000px) {
      grid-template-columns: repeat( 1, 100%);  
    }
    @media only screen and (min-width : 1600px) {
      grid-template-columns: repeat( 1, 100%);  
    }
    &:hover{
      background-color: #f5f5f5;
      filter: grayscale(1);
      
     }
     &:active{
     }
`

const ThumbnailGrid = (props) => {
  return (
    <Banner to={props.to} gr={props.gr} gc={props.gc}>
      <Img1 grow="1" w="100%" side="left" img={props.img} />
      <Type2 grow="1" w="100%" side="left" pb="32px" pt="0px" text={props.projtitle}/>
    </Banner>
  )
}

export default ThumbnailGrid;
