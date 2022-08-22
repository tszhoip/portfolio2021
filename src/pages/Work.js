import React from 'react';
import styled from 'styled-components';
import Thumbnail from '../component/Thumbnail';
import BlockInfo from '../component/BlockInfo';

import figs from '../assets/lfigs.jpg';
import hyundai from '../assets/lhyundai.jpg';
import logo from '../assets/llogo.jpg';
import nike from '../assets/lnike.jpg';


const Worklist = styled.div`
width: 100%;
display: grid;
grid-gap: 0px;
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


function Work() {

  return (
    <div>
    <Worklist>
      <Thumbnail img={nike} gr="1" gc="1 / span 2" projtitle="nike 2018 / Environmental / art direction" to="/nike"/>
      <Thumbnail img={figs} to="/figs"  projtitle="figs 2019 / E-commerce" to="/nike"/>
      <Thumbnail img={logo} to="/oduer" />
      <Thumbnail img={figs} to="/nike" />
      <Thumbnail img={hyundai} to="/hyundai"/>
      <Thumbnail img={figs}/>
      <Thumbnail img={logo} />
      <Thumbnail img={figs}/>
    </Worklist>
    <BlockInfo 
    text1="NONAME.LA" 
    text2="We are duo designer couple resides in Los Angeles. Believing design is a process of solving problem. Attitude is essential element of our design. Just like we don’t need an entity to define us, Our work does.
    Whenever we are not working, we love drinking fruity coffee and enjoying southern Asian food. " 
    pb="32px"
    b1="0.5px solid #f5f5f5"
    b2="0.5px solid #f5f5f5"
    />
    </div>
  );
}

export default Work;
