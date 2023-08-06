import React from "react";
import { base } from '../theme';
import { ThemeProvider } from "styled-components";
import { ContainerBase, Button, Wrap } from "../component/Core";
import { BlockThumbFont } from "../component/Block"



function Shop() {

  const handleAir = () => {
    window.location.href = '/f-airpro';
  };
  const handleCA = () => {
    window.location.href = '/f-California';
  };
  const handlePix = () => {
    window.location.href = '/f-airpro';
  };

  return (
    <ThemeProvider theme={base}>
      <ContainerBase flexDirection={['column', 'row', 'row', 'row']} flexWrap="wrap" justifyContent="center" width={['100vw']}>
      <Wrap flexGrow='1' flexDirection='column' justifyContent="center">
        <Button fontFamily={[1]} fontSize={[4,4,5,5]} height={['50vh']} variant="primary" width={['100vw', '100vw', '100%', '100%']} onClick={handleAir} >AIR PRO</Button>
        <Button fontFamily={[2]} fontSize={[4,4,5,5]} height={['50vh']} variant="primary" width={['100vw', '100vw', '100%', '100%']} onClick={handleCA} >CALI</Button>
        <Button fontFamily={[3]} fontSize={[4,4,5,5]} height={['50vh']} variant="primary" width={['100vw', '100vw', '100%', '100%']} onClick={handleAir} >SN MONO</Button>
        <Button fontFamily={[1]} fontSize={[4]} height={['50vh']} variant="primary" width={['100vw', '100vw', '100%', '100%']} onClick={handleAir} >AIR PRO</Button>
        <Button fontFamily={[2]} fontSize={[4]} height={['50vh']} variant="primary" width={['100vw', '100vw', '100%', '100%']} onClick={handleCA} >CALI</Button>
        <Button fontFamily={[3]} fontSize={[4]} height={['50vh']} variant="primary" width={['100vw', '100vw', '100%', '100%']} onClick={handleAir} >SN MONO</Button>


        </Wrap>
      </ContainerBase>
    </ThemeProvider>
  );
}

export default Shop;
