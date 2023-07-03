import styled from "styled-components";
import { color, typography, space, layout, flexbox, variant, border } from "styled-system";

const buttonVariants = {
  primary: {
    backgroundColor: "rgb(255 255 255 / 0.5)",
    backdropFilter: "blur(4px)"
  },
  secondary: {
    backgroundColor: "rgb(0 0 0 / 0.5)",
    backdropFilter: "blur(4px)",
    color: "white"
  },
  tertiary: {

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
    color: ${(props) => props.theme.colors.blk20};
    backdrop-filter: blur(8px);
    cursor: pointer;
  }
   &:active{
     color: ${(props) => props.theme.colors.blk20};
   }

`;
