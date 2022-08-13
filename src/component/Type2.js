import React from 'react';
import styled from 'styled-components';


const TypeBlock1 = styled.p`
    width: 100%;
    padding: 16px;
    color: lightgrey;
`
  
const Type2 = (props) => {


  return (
        <TypeBlock1>{props.t1}</TypeBlock1>
  )
}

export default Type2;
