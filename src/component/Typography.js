import React from 'react';
import theme from '../theme';
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { color, typography, space, layout } from "styled-system";

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 700;
  letter-spacing: -0.02em;
  ${color};
  ${space};
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 700;
  letter-spacing: -0.02em;
  ${color};
  ${space};
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  ${color};
  ${space};
`;

export const ButtonText = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.medium};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.dark};
  letter-spacing: 0.03em;
  display: inline-block;
`;

export const LinkText = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.medium};
  text-decoration: underline;
  color: ${(props) => props.theme.colors.secondary};
  letter-spacing: 0.03em;
  display: inline-block;
  ${space};
`;

const StrokeBox = styled.div`
${layout};
box-shadow: 0px 0px 1px black inset;
`
const Padding = styled.div`
padding: 8px 5% 10px 8px;
`

export const BlockTwoLn = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <StrokeBox width={[1, 1 / 2, 1 / 4]}h>
      <Padding>
        <H1 color="primary">{props.title}</H1>
        <Text color="dark">{props.body}</Text>
      </Padding>
      </StrokeBox>
    </ThemeProvider>
  )
};
