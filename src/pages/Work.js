import React from 'react';
import { BlockThumb, BlockTwoLn50 } from '../component/Block';
import logo from '../Assets/llogo.jpg';
import nike from '../Assets/LNike.jpg';
import joy from '../Assets/ljoy.jpg';
import inno from '../Assets/linno.jpg';
import tree from '../Assets/ltree.jpg';
import canoo from '../Assets/Lcanoo.jpg';
import { ContainerBase } from '../component/Core';


function Home() {

  return (
    <div>
      <ContainerBase display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
        <BlockThumb img={canoo} to="/canoo" title="Canoo 2022 / Web UI UX" />
        <BlockThumb img={joy} to="/joy" title="Joy&peace 2021 / Monogram / Product" />
        <BlockThumb img={inno} to="/inno" title="Innocell 2022 / App" />
        <BlockThumb img={tree} to="/treedom" title="Treedom 2021 / App" />
        <BlockThumb img={nike} to="/nike" title="nike 2018 / Environmental / art direction" />
        <BlockThumb img={logo} to="/logo" title="Logo 2011 ~ 2022" />
        <BlockTwoLn50 title="We are a duo designer couple resides in Los Angeles. We have taste."/>
        <BlockTwoLn50 title="我们是一对设计师夫妇，居住在 Los Angeles 。相信设计是解决问题的过程。态度是我们设计的基本要素。就像我们不需要一个实体来定义我们一样，我们的工作就是如此。当我们不工作时，我们喜欢喝果味咖啡和享受南亚美食。" />
      </ContainerBase>

    </div>
  );
}

export default Home;
