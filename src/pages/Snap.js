import React from 'react';
import { BlockImgCon } from '../component/BlockImgPlay';
import lo1 from '../assets/tokyo/tokyo3-01.jpg';
import lo2 from '../assets/tokyo/tokyo3-01.jpg';
import lo3 from '../assets/tokyo/tokyo3-01.jpg';
import lo4 from '../assets/tokyo/tokyo3-01.jpg';
import lo5 from '../assets/tokyo/tokyo3-01.jpg';
import lo6 from '../assets/tokyo/tokyo3-01.jpg';
import lo7 from '../assets/tokyo/tokyo3-01.jpg';
import lo8 from '../assets/tokyo/tokyo3-01.jpg';
import lo9 from '../assets/tokyo/tokyo3-01.jpg';
import lo10 from '../assets/tokyo/tokyo3-01.jpg';
import lo11 from '../assets/tokyo/tokyo3-01.jpg';
import lo12 from '../assets/tokyo/tokyo3-01.jpg';
import lo13 from '../assets/tokyo/tokyo3-01.jpg';
import lo14 from '../assets/tokyo/tokyo3-01.jpg';
import lo15 from '../assets/tokyo/tokyo3-01.jpg';



const ImgLogo = [
  lo1,
  lo2,
  lo3,
  lo4,
  lo5,
  lo6,
  lo7,
  lo8,
  lo9,
  lo10,
  lo11,
  lo12,
  lo13,
  lo14,
  lo15
]

function Snap() {
  return (
    <div>
      <BlockImgCon images={ImgLogo} gtcD="repeat(4, 25%)" gtcM="repeat(2, 50%)"/>
    </div>
  );
}

export default Snap;
