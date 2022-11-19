import styled, { ThemeProvider } from "styled-components";
import { H1, Text, TextWrap, BlockContainer } from "./Typography";
import { PButton, Button } from "./Buttons";
import React from 'react';
import { base } from '../theme';
import { Link, useNavigate } from 'react-router-dom';


export const BlockTwoLn50 = (props) => {
  return (
    <ThemeProvider theme={base}>
      <BlockContainer width={[1, 1, 1 / 2, 1 / 2]}>
        <TextWrap padding={[3]}>
          <H1 color="navy10" fontSize={[1]}>{props.title}</H1>
          <Text color="navy20">{props.body}</Text>
        </TextWrap>
      </BlockContainer>
    </ThemeProvider>
  )
};

export const BlockTwoLn100 = (props) => {
  return (
    <ThemeProvider theme={base}>
      <BlockContainer width={[1, 1, 1, 1]}>
        <TextWrap padding={[3]}>
          <H1 color="navy10">{props.title}</H1>
          <Text color="navy20">{props.body}</Text>
        </TextWrap>
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


const Banner = styled(Link)`
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

export const BlockThumbHm = (props) => {
  return (
    <ThemeProvider theme={base}>
      <Banner to={props.to}>
          <TextWrap padding={[3]}>
            <ImgBlock2 src={props.img} to={props.linkto} side={props.side} />
            <H1>{props.title}</H1>
            <Text>{props.body}</Text>
          </TextWrap>
      </Banner>
    </ThemeProvider>
  )
}

