import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Projlist = (props) => {
  const Projlinkdiv = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
    color: black;
    &:hover {
        background-color: black;
    }
    &:hover p{
      color: white;
    }
    &:hover span::before {
      content: " ";
      width: 16px;
      height: 16px;
      background-color: lightgrey;
      border-radius: 50%;
      display: inline-block;
      margin-bottom: -2px;
      margin-right: 4px;
    }
`
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


return (
<Link to={props.path}>
  <Projlinkdiv>
  <Lp><span />{props.title}</Lp>
  <Mp>{props.type}</Mp>
  <Rp>{props.year}</Rp>
  </Projlinkdiv>
</Link>
)}

export default Projlist;
