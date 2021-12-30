import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Type1 = (props) => {
  const Lp = styled.p`
    width: 50%;
    padding: 16px;
`

  const Mp = styled.p`
    width: 30%;
    padding: 16px;
    color: lightgrey;
`

  const Rp = styled.p`
    width: 20%;
    padding: 16px;
    color: lightgrey;
    text-align: right;
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
        <Mp>{props.t2}</Mp>
        <Rp>{props.t3}</Rp>
      </LineItem>
  )
}

export default Type1;
