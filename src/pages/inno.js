import React from 'react';
import f1 from '../assets/inn/inn1.jpg';
import f2 from '../assets/inn/inn2.jpg';
import f3 from '../assets/inn/inn3.jpg';
import f4 from '../assets/figs/f-4.jpg';
import f5 from '../assets/figs/f-5.jpg';
import f6 from '../assets/figs/f-6.jpg';
import f7 from '../assets/figs/f-7.jpg';
import f8 from '../assets/figs/f-8.jpg';
import f9 from '../assets/figs/f-9.jpg';
import f10 from '../assets/figs/f-10.jpg';
import f11 from '../assets/figs/f-11.jpg';
import f12 from '../assets/figs/f-12.jpg';
import BlockImgProj from '../component/BlockImgProj';
import BlockInfo from '../component/BlockInfo';

const ImgFig = [
  { img: f1, colSpan: 2, rowSpan: 1 },
  { img: f2 },
  { img: f3 },
  { img: f4 },
  { img: f5 },
  { img: f6 },
  { img: f7 },
  { img: f8 },
  { img: f9 },
  { img: f10 },
  { img: f11 },
  { img: f12 }
]

function Inno() {
  return (
    <div>
<BlockInfo
        text1=" "
        text2="Innocell is a new hostage/hotel located near the chinese university in Hong Kong. It is a new lifestyle that innocell want to facilitate the young community. Our case study provided a vision on visual identity and general app experience and interaction. "
        pb="32px"
      />      
      <BlockImgProj images={ImgFig}  gtcD="repeat(3, 33.3%)" gtcM="repeat(2, 50%)"/>
      
    </div>
  );
}

export default Inno;
