import React from 'react';
import { BlockThumb, BlockThumbFull } from '../component/Block';
import logo from '../Assets/logo/Llogo.jpg';
import nike from '../Assets/nike/LNike.jpg';
import joy from '../Assets/Joy/LJoy.jpg';
import inno from '../Assets/inn/LInno.jpg';
import tree from '../Assets/treedom/LTree.jpg';
import CanooB from '../Assets/CanooB/LCanooB.jpg';
import CanooW from '../Assets/CanooW/LCanooW.jpg';
import CanooP from '../Assets/CanooP/LCanooP.jpg';
import { Container } from '../component/Core';


function Home() {
  BlockThumb.defaultProps = {
    width: [1 / 2, 1 / 2, 1 / 2, 1 / 3],
  };
  BlockThumbFull.defaultProps = {
    width: [1 / 2, 1 / 2, 1 / 2, 1 / 2],
  };
  return (
    <Container width={[1]}display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
      <BlockThumb img={CanooB} to="/CanooB" title="Canoo, Brand" />
      <BlockThumb img={CanooW} to="/CanooW" title="Canoo, Web" />
      <BlockThumb img={CanooP} to="/CanooP" title="Canoo, Processs" />
      <BlockThumb img={joy} to="/joy" title="Joy & peace, Product" />
      <BlockThumb img={inno} to="/inno" title="Innocell, App" />
      <BlockThumb img={tree} to="work/treedom" title="Treedom, Brand" />
      <BlockThumb img={nike} to="/nike" title="nike, Art Direction" />
      <BlockThumb img={logo} to="/logo" title="Logos" />
    </Container>
  );
}

export default Home;
