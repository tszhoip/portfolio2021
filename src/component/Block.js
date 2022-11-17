import { ThemeProvider } from "styled-components";
import { H1, Text, TextWrap, BlockContainer } from "./Typography";
import { PButton, Button } from "./Buttons";
import React from 'react';
import { base } from '../theme';
import { useNavigate} from 'react-router-dom';

export const BlockTwoLn50 = (props) => {
  return (
    <ThemeProvider theme={base}>
      <BlockContainer width={[1, 1, 1 / 2, 1 / 2]}>
      <TextWrap padding={[2]}>
        <H1 color="primary">{props.title}</H1>
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
