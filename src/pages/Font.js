import React from "react";
import { base } from '../theme';
import { Wrap } from "../component/Core";
import styled, { ThemeProvider } from "styled-components";
import { ContainerBase } from "../component/Core";



function Font() {
  return (
    <ThemeProvider theme={base}>
      <ContainerBase flexDirection={['column', 'row', 'row', 'row']} flexWrap="wrap" justifyContent="center" width={['100vw']}>
        <Wrap fontFamily={[2]} fontSize={[3]} bg="blk10" width="100%" height={['50vh']} alignItems="center" justifyContent="center">AIR PRO</Wrap>
        <Wrap fontFamily={[1]} fontSize={[3]} bg="blue" height={['50vh']} width={['100vw']} alignItems="center" justifyContent="center">PIX</Wrap>
        <Wrap fontFamily={[0]} fontSize={[3]} color="#78806f" bg="#d0d0c6" height={['50vh']} width={['100vw']} alignItems="center"  justifyContent="center">AIR PRO</Wrap>
      </ContainerBase>
    </ThemeProvider>
  );
}

export default Font;
