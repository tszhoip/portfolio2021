import React from 'react';
import BlockImgProj from '../component/BlockImgProj';
import BlockInfo from '../component/BlockInfo';
import ca1 from '../assets/canoo/c-01.jpg';
import ca2 from '../assets/canoo/c-02.jpg';
import ca3 from '../assets/canoo/c-03.jpg';


function Canoo() {

  const ImgCanoo = [
    { img: ca1, colSpan: 2, rowSpan: 1 },
    { img: ca2 },
    { img: ca3 }
  ]

  return (
    <div>
      <BlockInfo
        text1=" "
        text2="A Design System for Canoo web environment. The Goal is to maintain a standard of design quality and same visual language. This Design system documented all the basic elements of the brand and act like a user manual to allow designer to pick up works more efficients."
        pb="32px"
      />      
      <BlockImgProj images={ImgCanoo}  gtcD="repeat(2, 50%)" gtcM="repeat(1, 100%)"/>
     
    
    </div>
  );
}

export default Canoo;
