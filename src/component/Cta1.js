import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const TypeBlock2 = styled(Link)`
    width: ${props => props.width};
    flex-grow: ${props => props.grow};
    padding: 16px 16px 18px;
    color: grey;
    &:hover{
         color: black;
         background-color: #f5f5f5;
        }
        &:active{
         text-decoration: underline;
        }
`
  
const Cta1 = (props) => {


  return (
        <TypeBlock2 grow={props.grow} to={props.linkto}>{props.t1}</TypeBlock2>
  )
}

export default Cta1;
