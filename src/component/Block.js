import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import { color, space, layout, flexbox, position, width, zIndex } from "styled-system";

import { base } from '../theme';
import { Thumbnail, Wrap, H1, Text, Button } from './Core';

export const BlockContainer = styled.div`
background-color: ${(props) => props.theme.colors.gre10};
box-shadow: 0px 0px 1px ${(props) => props.theme.colors.gre20} inset;
${color};
${space};
${layout};
`

export const CenterWrap = styled.div`
${layout};
${width}
${position};
${flexbox};
`



const ImgBlock2 = styled.img`
    flex-grow: 1;
    width: 100%;
    height: auto;
    object-fit: cover;
    ${space};
    ${layout};
`


export const BlockTwoLn50 = (props) => {
  return (
    <ThemeProvider theme={base}>
      <BlockContainer width={[1, 1, 1 / 2, 1 / 2]}>
        <Wrap padding={[3]} pb={[4]}>
          <ImgBlock2 src={props.image} pb={[2]} />
          <H1 fontFamily={[0]} color="navy10" fontSize={[1]}>{props.title}</H1>
          <Text color="navy20" fontSize={[1]}>{props.body}</Text>
        </Wrap>
      </BlockContainer>
    </ThemeProvider>
  )
};

export const BlockTwoLn100 = (props) => {
  return (
    <ThemeProvider theme={base}>
      <BlockContainer width={[1, 1, 1, 1]}>
        <Wrap padding={[3]} pb={[4]}>
          <ImgBlock2 src={props.image} pb={[2]} />
          <H1 fontFamily={[0]} color="navy10" fontSize={[1]}>{props.title}</H1>
          <Text color="navy20" fontSize={[1]}>{props.body}</Text>
        </Wrap>
      </BlockContainer>
    </ThemeProvider>
  )
};

export const BlockMenu = (props) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };
  const navigateAbout = () => {
    navigate('/feed');
  };
  const navigateSnap = () => {
    navigate('/snap');
  };
  const navigateShop = () => {
    navigate('/Shop');
  };

  return (
    <ThemeProvider theme={base}>
      <Wrap bottom={[0]} justifyContent="center" zIndex="999" width={['100%', '80%', '60%', '50%']} position="fixed">
        <Wrap
          p={['4', '2', '1', '0']}
          width='100%'
        >
          <Button fontFamily={[0]} fontSize={[0]} padding={[3]} variant="menuWht" flexGrow="6" textAlign="left" onClick={navigateHome}> Noname </Button>
          <Button fontFamily={[0]} fontSize={[0]} padding={[3]} variant="menuWht" flexGrow="1" onClick={navigateSnap}> Snap </Button>
          <Button fontFamily={[0]} fontSize={[0]} padding={[3]} variant="menuWht" flexGrow="1" onClick={navigateAbout}> About </Button>
          <Button fontFamily={[0]} fontSize={[0]} padding={[3]} variant="menuWht" flexGrow="1" onClick={navigateShop}> Shop </Button>

        </Wrap>
      </Wrap>
    </ThemeProvider>
  )
};



export const BlockThumb = (props) => {
  return (
    <ThemeProvider theme={base}>
      <Thumbnail width={[1, 1, 1 / 2, 1 / 3]} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="start" to={props.to}>
        <ImgBlock2 src={props.img} to={props.linkto} side={props.side} />
        <H1 fontFamily={[0]} fontSize={[2]} p={[2]} >{props.title}</H1>
      </Thumbnail>
    </ThemeProvider>
  )
}

export const BlockThumbFont = ({ fontFamily, title, to }) => {
  return (
    <ThemeProvider theme={base}>
      <Thumbnail width={[1, 1, 1, 1]} display="flex" flexDirection="column" flexWrap="wrap" bg="#d0d0c6" height={['50vh']} alignItems="center" justifyContent="center" to={to}>
        <Wrap fontFamily={fontFamily} fontSize={[3]} p={[2]} >{title}</Wrap>
      </Thumbnail>
    </ThemeProvider>
  )
}

export const BlockType = (props) => {
  return (
    <ThemeProvider theme={base}>
      <Wrap pl={[3]} flexDirection={['column', 'column', 'column', 'column']} flexWrap="wrap" justifyContent="center" width={[3 / 4, 2 / 3, 1 / 2, 1 / 2]}>
        <H1 fontFamily={[0]} fontSize={[1, 0, 0, 0]} >{props.title}</H1>
        <Text fontFamily={[0]} color={'blk40'} fontSize={[1, 0, 0, 0]}>{props.body}</Text>
      </Wrap>
    </ThemeProvider>
  )
}



export const BlockHeader = ({ title, description, buttonText, handleBuyClick, zIndex }) => {
  return (
    <ThemeProvider theme={base}>
      <Wrap width={["100%", "100%", "100%", "100%"]} position='fixed' top='0' flexDirection={['row']} zIndex='999' height={["64px", "64px", "64px", "64px"]}>
        <Wrap flexGrow={["6", "6", "6", "6"]} p="2" flexDirection='column' justifyContent="center">
          <H1 fontFamily={[0]} fontSize={[0]} fontWeight='600'>{title}</H1>
          <H1 fontFamily={[0]} fontSize={[0]} fontWeight='400'>{description}</H1>
        </Wrap>
        <Wrap p="2">
          <Button borderRadius={2} fontFamily={[0]} fontSize={[0]} p="3" flexShrink="1" fontWeight='600' variant="primary" fle onClick={handleBuyClick} >{buttonText}</Button>
        </Wrap>
      </Wrap>
    </ThemeProvider>
  )
}

export const BlockList = ({ title, description }) => {
  return (
    <ThemeProvider theme={base}>
      <Wrap flexGrow='4' p={[2]} flexDirection='row' justifyContent="left">
        <Text fontFamily={[0]} color={['blk40']} variant='' fontSize={[0]}>{title}</Text>
      </Wrap>
      <Wrap flexGrow='4' p={[2]} flexDirection='row' justifyContent="right">
        <Text fontFamily={[0]} color={['blk40']} variant='' fontSize={[0]}>{description}</Text>
      </Wrap>
    </ThemeProvider>
  )
}

