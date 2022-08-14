import React from 'react';
import Cta1 from '../component/Cta1';
import styled from 'styled-components';


const Worklist = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

function Work() {

  return (
    <Worklist>
      <Cta1 grow="1" text="Canoo" linkto="/work/canoo" />
      <Cta1 grow="1" text="logo" linkto="/work/logo" />
      <Cta1 grow="1" text="Figs Inc." linkto="/work/figs" />
      <Cta1 grow="1" text="Hyundai" linkto="/work/Hyundai" />
      <Cta1 grow="1" text="Nike" linkto="/work/Nike" />
      <Cta1 grow="1" text="Odeur" linkto="/work/Odeur" />
    </Worklist>
  );
}

export default Work;
