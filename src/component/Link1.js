import React from 'react';
import styled from 'styled-components';

const QuickLink = styled.a`
    text-decoration: underline;
    cursor: pointer;
    padding-left: 6px;
    color: black;
`

const Link1 = (props) => {
  return (
    <QuickLink href={props.Qhref}>{props.Qlink}</QuickLink>
  )
}
export default Link1;
