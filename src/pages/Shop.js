import React from "react";
import { base } from '../theme';
import { ThemeProvider } from "styled-components";
import { ContainerBase, Button, Wrap } from "../component/Core";
import { BlockThumbFont } from "../component/Block"



function Shop() {

  const handleAir = () => {
    window.location.href = '/f-airpro';
  };

  return (
    <ThemeProvider theme={base}>
      <ContainerBase flexDirection={['column', 'row', 'row', 'row']} flexWrap="wrap" justifyContent="center" width={['100vw']}>
      <Wrap flexGrow='1' flexDirection='column' justifyContent="center">
        <Button fontFamily={[1]} fontSize={[3]} height={['50vh']} variant="primary" width={[1, 1, 1, 1]} onClick={handleAir} >AIR PRO</Button>
        <Button fontFamily={[2]} fontSize={[3]} height={['50vh']} variant="primary" width={[1, 1, 1, 1]} onClick={handleAir} >CALIFORNIA</Button>
        <Button fontFamily={[3]} fontSize={[3]} height={['50vh']} variant="primary" width={[1, 1, 1, 1]} onClick={handleAir} >SN MONO</Button>
        </Wrap>
      </ContainerBase>
    </ThemeProvider>
  );
}

export default Shop;
