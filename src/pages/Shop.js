import React from "react";
import { base } from '../theme';
import { ThemeProvider } from "styled-components";
import { Container, Button, Wrap } from "../component/Core";
import { BlockThumb } from '../component/Block';

import air from '../Assets/shop/thumbair.jpg';
import mono from '../Assets/shop/thumbmono.jpg';
import CanooP from '../Assets/CanooP/LCanooP.jpg';



function Shop() {

  // const handleAir = () => {
  //   window.location.href = '/f-airpro';
  // };
  // const handleCA = () => {
  //   window.location.href = 'https://www.google.com/';
  // };
  // const handlePix = () => {
  //   window.location.href = '/f-airpro';
  // };

  return (
    <ThemeProvider theme={base}>
      <Container flexDirection={['row', 'row', 'row', 'row']} flexWrap="wrap" justifyContent="center" width={['100vw']}>
        <BlockThumb img={air} to="https://zbynoname.gumroad.com/l/air-font" title="air" />
        <BlockThumb img={mono} to="https://www.google.com/" title="mono" />



      </Container>
    </ThemeProvider>
  );
}

export default Shop;
