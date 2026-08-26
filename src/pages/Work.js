import React from 'react';
import { BlockThumb, BlockThumbFull } from '../component/Block';
import logo from '../assets/logo/lo01.jpg';
import nike from '../assets/nike/5.01.jpg';
import joy from '../assets/Joy/11.01.jpg';
import inno from '../assets/inn/9.01.jpg';
import shop from '../assets/shopify/10.1.jpg';
import CanooB from '../assets/CanooB/1.01.jpg';
import CanooW from '../assets/CanooW/2.01.jpg';
import CanooP from '../assets/CanooP/4.01.jpg';
import { Container } from '../component/Core';


function Work() {
  BlockThumb.defaultProps = {
    width: [1 / 2, 1 / 2, 1 / 2, 1 / 2],
    height: ['320px','400px','480px','560px'],
  };
  BlockThumbFull.defaultProps = {
    width: [1 / 2, 1 / 2, 1 / 2, 1 / 2],
  };
  return (
    <Container width={[1]}display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
      <BlockThumb width={[1,1,1/2,1/2]} img={CanooB} to="/CanooB" title="Canoo, Brand" />
      <BlockThumb img={CanooW} to="/CanooW" title="Canoo, Web" />
      <BlockThumb img={CanooP} to="/CanooP" title="Canoo, Processs" />
      <BlockThumb width={[1,1/2,1/2,1/2]}  img={joy} to="/joy" title="Joy & peace, Product" />
      <BlockThumb img={inno} to="/inno" title="Innocell, App" />
      <BlockThumb img={shop} to="work/shopify" title="shopify, Ecommerce" />
      <BlockThumb img={nike} to="work/nike" title="nike, Art Direction" />
      <BlockThumb img={logo} to="/logo" title="Logos" />
    </Container>
  );
}

export default Work;
