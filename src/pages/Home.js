import React from 'react';
import styled from 'styled-components';
import { BlockThumbHm, BlockTwoLn100, BlockTwoLn50 } from '../component/Block';
import { ContainerFlex } from '../component/Container';

import logo from '../Assets/llogo.jpg';
import nike from '../Assets/lnike.jpg';
import joy from '../Assets/ljoy.jpg';
import inno from '../Assets/linno.jpg';
import tree from '../Assets/ltree.jpg';
import canoo from '../Assets/lcanoo.jpg';


function Home() {

  return (
    <div>
      <ContainerFlex>
        <BlockThumbHm
          img={canoo}
          to="/canoo"
          title="Canoo 2022 / Web UI UX" />
        <BlockThumbHm img={joy} to="/joy" title="Joy&peace 2021 / Monogram / Product" />
        <BlockThumbHm img={inno} to="/inno" title="Innocell 2022 / App" />
        <BlockThumbHm img={tree} to="/treedom" title="Treedom 2021 / App" />
        <BlockThumbHm img={nike} to="/nike" title="nike 2018 / Environmental / art direction" />
        <BlockThumbHm img={logo} to="/logo" title="Logo 2011 ~ 2022" />
        <BlockTwoLn50 title="We are duo designer couple resides in Los Angeles. Believing design is a process of solving problem. Attitude is essential element of our design. Just like we don’t need an entity to define us, Our work does.
    Whenever we are not working, we love drinking fruity coffee and enjoying southern Asian food."/>
        <BlockTwoLn50 title="我们是一对设计师夫妇，居住在 Los Angeles 。相信设计是解决问题的过程。态度是我们设计的基本要素。就像我们不需要一个实体来定义我们一样，我们的工作就是如此。当我们不工作时，我们喜欢喝果味咖啡和享受南亚美食。" />
      </ContainerFlex>

    </div>
  );
}

export default Home;
