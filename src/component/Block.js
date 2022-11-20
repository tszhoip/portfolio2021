import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import { color, typography, space, layout } from "styled-system";

import { base } from '../theme';
import { H1, Text } from "./Typography";
import { PButton, Button } from "./Buttons";

export const Wrap = styled.div`
${color};
${space};
${typography};
`
export const BlockContainer = styled.div`
background-color: ${(props) => props.theme.colors.gre10};
box-shadow: 0px 0px 16px ${(props) => props.theme.colors.gre20} inset;
${color};
${space};
${layout};
`


export const Banner = styled(Link)`
    background-color: ${(props) => props.theme.colors.gre10};
    grid-row: ${props => props.gr};
    grid-column: ${props => props.gc};
    box-shadow: 0px 0px 16px ${(props) => props.theme.colors.gre20} inset;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media only screen and (min-width : 480px) {
    }
    @media only screen and (min-width : 768px) {
    }
    @media only screen and (min-width : 1000px) {
    }
    @media only screen and (min-width : 1600px) {
    }
    &:hover{
      box-shadow: 0px 0px 32px ${(props) => props.theme.colors.gre20} inset;
    }
     &:active{
      background-color: ${(props) => props.theme.colors.gre20};
     }
`

const ImgBlock2 = styled.img`
    flex-grow: 1;
    width: 100%;
    height: auto;
    object-fit: cover;
`


export const BlockTwoLn50 = (props) => {
  return (
    <ThemeProvider theme={base}>
      <BlockContainer width={[1, 1, 1 / 2, 1 / 2]}>
        <Wrap padding={[3]} pb={[4]}>
          <H1 color="navy10" fontSize={[1]}>{props.title}</H1>
          <Text color="navy20">{props.body}</Text>
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
          <H1 color="navy10" fontSize={props.fontSize}>{props.title}</H1>
          <Text color="navy20">{props.body}</Text>
        </Wrap>
      </BlockContainer>
    </ThemeProvider>
  )
};

export const BlockHeader = (props) => {
  const navigate = useNavigate();
  const navigateShop = () => {
    // 👇️ navigate to /contacts
    navigate('/shop');
  };
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };
  return (
    <ThemeProvider theme={base}>
      <Button padding={[3]} width={[1, 1, 1 / 2, 1 / 2]} onClick={navigateHome}>
        Noname
      </Button>
      <Button padding={[3]} width={[1, 1, 1 / 2, 1 / 2]} onClick={navigateShop}>
        Shop
      </Button>
    </ThemeProvider>
  )
};

export const BlockFooter = (props) => {
  const navigate = useNavigate();
  const navigateFeed = () => {
    // 👇️ navigate to /contacts
    navigate('/feed');
  };
  const navigateSnap = () => {
    // 👇️ navigate to /
    navigate('/snap');
  };
  return (
    <ThemeProvider theme={base}>
      <Button padding={[3]} width={[1, 1, 1 / 2, 1 / 2]} onClick={navigateFeed}>
        Feed
      </Button>
      <Button padding={[3]} width={[1, 1, 1 / 2, 1 / 2]} onClick={navigateSnap}>
        Snap
      </Button>
    </ThemeProvider>
  )
};

export const BlockThumbHm = (props) => {
  return (
    <ThemeProvider theme={base}>
      <Banner to={props.to}>
          <Wrap padding={[3]} pb={[4]}>
            <ImgBlock2 src={props.img} to={props.linkto} side={props.side} />
            <H1>{props.title}</H1>
            <Text>{props.body}</Text>
          </Wrap>
      </Banner>
    </ThemeProvider>
  )
}

