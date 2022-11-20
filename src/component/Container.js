import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import { grid, color, typography, space, layout } from "styled-system";

import { base } from '../theme';
import { H1, Text } from "./Typography";
import { PButton, Button } from "./Buttons";

export const Worklist = styled.div`
width: 100%;
display: grid;
grid-gap: 0px;
overflow: hidden;
@media only screen and (min-width : 280px) {
  grid-template-columns: repeat(2, 50%);
}
@media only screen and (min-width : 768px) {
  grid-template-columns: repeat(2, 50%);
}
@media only screen and (min-width : 1000px) {
        grid-template-columns: repeat(2, 50%);
}
@media only screen and (min-width : 1600px) {
  grid-template-columns: repeat(2, 50%);
}
`