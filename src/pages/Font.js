import React from "react";
import { base } from '../theme';
import { Wrap } from "../component/Core";
import styled, { ThemeProvider } from "styled-components";
import { ContainerBase } from "../component/Core";



function Font() {
  return (
    <ThemeProvider theme={base}>
      <ContainerBase flexDirection={['column', 'row', 'row', 'row']} flexWrap="wrap" justifyContent="center">
        <Wrap font={[2]} bg="black" height={['50vh']} width={['100%']}>AIR PRO</Wrap>
        <Wrap font={[1]} bg="blue" height={['50vh']} width={['100%']}>PIX</Wrap>
      </ContainerBase>
    </ThemeProvider>
  );
}

export default Font;
