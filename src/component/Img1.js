import React from 'react';
import styled from 'styled-components';
import d1 from '../assets/LFigs.jpg';


const ImgBlock2 = styled.img`
    flex-grow: ${props => props.grow};
    order: ${props => props.order};
    text-align: ${props => props.side};
    width: ${props => props.w};
    content: url(${props => props.img});
    padding: 16px 16px 18px 16px;
    &:hover{
         color: #222;
         background-color: #f5f5f5;
        }
        &:active{
          color: #000;
        }
`
  
const Img1 = (props) => {


  return (
        <ImgBlock2 
          src={d1} 
          w={props.w} 
          grow={props.grow} 
          to={props.linkto} 
          order={props.order} 
          side={props.side} 
          />
  )
}

export default Img1;
