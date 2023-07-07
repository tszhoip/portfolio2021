import styled from "styled-components";
import { color, typography, space, layout, flexbox, position, width, variant, border } from "styled-system";
import { Link } from 'react-router-dom';

export const ContainerBase = styled.div`
display: flex; 
${layout};
${width}
${position};
${flexbox};
${space};
${typography}
`

export const Wrap = styled.div`
display: flex; 
${layout};
${width}
${position};
${flexbox};
${space};
${typography};
${color};
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
export const H1 = styled.h1`
letter-spacing: -0.02em;
line-height: 1.15;
  ${typography};
  ${color};
  ${space};
  ${width}
`;

export const Text = styled.p`
  line-height: 1.15;
  ${typography};
  ${color};
  ${space};
  ${width}
`;

const buttonVariants = {
  menuWht: {
    backgroundColor: "rgb(255 255 255 / 0.5)",
    backdropFilter: "blur(4px)"
  },
  menuBlk: {
    backgroundColor: "rgb(0 0 0 / 0.5)",
    backdropFilter: "blur(4px)",
    color: "white"
  },
  primary: {
    backgroundColor: "rgb(57 255 20 / 1)",
    backdropFilter: "blur(4px)",
    color: "black"
  },
};

export const Button = styled.button`
  color: ${(props) => props.theme.colors.blk10};
  border: none;
  color: black;
  ${color};
  ${space};
  ${layout};
  ${typography};
  ${flexbox};
  ${border};
  ${variant({
  variants: buttonVariants,
})};
  &:hover{
    color: ${(props) => props.theme.colors.blk40};
    background-color: black;
    backdrop-filter: blur(8px);
    cursor: pointer;
  }
   &:active{
     color: ${(props) => props.theme.colors.blk20};
   }
`;
