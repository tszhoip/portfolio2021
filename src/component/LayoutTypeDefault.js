import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Base = styled.p`
    flex-grow: ${props => props.g};
    text-align: ${props => props.s};
    width: ${props => props.w};
    height: ${props => props.h};
    color: #222;
`

const BaseTitle = styled(Base)`
    color: black;
`

const Action = styled(Link)`
    flex-grow: ${props => props.g};
    order: ${props => props.o};
    text-align: ${props => props.s};
    width: ${props => props.w};
    height: ${props => props.h};
    padding: 8px 5% 10px 8px;
    padding-bottom: 12px;
    padding-top: 12px;
    color: black;
    &:hover{
      color: #222;
      background-color: #f5f5f5;
    }
    &:active{
      color: #000;
    }
`
const Box = styled.div`
order: ${props => props.o};
width: ${props => props.twoCol ? "100%" : "50%"};
box-shadow: 0px 0px 1px black inset;
`
const Padding = styled.div`
padding: 8px 5% 10px 8px;
`

export const OneLn50 = (props) => {
  return (
    <Box>
      <Padding>
        <Base lang={props.lang}>
          {props.title}
        </Base>
      </Padding>
    </Box>
  )
};

export const OneLn100 = (props) => {
  return (
    <Box twoCol>
      <Padding>
        <Base lang={props.lang}>
          {props.title}
        </Base>
      </Padding>
    </Box>
  )
};

export const TwoLn25 = (props) => {
  return (
    <Box twoCol>
      <Padding>
        <BaseTitle lang={props.lang}>
          {props.title}
        </BaseTitle>
        <Base lang={props.lang}>
          {props.body}
        </Base>
      </Padding>
    </Box>
  )
};

export const TwoLn50 = (props) => {
  return (
    <Box twoCol>
      <Padding>
        <BaseTitle lang={props.lang}>
          {props.title}
        </BaseTitle>
        <Base lang={props.lang}>
          {props.body}
        </Base>
      </Padding>
    </Box>
  )
};

export const TwoLn100 = (props) => {
  return (
    <Box twoCol="100%">
      <Padding>
        <BaseTitle lang={props.lang}>
          {props.title}
        </BaseTitle>
        <Base lang={props.lang}>
          {props.body}
        </Base>
      </Padding>
    </Box>
  )
};

export const TypeAction = (props) => {
  return (
    <Action lang={props.lang} h={props.h} g={props.g} o={props.o} w={props.w}>
      {props.title}
    </Action>
  )
}

