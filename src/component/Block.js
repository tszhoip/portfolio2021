import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import { color, space, layout, flexbox, position, width, zIndex } from "styled-system";

import { base } from '../theme';
import { Thumbnail, Wrap, H1, Text, Button, Container } from './Core';

export const Block = styled.div`
background-color: ${(props) => props.theme.colors.gre10};
display: flex;
flex-direction: row;
width: 100vw;
flex-wrap: wrap;
`

export const BlockContainer = styled.div`
background-color: ${(props) => props.theme.colors.gre10};
box-shadow: 0px 0px 1px ${(props) => props.theme.colors.gre20} inset;
${color};
${space};
${layout};
`

export const BlockContainer5050 = styled.div`
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
const BImage = styled.img`
    flex-grow: 1;
    width: 100%;
    height: auto;
    object-fit: cover;
    ${space};
    ${layout};
`

const ImgBlock2 = styled.img`
    flex-grow: 1;
    width: 100%;
    height: auto;
    object-fit: cover;
    ${space};
    ${layout};
`
export const BlockImg = (props) => {
  return (
    <ThemeProvider theme={base}>
      <BImage src={props.image} pb={[0]} />
    </ThemeProvider>
  )
};

export const BlockTwoLn50 = (props) => {
  return (
    <ThemeProvider theme={base}>
      <BlockContainer width={[1, 1, 1 / 2, 1 / 2]} >
        <Wrap padding={[3]} pb={[4]} display={"block"}>
          <Text fontFamily={[0]} color="grey" fontSize={[1]}>{props.title}</Text>
          <Text fontFamily={[0]} color="navy20" fontSize={[1]}>{props.body}</Text>
        </Wrap>
      </BlockContainer>
    </ThemeProvider>
  )
};

export const BlockTwoLn100 = (props) => {
  return (
    <ThemeProvider theme={base}>
      <BlockContainer width={[1, 1, 1, 1]}>
        <Wrap padding={[0]} pb={[0]}>
          <ImgBlock2 src={props.image} pb={[0]} />
          <H1 fontFamily={[0]} color="navy10" fontSize={[1]}>{props.title}</H1>
          <Text color="black" fontSize={[0]}>{props.body}</Text>
        </Wrap>
      </BlockContainer>
    </ThemeProvider>
  )
};

export const Blockitem = (props) => {
  return (
    <ThemeProvider theme={base}>
        <Wrap padding={[3]} pb={[3]} flexDirection="column">
          <ImgBlock2 src={props.image} pb={[1]} />
          <Text pb="1" fontFamily={[0]} color="lightgrey" fontSize={[0,0,1,2]}>{props.title}</Text>
          <Text pb=""  pr={[0,3,4,5]} fontFamily={[0]} color="black" fontSize={[0,0,1,2]}>{props.body}</Text>
        </Wrap>
    </ThemeProvider>
  )
};

export const BlockMenu = (props) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };
  const navigateAbout = () => {
    navigate('/about');
  };
  const navigateSnap = () => {
    navigate('/snap');
  };
  const navigateShop = () => {
    navigate('/Shop');
  };

  return (
    <ThemeProvider theme={base}>
      <Wrap width="100%">
        <Button fontFamily={[0]} width="25%" fontSize={[1]} padding={[3]} variant="default" flexGrow="1" textAlign="left" onClick={navigateHome}> Noname </Button>
        <Button fontFamily={[0]} width="25%" fontSize={[1]} padding={[3]} variant="default" flexGrow="1" textAlign="left" onClick={navigateSnap}> Snap </Button>
        <Button fontFamily={[0]} width="25%" fontSize={[1]} padding={[3]} variant="default" flexGrow="1" textAlign="left" onClick={navigateAbout}> About </Button>
        <Button fontFamily={[0]} width="25%" fontSize={[1]} padding={[3]} variant="default" flexGrow="1" textAlign="left" onClick={navigateShop}> Shop </Button>
      </Wrap>
    </ThemeProvider>
  )
};





export const BlockFooter = (props) => {
  const navigate = useNavigate();

  const navigateLicense = () => {
    navigate('/License');
  };
  const navigatePrivacy = () => {
    navigate('/Privacy');
  };


  return (
    <ThemeProvider theme={base}>
      <Wrap className="block-footer" justifyContent="start" flexDirection={["row"]} flexWrap="wrap" zIndex="1" width={[1]} pt="3" pb="4" bg="#000" color="grey">

          <Button width={[1/2,1/2,1/4,1/4]} padding={[3]} fontFamily={[0]} fontSize={[1]}  variant="footer"   textAlign="left" onClick={navigatePrivacy}> Privacy </Button>
          <Button width={[1/2,1/2,1/4,1/4]} padding={[3]}  fontFamily={[0]} fontSize={[1]}  variant="footer"  textAlign="left" onClick={navigateLicense}> License </Button>
          <Button width={[1/2,1/2,1/4,1/4]} padding={[3]}  fontFamily={[0]} fontSize={[1]}  variant="footer"  textAlign="left" onClick={navigateLicense}> Shipping </Button>
          <Button width={[1/2,1/2,1/4,1/4]} padding={[3]} fontFamily={[0]} fontSize={[1]}  variant="footer"  textAlign="left" onClick={navigatePrivacy}> Instagram </Button>
          <Button width={[1/2,1/2,1/4,1/4]} padding={[3]} fontFamily={[0]} fontSize={[1]} variant="footer"  textAlign="left" onClick={navigateLicense}> Savee.it </Button>
          <Button width={[1/2,1/2,1/4,1/4]} padding={[3]} fontFamily={[0]} fontSize={[1]} variant="footer"  textAlign="left" onClick={navigateLicense}> Red </Button>
          <Button width={[1/2,1/2,1/4,1/4]} padding={[3]} fontFamily={[0]} fontSize={[1]} variant="footerDisable" textAlign="left" > 626 390 2555 </Button>
          <Button width={[1/2,1/2,1/4,1/4]} padding={[3]} fontFamily={[0]} fontSize={[1]} variant="footerDisable" textAlign="left" > info@noname.com </Button>
      </Wrap>
    </ThemeProvider>
  )
};


export const BlockThumb = (props) => {
  return (
    <ThemeProvider theme={base}>
      <Thumbnail width={[1/2, 1/2, 1/3, 1/3]} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="start" to={props.to}>
        <ImgBlock2 src={props.img} to={props.linkto} side={props.side} />
        <Text fontFamily={[0]} fontSize={[1]} p={[3]}>{props.title}</Text>
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
        <Wrap flexGrow={["6", "6", "6", "6"]} p="3" flexDirection='column' justifyContent="center">
          <H1 fontFamily={[0]} fontSize={[1]} fontWeight='600'>{title}</H1>
          <H1 fontFamily={[0]} fontSize={[1]} fontWeight='400'>{description}</H1>
        </Wrap>
        <Wrap p="2">
          <Button fontFamily={[0]} fontSize={[1]} p="3" flexShrink="1" fontWeight='600' variant="primaryR" fle onClick={handleBuyClick} >{buttonText}</Button>
        </Wrap>
      </Wrap>
    </ThemeProvider>
  )
}

export const BlockList = ({ title, description }) => {
  return (
    <ThemeProvider theme={base}>
      <Wrap width={["100%"]} borderBottom="1px grey solid">
      <Wrap flexGrow='4' width={["50%"]} pt={[2]} pb={[2]} flexDirection='row' justifyContent="left">
        <Text fontFamily={[0]} color={['blk70']} variant='' fontSize={[1]}>{title}</Text>
      </Wrap>
      <Wrap flexGrow='4' width={["50%"]} pt={[2]} pb={[2]} flexDirection='row' justifyContent="left">
        <Text fontFamily={[0]} color={['blk50']} variant='' fontSize={[1]}>{description}</Text>
      </Wrap>
      </Wrap>
    </ThemeProvider>
  )
}
