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
    border: 0.5px solid #f5f5f5;
    padding-bottom: ${props => props.pb};
    padding-top: ${props => props.pt};
    color: black;
`

const TypeStatic = (props) => {
  return (
    <TypeBlock1 lang={props.lang} h={props.h} pb={props.pb} pt={props.pt} w={props.w}>
      {props.text}<Link1 Qhref={props.Qhref1} Qlink={props.Qlink1} /><Link1 Qhref={props.Qhref2} Qlink={props.Qlink2} />
    </TypeBlock1>
  )
}
export default TypeStatic;
