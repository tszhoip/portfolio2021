import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const TypeBlock2 = styled(Link)`
    flex-grow: ${props => props.grow};
    order: ${props => props.order};
    text-align: ${props => props.side};
    width: ${props => props.w};
    padding: 8px 8px 10px 8px;
    border: 0.5px solid #f5f5f5;
    padding-bottom: ${props => props.pb};
    color: black;
    &:hover{
         color: #222;
         background-color: #f5f5f5;
        }
        &:active{
          color: #000;
        }
`
  
const TypeCta = (props) => {


  return (
        <TypeBlock2 
        w={props.w} 
        grow={props.grow} 
        order={props.order} 
        side={props.side} 
        to={props.linkto}>
          {props.text}
        </TypeBlock2>
  )
}

export default TypeCta;
