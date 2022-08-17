import React from 'react';
import Cta1 from '../component/Cta1';
import styled from 'styled-components';
import Banner from '../component/Banner';
import Thumbnail from '../component/Thumbnail';

import figs from '../assets/Lfigs.jpg';
import nike from '../assets/Lnike.jpg';
import logo from '../assets/Lhyundai.jpg';


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
      <Thumbnail img={logo} gr="1" gc="1 / span 2"/>
      <Thumbnail img={figs}/>
      <Thumbnail img={logo}/>
      <Thumbnail img={figs}/>
      <Thumbnail img={logo}/>
      <Thumbnail img={figs}/>
      <Thumbnail img={logo}/>
      <Thumbnail img={figs}/>
      {/* <Cta1 grow="1" text="Canoo" linkto="/canoo" />
      <Cta1 grow="1" text="logo" linkto="/logo" />
      <Cta1 grow="1" text="Figs Inc." linkto="/figs" />
      <Cta1 grow="1" text="Hyundai" linkto="/Hyundai" />
      <Cta1 grow="1" text="Nike" linkto="/Nike" />
      <Cta1 grow="1" text="Odeur" linkto="/Odeur" />
      <Banner img={figs} to="/figs" />
      <Banner img={nike} />
      <Banner img={logo} /> */}
    </Worklist>
  );
}

export default Work;
