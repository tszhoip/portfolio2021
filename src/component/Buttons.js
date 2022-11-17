import React, { useState } from 'react';
import { base } from '../theme';
import styled, { ThemeProvider } from "styled-components";
import { color, typography, space, layout } from "styled-system";
import { H1 } from "./Typography";
import {Routes, Route, useNavigate} from 'react-router-dom';


export const Button = styled.button`
  box-shadow: 0px 0px 1px #d5d5d5 inset;
  background-color: black;
  font-size: ${(props) => props.theme.fontSizes.l};
  text-align: left;
  border: none;
  ${color};
  ${space};
  ${layout};
  ${typography};
  &:hover{
    color: white;
    background-color: red;
   }
   &:active{
     color: grey;
   }
`;


export const PButton = (props) => {

  const navigate = useNavigate();
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/contacts');
  };
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };

  return (
    <ThemeProvider theme={base}>
      <Button color="dark" padding={[2]} width={[1, 1, 1 / 2, 1 / 2]} onClick={navigateHome}>
        {props.cta}
      </Button>
    </ThemeProvider>
  )
};