import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { color, typography, space } from "styled-system";
import theme from '../theme';

const Base = styled.p`
 ${color};
`

const BaseTitle = styled(Base)`
${color};
`

const Box = styled.div`
order: ${props => props.o};
width: ${props => props.col};

box-shadow: 0px 0px 1px black inset;
`
const Padding = styled.div`
padding: 8px 5% 10px 8px;
`

export const OneL25 = (props) => {
  return (
    <ThemeProvider theme={theme}>
    <Box col="25%">
      <Padding>
        <BaseTitle color="dark">
          {props.title}
        </BaseTitle>
      </Padding>
    </Box>
    </ThemeProvider>
  )
};

export const OneL50 = (props) => {
  return (
    <Box col="50%">
      <Padding>
      <BaseTitle color="dark">
          {props.title}
        </BaseTitle>
      </Padding>
    </Box>
  )
};

export const OneL100 = (props) => {
  return (
    <Box col="100%">
      <Padding>
      <BaseTitle color="dark">
          {props.title}
        </BaseTitle>
      </Padding>
    </Box>
  )
};

export const TwoL25 = (props) => {
  return (
    <Box col="25%">
      <Padding>
        <BaseTitle lang={props.lang}>
          {props.title}
        </BaseTitle>
        <Base lang={props.lang}>
          {props.title}
        </Base>
      </Padding>
    </Box>
  )
};

export const TwoL50 = (props) => {
  return (
    <Box col="50%">
      <Padding>
        <BaseTitle lang={props.lang}>
          {props.title}
        </BaseTitle>
        <Base lang={props.lang}>
          {props.title}
        </Base>
      </Padding>
    </Box>
  )
};

export const TwoL100 = (props) => {
  return (
    <Box col="100%">
      <Padding>
        <BaseTitle lang={props.lang}>
          {props.title}
        </BaseTitle>
        <Base lang={props.lang}>
          {props.title}
        </Base>
      </Padding>
    </Box>
  )
};