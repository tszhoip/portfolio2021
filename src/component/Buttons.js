import React, { useState } from 'react';
import { base } from '../theme';
import styled, { ThemeProvider } from "styled-components";
import { color, typography, space, layout } from "styled-system";
import { H1 } from "./Typography";
import {Routes, Route, useNavigate} from 'react-router-dom';


export const Button = styled.button`
  box-shadow: 0px 0px 1px ${(props) => props.theme.colors.gre20} inset;
  background-color: ${(props) => props.theme.colors.gre10};
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.nav30};
  text-align: left;
  border: none;
  ${color};
  ${space};
  ${layout};
  ${typography};
  &:hover{
    color: ${(props) => props.theme.colors.nav20};
    box-shadow: 0px 0px 16px ${(props) => props.theme.colors.gre20} inset;
  }
   &:active{
     color: ${(props) => props.theme.colors.nav20};
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
      <Button padding={[2]} onClick={navigateHome}>
        {props.cta}
      </Button>
    </ThemeProvider>
  ) 
};