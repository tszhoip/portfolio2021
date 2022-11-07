import React from 'react';
import Link1 from './Link1';
import styled from 'styled-components';


const TypeBlock1 = styled.p`
    flex-grow: ${props => props.grow};
    order: ${props => props.order};
    text-align: ${props => props.side};
    width: ${props => props.w};
    height: ${props => props.h};
    padding: 8px 10% 10px 8px;
    border: ${props => props.b};
    padding-bottom: ${props => props.pb};
    padding-top: ${props => props.pt};
    color: black;
`



const Type1 = (props) => {
  return (
    <TypeBlock1 lang={props.lang} b={props.b} h={props.h} pb={props.pb} pt={props.pt} w={props.w}>
      {props.text}<Link1 Qhref={props.Qhref1} Qlink={props.Qlink1} /><Link1 Qhref={props.Qhref2} Qlink={props.Qlink2} />
    </TypeBlock1>
  )
}
export default Type1;
