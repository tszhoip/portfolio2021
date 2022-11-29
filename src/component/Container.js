import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import { grid, flexbox, color, typography, space, layout } from "styled-system";

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
${grid}
${layout}
`