import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const TypeBlock2 = styled(Link)`
    flex-grow: ${props => props.grow};
    order: ${props => props.order};
    text-align: ${props => props.side};
    width: ${props => props.w};
    padding: 16px 16px 18px 16px;
    border: 0.5px solid #f5f5f5;
    color: grey;
    &:hover{
         color: #222;
         background-color: #f5f5f5;
        }
        &:active{
          color: #000;
        }
`
  
const Cta1 = (props) => {


  return (
        <TypeBlock2 w={props.w} grow={props.grow} to={props.linkto} order={props.order} side={props.side}>{props.text}</TypeBlock2>
  )
}

export default Cta1;
