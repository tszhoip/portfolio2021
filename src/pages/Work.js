import React from 'react';
import { BlockThumb, BlockThumbFull } from '../component/Block';
import logo from '../Assets/logo/Llogo.jpg';
import nike from '../Assets/nike/LNike.jpg';
import joy from '../Assets/Joy/LJoy.jpg';
import inno from '../Assets/inn/LInno.jpg';
import shop from '../Assets/shopify/LShop.jpg';
import CanooB from '../Assets/CanooB/LCanooB.jpg';
import CanooW from '../Assets/CanooW/LCanooW.jpg';
import CanooP from '../Assets/CanooP/LCanooP.jpg';
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
