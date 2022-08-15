import React from 'react';
import Cta1 from '../component/Cta1';
import styled from 'styled-components';
import Banner from '../component/Banner'


const Worklist = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

function Work() {

  return (
    <Worklist>
      <Banner />
      <Cta1 grow="1" text="Canoo" linkto="/canoo" />
      <Cta1 grow="1" text="logo" linkto="/logo" />
      <Cta1 grow="1" text="Figs Inc." linkto="/figs" />
      <Cta1 grow="1" text="Hyundai" linkto="/Hyundai" />
      <Cta1 grow="1" text="Nike" linkto="/Nike" />
      <Cta1 grow="1" text="Odeur" linkto="/Odeur" />
    </Worklist>
  );
}

export default Work;
