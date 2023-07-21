import React from "react";
import { base } from '../theme';
import { ThemeProvider } from "styled-components";
import { ContainerBase } from "../component/Core";
import { BlockThumbFont } from "../component/Block"



function Font() {
  return (
    <ThemeProvider theme={base}>
      <ContainerBase flexDirection={['column', 'row', 'row', 'row']} flexWrap="wrap" justifyContent="center" width={['100vw']}>
        <BlockThumbFont fontFamily={[1]} title="AIR PRO" cta="" to="/f-airpro"></BlockThumbFont>
        <BlockThumbFont fontFamily={[2]} title="HONG" cta=""></BlockThumbFont>
        <BlockThumbFont fontFamily={[3]} title="PIX" cta=""></BlockThumbFont>
      </ContainerBase>
    </ThemeProvider>
  );
}

export default Font;
