import React from 'react';
import styled from 'styled-components';


const ImgBlock2 = styled.img`
    flex-grow: ${props => props.grow};
    order: ${props => props.order};
    text-align: ${props => props.side};
    padding: 8px;
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
          src={props.img}
          w={props.w} 
          grow={props.grow} 
          to={props.linkto} 
          order={props.order} 
          side={props.side} 
          />
  )
}

export default Img1;