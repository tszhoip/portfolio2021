import React from 'react';
import f1 from '../assets/odeur/odeur-1.jpg';
import f2 from '../assets/odeur/odeur-2.jpg';
import f3 from '../assets/odeur/odeur-3.jpg';
import f4 from '../assets/odeur/odeur-4.jpg';
import f5 from '../assets/odeur/odeur-5.jpg';
import f6 from '../assets/odeur/odeur-6.jpg';
import ov0 from '../assets/o-v-0.mp4';
import ov1 from '../assets/o-v-1.mp4';
import BlockImgProj from '../component/BlockImgProj';
import BlockInfo from '../component/BlockInfo';

const ImgFig = [
  f1,
  f1,
  f2,
  f3,
  f4,
  f5,
  f6
]

function Odeur() {
  return (
    <div>
      <BlockInfo text1="Figs Inc." text2="The objective of the project is " bgc="#222222"/>
      <BlockImgProj images={ImgFig} gtcD="repeat(2, 50%)" gtcM="repeat(1, 100%)"/>/>
      
    </div>
  );
}

export default Odeur;
