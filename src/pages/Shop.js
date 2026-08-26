import React from "react";
import { base } from '../theme';
import { ThemeProvider } from "styled-components";
import { Container } from "../component/Core";
import { BlockThumbFont } from '../component/Block';
import air from '../Assets/shop/thumbair.jpg';
import mono from '../Assets/shop/thumbmono.jpg';
import porter from '../Assets/shop/thumbporter.jpg';



function Shop() {

  BlockThumbFont.defaultProps = {
    width: [1, 1, 1, 1],
    height: ['auto'],
  };

  return (
    <ThemeProvider theme={base}>
      <Container flexDirection={['row', 'row', 'row', 'row']} flexWrap="wrap" maxWidth="1440px" justifyContent="center" width={['100vw']}>
        <BlockThumbFont img={air} to="https://zbynoname.gumroad.com/l/air-font" title="air" />
        <BlockThumbFont img={mono} to="https://www.google.com/" title="mono" />
        <BlockThumbFont img={porter} to="https://www.google.com/" title="porter" />



      </Container>
    </ThemeProvider>
  );
}

export default Shop;
