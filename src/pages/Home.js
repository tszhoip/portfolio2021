import React from 'react';
import styled from 'styled-components';
import Thumbnail from '../component/Thumbnail';
import BlockInfo from '../component/BlockInfo';

import figs from '../assets/lfigs.jpg';
import logo from '../assets/lhyundai.jpg';


const Worklist = styled.div`
width: 100%;
display: grid;
grid-gap: 0px;
@media only screen and (min-width : 480px) {
  grid-template-columns: repeat(3, auto);
}
@media only screen and (min-width : 768px) {
  grid-template-columns: repeat(3, auto);
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
    <Worklist>
      <Thumbnail img={logo} gr="1" gc="1 / span 2" to="/figs"/>
      <Thumbnail img={figs}/>
      <Thumbnail img={logo}/>
      <Thumbnail img={figs}/>
      <Thumbnail img={logo}/>
      <Thumbnail img={figs}/>
      <Thumbnail img={logo} />
      <Thumbnail img={figs}/>
<BlockInfo 
text1="NONAME.LA" 
text2="We are duo designer couple resides in Los Angeles. Believing design is a process of solving problem. Attitude is essential element of our design. Just like we don’t need an entity to define us, Our work does.
Whenever we are not working, we love drinking fruity coffee and enjoying southern Asian food. " 
pb="32px"
/>
    </Worklist>
  );
}

export default Work;
