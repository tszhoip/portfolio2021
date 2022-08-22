import React from 'react';
import styled from 'styled-components';
import Thumbnail from '../component/Thumbnail';
import BlockInfo from '../component/BlockInfo';
import Type2 from '../component/Type2';

import figs from '../assets/lfigs.jpg';
import hyundai from '../assets/lhyundai.jpg';
import logo from '../assets/llogo.jpg';
import nike from '../assets/lnike.jpg';
import oduer from '../assets/loduer.jpg';


const Col2 = styled.div`
display: grid;
height: 100%;
overflow: hidden;
@media only screen and (min-width : 480px) {
  grid-template-columns: repeat(1, 100%);

}
@media only screen and (min-width : 768px) {
  grid-template-columns: repeat(1, 100%);

}
@media only screen and (min-width : 1000px) {
  grid-template-columns: repeat(2, 50%);
}
@media only screen and (min-width : 1600px) {
  grid-template-columns: repeat(2, 50%);

}
`
const Worklist = styled.div`
width: 100%;
display: grid;
grid-gap: 0px;
overflow: hidden;
@media only screen and (min-width : 480px) {
  grid-template-columns: repeat(2, 50%);
}
@media only screen and (min-width : 768px) {
  grid-template-columns: repeat(2, 50%);
}
@media only screen and (min-width : 1000px) {
        grid-template-columns: repeat(3, auto);
}
@media only screen and (min-width : 1600px) {
  grid-template-columns: repeat(3, auto);
}
`


function Home() {

  return (
    <div>
      <Worklist>
        <Thumbnail img={nike} gr="1" gc="1 / span 2" projtitle="nike 2018 / Environmental / art direction" to="/nike" />
        <Thumbnail img={figs} to="/figs" projtitle="figs 2019 / E-commerce" to="/figs" />
        <Thumbnail img={oduer} to="/oduer" />
        <Thumbnail img={figs} to="/nike" />
        <Thumbnail img={hyundai} to="/hyundai" />
        <Thumbnail img={figs} />
        <Thumbnail img={logo} to="logo" />
        <Thumbnail img={figs} />
      </Worklist>
      <Col2>
        <div lang="zh" >
          <Type2
            b="0.5px solid #f5f5f5"
            text="我们是一对设计师夫妇，居住在洛杉矶。相信设计是解决问题的过程。态度是我们设计的基本要素。就像我们不需要一个实体来定义我们一样，我们的工作就是如此。当我们不工作时，我们喜欢喝果味咖啡和享受南亚美食。"
            pb="32px"
          />
        </div>
        <div lang="en">
          <Type2
            b="0.5px solid #f5f5f5"
            text="We are duo designer couple resides in Los Angeles. Believing design is a process of solving problem. Attitude is essential element of our design. Just like we don’t need an entity to define us, Our work does.
            Whenever we are not working, we love drinking fruity coffee and enjoying southern Asian food."
            pb="32px"
          />
        </div>
      </Col2>
    </div>
  );
}

export default Home;
