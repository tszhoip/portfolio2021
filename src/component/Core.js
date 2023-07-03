import styled, { ThemeProvider } from "styled-components";
import { color, typography, space, layout, flexbox, position, width } from "styled-system";
import { Link, useNavigate } from 'react-router-dom';

export const ContainerBase = styled.div`
display: flex; 
${layout};
${width}
${position};
${flexbox};
${space};
${typography}
`

export const Thumbnail = styled(Link)`
${width};
${layout};
${flexbox};
${color};
&:hover{
  filter: grayscale(100%);
  color: white;
  background-color: black;
}
 &:active{
    filter: grayscale(50%); 
}
`

export const Wrap = styled.div`
${layout};
${width}
${position};
${flexbox};
${space};
${typography};
`