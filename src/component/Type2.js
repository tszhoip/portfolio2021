import React from 'react';
import styled from 'styled-components';


const TypeBlock1 = styled.p`
    flex-grow: ${props => props.grow};
    order: ${props => props.order};
    text-align: ${props => props.side};
    width: 100%;
    padding: 16px;
    color: grey;
`

const Type2 = (props) => {


  return (
    <TypeBlock1>{props.text}</TypeBlock1>
  )
}

export default Type2;
