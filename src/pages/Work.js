import React from 'react';
import styled from 'styled-components';
import { BlockThumbHm, BlockTwoLn100 } from '../component/Block';

import figs from '../assets/lfigs.jpg';
import hyundai from '../assets/lhyundai.jpg';
import logo from '../assets/llogo.jpg';
import nike from '../assets/lnike.jpg';
import oduer from '../assets/loduer.jpg';
import joy from '../assets/ljoy.jpg';
import inno from '../assets/linno.jpg';
import tree from '../assets/ltree.jpg';
import canoo from '../assets/lcanoo.jpg';

const Worklist = styled.div`
width: 100%;
display: grid;
grid-gap: 0px;
overflow: hidden;
@media only screen and (min-width : 280px) {
  grid-template-columns: repeat(2, 50%);
}
@media only screen and (min-width : 768px) {
  grid-template-columns: repeat(2, 50%);
}
@media only screen and (min-width : 1000px) {
        grid-template-columns: repeat(3, 33.3%);
}
@media only screen and (min-width : 1600px) {
  grid-template-columns: repeat(3, 33.3%);
}
`

function Work() {

  return (
    <div>
      <Worklist>
        <BlockThumbHm img={canoo}   to="/canoo"    gr="1" gc="1 / span 2" projtitle="Canoo/Web/App" />
        <BlockThumbHm img={joy}     to="/joy"       projtitle="Joy&peace/Monogram/Product" />
        <BlockThumbHm img={inno}    to="/inno"      projtitle="Innocell/App" />
        <BlockThumbHm img={tree}    to="/treedom"   projtitle="Treedom 2021 / App" />
        <BlockThumbHm img={nike}    to="/nike"      projtitle="nike 2018 / Environmental / art direction"  />
        <BlockThumbHm img={oduer}   to="/oduer"     projtitle="Oduer 2018 / Concept / E-commerce" />
        <BlockThumbHm img={figs}    to="/nike"      projtitle="Nike 2018 / Store / Art Directions"/>
        <BlockThumbHm img={hyundai} to="/hyundai"   projtitle="Hyundai 2017 / Concept / E-commerce" />
        <BlockThumbHm img={logo}    to="/logo"      projtitle="Logo 2011 ~ 2022"/>
        <BlockThumbHm img={nike}    to="/nike"      projtitle="nike 2018 / Environmental / art direction"  />
      </Worklist>
      <BlockTwoLn100 title="We are duo designer couple resides in Los Angeles. Believing design is a process of solving problem. Attitude is essential element of our design. Just like we don’t need an entity to define us, Our work does.
    Whenever we are not working, we love drinking fruity coffee and enjoying southern Asian food."/>
      <BlockTwoLn100 title="我们是一对设计师夫妇，居住在 Los Angeles 。相信设计是解决问题的过程。态度是我们设计的基本要素。就像我们不需要一个实体来定义我们一样，我们的工作就是如此。当我们不工作时，我们喜欢喝果味咖啡和享受南亚美食。"/>
      
    </div>
  );
}

export default Work;
