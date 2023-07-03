import styled from "styled-components";
import { color, grid, layout } from "styled-system";

import { base } from '../theme';

export const ContainerGrid = styled.div`
width: 100%;
display: grid;
grid-gap: 0px;
overflow: hidden;
${grid}
${layout}
`