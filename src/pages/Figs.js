import React from 'react';
import f1 from '../assets/figs/f-1.jpg';
import f2 from '../assets/figs/f-2.jpg';
import f3 from '../assets/figs/f-3.jpg';
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
  f1,
  f2,
  f3,
  f4,
  f5,
  f6,
  f7,
  f8,
  f9,
  f10,
  f11,
  f12
]

function Figs() {
  return (
    <div>
      <BlockInfo text1="Figs Inc." text2="The objective of the project is " bgc="#222222"/>
      <BlockImgProj images={ImgFig}  gtcD="repeat(2, 50%)" gtcM="repeat(1, 100%)"/>
      
    </div>
  );
}

export default Figs;
