import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Type1 = (props) => {
  const Lp = styled.p`
    width: 50%;
    padding: 16px;
    color: lightgrey;
`

  const LineItem = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-between;
    color: black;
  `

  return (
      <LineItem>
        <Lp><span />{props.t1}</Lp>
        <Lp>{props.t2}</Lp>
        <Lp>{props.t3}</Lp>
      </LineItem>
  )
}

export default Type1;
