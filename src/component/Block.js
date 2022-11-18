import styled, {  ThemeProvider } from "styled-components";
import { H1, Text, TextWrap, BlockContainer } from "./Typography";
import { PButton, Button } from "./Buttons";
import React from 'react';
import { base } from '../theme';
import { Link, useNavigate} from 'react-router-dom';


export const BlockTwoLn50 = (props) => {
  return (
    <ThemeProvider theme={base}>
      <BlockContainer width={[1, 1, 1 / 2, 1 / 2]}>
      <TextWrap padding={[2]}>
        <H1 color="primary" fontSize={[1]}>{props.title}</H1>
        <Text color="dark">{props.body}</Text>
      </TextWrap>
      </BlockContainer>
    </ThemeProvider>
  )
};

export const BlockTwoLn100 = (props) => {
  return (
    <ThemeProvider theme={base}>
      <BlockContainer width={[1, 1, 1, 1]}>
      <TextWrap padding={[2]}>
        <H1 color="primary">{props.title}</H1>
        <Text color="dark">{props.body}</Text>
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
    <Button color="dark" padding={[2]} width={[1, 1, 1 / 2, 1 / 2]} onClick={navigateHome}>
      Noname
    </Button>
    <Button color="dark" padding={[2]} width={[1, 1, 1 / 2, 1 / 2]} onClick={navigateShop}>
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
    <Button color="dark" padding={[2]} width={[1, 1, 1 / 2, 1 / 2]} onClick={navigateFeed}>
      Noname
    </Button>
    <Button color="dark" padding={[2]} width={[1, 1, 1 / 2, 1 / 2]} onClick={navigateSnap}>
      Shop
    </Button>
  </ThemeProvider>
  )
};


const Banner = styled(Link)`
    background-color: ${props => props.bgc};
    grid-row: ${props => props.gr};
    grid-column: ${props => props.gc};
    border: 0.5px solid #f5f5f5;
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
      background-color: #f5f5f5;
      filter: grayscale(1.05);
     }
     &:active{

     }
`
const ImgBlock2 = styled.img`
    flex-grow: 1;
    width: 100%;
    height: auto;
    object-fit: cover;
`

export const ThumbnailProj = (props) => {
  return (
    <Banner to={props.to} gr={props.gr} gc={props.gc}>
      <BlockContainer width={[1, 1, 1, 1]}>
      <TextWrap padding={[2]}>
        <ImgBlock2 src={props.img} to={props.linkto} side={props.side}/>
        <H1 color="primary">{props.title}asasa</H1>
        <Text color="dark">{props.body}asasas</Text>
      </TextWrap>
      </BlockContainer>
          </Banner>
  )
}

