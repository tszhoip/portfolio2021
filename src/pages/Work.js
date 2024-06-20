import React from 'react';
import { BlockThumb } from '../component/Block';
import logo from '../Assets/llogo.jpg';
import nike from '../Assets/LNike.jpg';
import joy from '../Assets/ljoy.jpg';
import inno from '../Assets/linno.jpg';
import tree from '../Assets/ltree.jpg';
import CanooB from '../Assets/CanooB/LCanooB.jpg';
import CanooW from '../Assets/CanooW/LCanooW.jpg';
import CanooP from '../Assets/CanooP/LCanooP.jpg';
import { Container } from '../component/Core';


function Home() {

  return (
      <Container display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
        <BlockThumb img={CanooB} to="/CanooB" title="Canoo Branding" />
        <BlockThumb img={CanooW} to="/CanooW" title="Canoo Web" />
        <BlockThumb img={CanooP} to="/CanooP" title="Canoo Processs" />
        <BlockThumb img={joy} to="/joy" title="Joy&peace 2021 / Monogram / Product" />
        <BlockThumb img={inno} to="/inno" title="Innocell 2022 / App" />
        <BlockThumb img={tree} to="/treedom" title="Treedom 2021 / App" />
        <BlockThumb img={nike} to="/nike" title="nike 2018 / Environmental / art direction" />
        <BlockThumb img={logo} to="/logo" title="Logo 2011 ~ 2022" />
      </Container>
  );
}

export default Home;
