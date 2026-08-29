import styled, { css } from "styled-components"
import { Link } from 'react-router-dom'
import { color, typography, space, layout, flexbox, position, width, variant, border, compose } from "styled-system"


export const Container = styled.div`
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
${color};
${space};
background-image: url(${props => props.backgroundImage});
background-size: cover;
background-position: center;
background-color: #f5f5f5;
color: black;
transition: background-color 0.2s ease, background-image 0.3s ease;
position: relative;
overflow: hidden;
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 1fr;
&:hover{
  background-color: #FFF;
  color: black;
  background-image: url(${props => props.backgroundImageHover || props.backgroundImage});
}
&:hover > div {
  background-color: transparent;
}
 &:active{
    filter: grayscale(50%);
}
`

export const ThumbnailFont = styled(Link)`
${width};
${layout};
${flexbox};
${color};
${space};
background-image: url(${props => props.backgroundImage});
background-size: cover;
background-position: center;
color: rgba(0, 0, 0, 0.4);
&:hover{
  filter: grayscale(100%);
  color: rgba(255, 255, 255, 1);
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
  },
  indentpb: {
    paddingBottom: '1rem',
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


// S P A N

const spanVariants = {
  A: {
  },
  B: {
  }
};

export const Span = styled.span`
${compose(space, color, layout, typography, flexbox, border, width)};
${variant({
  variants: spanVariants,
})};
`;


// B U T T O N

const buttonVariants = {
  default: {
    color: 'black',
    backgroundColor: "#f5f5f5",
    backdropFilter: "blur(2px)",
    padding: "16px",
    transition: "background-color 0.2s ease",
  },
  footer: {
    color: '#EAEAEA',
    backgroundColor: "#222",
    backdropFilter: "blur(2px)",
    border: "0px solid",
    transition: "all 0.2s ease",
  },
  footerDisable: {
    color: '#333',
    backgroundColor: "rgb(0 0 0 / 0)",
    backdropFilter: "blur(2px)",
    border: "0px solid",
  },
  primary: {
    backgroundColor: "rgb(215 215 215 / 0.4)",
    backdropFilter: "blur(4px)",
    color: "black",
    transition: "background-color 0.3s ease-in-out",
  },
  primaryR: {
    backgroundColor: "rgb(215 215 215 / 0.4)",
    backdropFilter: "blur(4px)",
    color: "black",
    transition: "background-color 0.3s ease-in-out",
    borderRadius: "16px"
  },
};

const hoverVariants = {
  default: css`
   &:hover {
      background-color: #FFF;
      backdrop-filter: blur(4px);
    }
  `,
  primary: css`
    &:hover {
      background-color: black;
      backdrop-filter: blur(8px);
      color: #39FF14;
    }
  `,
  footer: css`
  &:hover {
    background-color: #000;
    color: #FFF;
    backdrop-filter: blur(4px);
  }
`,
  primaryR: css`
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
  ${(props) => hoverVariants[props.variant] || ""};
`;




// S P A C E R


export const Spacer = styled.div`
${compose(space, color, layout, typography, flexbox, border)};
`;
