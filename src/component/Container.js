import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import { color, grid, typography, space, layout, width } from "styled-system";

import { base } from '../theme';
import { H1, Text } from "./Typography";
import { PButton, Button } from "./Buttons";

export const ContainerGrid = styled.div`
width: 100%;
display: grid;
grid-gap: 0px;
overflow: hidden;
${grid}
${layout}
`

export const ContainerFlex = styled.div`
width: 100%;
max-width: 1440px;
margin: 0 auto; 
display: flex;
flex-direction: row;
flex-wrap: wrap;
box-shadow: 0px 0px 1px ${base.colors.gre20};
${color}
${grid}
${layout}
`