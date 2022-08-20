import React from 'react';
import styled from 'styled-components';
import Thumbnail from '../component/Thumbnail';

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
      <Thumbnail img={figs} to="/odeur"/>
      <Thumbnail img={logo} to="/hyundai"/>
      <Thumbnail img={figs} to="/figs"/>
      <Thumbnail img={logo} to="/figs"/>
      <Thumbnail img={figs} to="/figs"/>
      <Thumbnail img={logo} to="/figs"/>
      <Thumbnail img={figs} to="/figs"/>
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
