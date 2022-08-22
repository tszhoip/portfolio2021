import React from 'react';
import styled from 'styled-components';


const TypeBlock1 = styled.p`
    flex-grow: ${props => props.grow};
    order: ${props => props.order};
    text-align: ${props => props.side};
    width: ${props => props.w};
    height: ${props => props.h};
    padding: 8px 8px 10px 8px;
    border: ${props => props.b};
    padding-bottom: ${props => props.pb};
    padding-top: ${props => props.pt};
    color: black;
`

const Type2 = (props) => {
  return (
    <TypeBlock1 b={props.b} h={props.h} pb={props.pb} pt={props.pt} w={props.w}>{props.text}</TypeBlock1>
  )
}
export default Type2;
