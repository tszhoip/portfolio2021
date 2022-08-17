import React from 'react';
import styled from 'styled-components';


const TypeBlock1 = styled.p`
    flex-grow: ${props => props.grow};
    order: ${props => props.order};
    text-align: ${props => props.side};
    width: ${props => props.w};
    padding: 8px 8px 10px 8px;
    padding-bottom: ${props => props.pb};
    color: grey;
`

const Type2 = (props) => {


  return (
    <TypeBlock1 pb={props.pb} >{props.text}</TypeBlock1>
  )
}

export default Type2;
