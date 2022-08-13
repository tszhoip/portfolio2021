import React from 'react';
import Cta1 from '../component/Cta1';
import styled from 'styled-components';

function Work() {
  
  const Worklist = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
  `

  return (
    <Worklist>
      <Cta1 grow="1" t1="Canoo" linkto="/work/canoo" />
      <Cta1 grow="1" t1="Canoo" linkto="/work/canoo" />
      <Cta1 grow="1" t1="Canoo" linkto="/work/canoo" />
      <Cta1 grow="1" t1="Canoo" linkto="/work/canoo" />
      <Cta1 grow="1" t1="Canoo" linkto="/work/canoo" />
    </Worklist>
  );
}

export default Work;
