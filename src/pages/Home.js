import React from 'react';
import styled from 'styled-components';
import ThumbnailGrid from '../component/ThumbnailGrid';
import BlockInfo from '../component/BlockInfo';

import figs from '../assets/lfigs.jpg';
import hyundai from '../assets/lhyundai.jpg';
import logo from '../assets/llogo.jpg';
import nike from '../assets/lnike.jpg';
import oduer from '../assets/loduer.jpg';
import joy from '../assets/ljoy.jpg';

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

function Home() {

  return (
    <div>
      <Worklist>
        <ThumbnailGrid img={joy}    to="/joy"        gr="1" gc="1 / span 2" projtitle="Joy&peace 2020 / Monogram / Product" />
        <ThumbnailGrid img={figs}    to="/figs"      projtitle="Figs 2019 / E-commerce" />
        <ThumbnailGrid img={oduer}   to="/oduer"     projtitle="Oduer 2018 / Concept / E-commerce" />
        <ThumbnailGrid img={figs}    to="/nike"      projtitle="Nike 2018 / Store / Art Directions"/>
        <ThumbnailGrid img={hyundai} to="/hyundai"   projtitle="Hyundai 2017 / Concept / E-commerce" />
        <ThumbnailGrid img={logo}    to="/logo"      projtitle="Logo 2011 ~ 2022"/>
        <ThumbnailGrid img={nike}     to="/nike"       projtitle="nike 2018 / Environmental / art direction"  />
      </Worklist>
      <BlockInfo
        text1="我们是一对设计师夫妇，居住在 Los Angeles 。相信设计是解决问题的过程。态度是我们设计的基本要素。就像我们不需要一个实体来定义我们一样，我们的工作就是如此。当我们不工作时，我们喜欢喝果味咖啡和享受南亚美食。"
        text2="We are duo designer couple resides in Los Angeles. Believing design is a process of solving problem. Attitude is essential element of our design. Just like we don’t need an entity to define us, Our work does.
    Whenever we are not working, we love drinking fruity coffee and enjoying southern Asian food. "
        pb="32px"
      />
    </div>
  );
}

export default Home;
