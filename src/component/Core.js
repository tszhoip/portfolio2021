import styled, { css } from "styled-components"
import { Link } from 'react-router-dom'
import { color, typography, space, layout, flexbox, position, width, variant, border, compose } from "styled-system"

export const ContainerBase = styled.div`
display: flex; 
${compose(space, width, color, layout, typography, flexbox, border, position)};
`

// W R A P

export const Wrap = styled.div`
display: flex; 
${compose(space, width, color, layout, typography, flexbox, border, position)};
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

// F O N T

const fontVariants = {
  indent: {
    textIndent: '4rem',
  }
};

export const H1 = styled.h1`
letter-spacing: -0.02em;
line-height: 1.15;

${compose(space, color, layout, typography, flexbox, border, width)};
${variant({
  variants: fontVariants,
})};
`;

export const Text = styled.p`
  line-height: 1.15;
  ${compose(space, color, layout, typography, flexbox, border, width)};
  ${variant({
    variants: fontVariants,
  })};

`;


// B U T T O N

const buttonVariants = {
  menuWht: {
    color: 'black',
    backgroundColor: "rgb(230 230 230 / 0.8)",
    backdropFilter: "blur(2px)"
    },
  menuBlk: {
    backgroundColor: "rgb(0 0 0 / 0.5)",
    backdropFilter: "blur(4px)",
    color: "white"
  },
  primary: {
    backgroundColor: "rgb(215 215 215 / 0.4)",
    backdropFilter: "blur(4px)",
    color: "black",
    transition: "background-color 0.6s ease-in-out",
    borderRadius: "16px"
  },
};

const hoverVariants = {
  menuWht: css`
   &:hover {
      backdrop-filter: blur(4px);
    }
  `,
  menuBlk: css`
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(8px);
      color: white;
    }
  `,
  primary: css`
    &:hover {
      background-color: black;
      backdrop-filter: blur(8px);
      color: #39FF14;
      border-radius: 16px;
    }
  `,
};

export const Button = styled.button`
border: none;
${compose(space, color, layout, typography, flexbox, border)};
  ${variant({
  variants: buttonVariants,
})};
  ${(props) => hoverVariants[props.variant] || ""}; // Apply the appropriate hover styles based on the variant prop

 
`;
