import React from 'react';
import styled from 'styled-components';


const ImgBlock2 = styled.img`
    // flex-grow: 1;
    width: calc(100% - 16px);
    height: auto;
    order: ${props => props.order};
    text-align: ${props => props.side};
    object-fit: cover;
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
          to={props.linkto} 
          order={props.order} 
          side={props.side}
           
          />
  )
}

export default Img1;
