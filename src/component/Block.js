import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import { color, space, layout, flexbox, position, width } from "styled-system";

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
  const navigateShop = () => {
    navigate('/shop');
  };
  const navigateHome = () => {
    navigate('/');
  };
  const navigateAbout = () => {
    navigate('/feed');
  };
  const navigateSnap = () => {
    navigate('/snap');
  };
  const navigateFont = () => {
    navigate('/font');
  };

  return (
    <ThemeProvider theme={base}>
      <Wrap
        zIndex="999"
        width={[1, 1, 1, 1]}
        position="fixed"
        display="flex"
        justifyContent="center"
        bottom={2}>
        <CenterWrap width={[4 / 5, 4 / 5, 1 / 2, 1 / 4]} display="flex">
          <Button fontFamily={[0]} padding={[3]} variant="menuWht" flexGrow="6" textAlign="left" onClick={navigateHome}> Noname </Button>
          <Button fontFamily={[0]} padding={[3]} variant="menuWht" flexGrow="1" onClick={navigateShop}> Shop </Button>
          <Button fontFamily={[0]} padding={[3]} variant="menuWht" flexGrow="1" onClick={navigateSnap}> Snap </Button>
          <Button fontFamily={[0]} padding={[3]} variant="menuWht" flexGrow="1" onClick={navigateAbout}> About </Button>
          <Button fontFamily={[0]} padding={[3]} variant="menuWht" flexGrow="1" onClick={navigateFont}> Font </Button>
        </CenterWrap>
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

export const BlockThumbFont = (props) => {
  return (
    <ThemeProvider theme={base}>
      <Thumbnail width={[1, 1, 1, 1]} display="flex" flexDirection="column" flexWrap="wrap" bg="#d0d0c6" height={['50vh']} alignItems="center" justifyContent="center" to={props.to}>
        <Wrap fontFamily={props.fontFamily} fontSize={[3]} p={[2]} >{props.title}</Wrap>
        <H1 fontFamily={[0]} fontSize={[1]} p={[2]} >{props.cta}</H1>
      </Thumbnail>
    </ThemeProvider>
  )
}

export const BlockType2s = (props) => {
  return (
    <ThemeProvider theme={base}>
      <Wrap flexDirection={['column', 'column', 'column', 'column']} justifyContent="start" width={['100%', '100%', '100%', "50%"]} flex={['1 1 auto']}>
        <Wrap p={[4]} bg={['#CDCDCD']} flexDirection={['column', 'column', 'column', 'column']} justifyContent="start" flex={['1 1 auto']}>
          <Text fontFamily={[0]} fontSize={[0, 0, 0, 0]} >
            {props.meta}
          </Text>
          <H1 fontFamily={[1]} fontSize={[2, 2, 2, 2]} >
            {props.body}
          </H1>
        </Wrap>
      </Wrap>
    </ThemeProvider>
  )
}

export const BlockType2w = (props) => {
  return (
    <ThemeProvider theme={base}>
      <Wrap pl={[2]} flexDirection={['column', 'column', 'column', 'column']} width={[1 / 4, 1 / 3, 1 / 2, 1 / 2]} justifyContent="center">
        <H1 fontFamily={[0]} fontSize={[1, 0, 0, 0]} >{props.title}</H1>
        <Text fontFamily={[0]} color={'blk40'} fontSize={[1, 0, 0, 0]}>{props.body}</Text>
        </Wrap>
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



