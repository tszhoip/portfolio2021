import React, { useState } from 'react';
import { base } from '../theme';
import styled, { ThemeProvider } from "styled-components";
import { color, typography, space, layout } from "styled-system";


export const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.m};
  letter-spacing: -0.02em;
  ${color};
  ${space};
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.m};
  letter-spacing: -0.02em;
  ${color};
  ${space};
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.m};
  ${color};
  ${space};
`;

export const ButtonText = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.m};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.dark};
  letter-spacing: 0.03em;
  display: inline-block;
`;

export const LinkText = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.m};
  text-decoration: underline;
  color: ${(props) => props.theme.colors.secondary};
  letter-spacing: 0.03em;
  display: inline-block;
  ${space};
`;

export const BlockContainer = styled.div`
${color};
${space};
${layout};
box-shadow: 0px 0px 1px #d5d5d5 inset;
`
export const TextWrap = styled.div`
${color};
${space};
${typography};
`