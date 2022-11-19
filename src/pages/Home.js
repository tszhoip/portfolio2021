import React from 'react';
import styled from 'styled-components';
import { BlockThumbHm, BlockTwoLn100 } from '../component/Block';

import logo from '../assets/llogo.jpg';
import nike from '../assets/lnike.jpg';
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
        grid-template-columns: repeat(2, 50%);
}
@media only screen and (min-width : 1600px) {
  grid-template-columns: repeat(2, 50%);
}
`

function Home() {

  return (
    <div>
      <Worklist>
        <BlockThumbHm
          img={canoo}
          to="/canoo"
          // gr="1" gc="1 / span 2" 
          title="Canoo 2022 / Web UI UX" />
        <BlockThumbHm img={joy} to="/joy" title="Joy&peace 2021 / Monogram / Product" />
        <BlockThumbHm img={inno} to="/inno" title="Innocell 2022 / App" />
        <BlockThumbHm img={tree} to="/treedom" title="Treedom 2021 / App" />
        <BlockThumbHm img={nike} to="/nike" title="nike 2018 / Environmental / art direction" />
        <BlockThumbHm img={logo} to="/logo" title="Logo 2011 ~ 2022" />
        <BlockTwoLn100 title="We are duo designer couple resides in Los Angeles. Believing design is a process of solving problem. Attitude is essential element of our design. Just like we don’t need an entity to define us, Our work does.
    Whenever we are not working, we love drinking fruity coffee and enjoying southern Asian food."/>
        <BlockTwoLn100 title="我们是一对设计师夫妇，居住在 Los Angeles 。相信设计是解决问题的过程。态度是我们设计的基本要素。就像我们不需要一个实体来定义我们一样，我们的工作就是如此。当我们不工作时，我们喜欢喝果味咖啡和享受南亚美食。" />
      </Worklist>

    </div>
  );
}

export default Home;
