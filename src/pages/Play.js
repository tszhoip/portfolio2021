import React from 'react';
import BlockImgCon from '../component/BlockImgCon';
import BlockInfo from '../component/BlockInfo';
import lo1 from '../assets/tokyo/tokyo3-01.jpg';
import lo2 from '../assets/tokyo/tokyo3-02.jpg';
import lo3 from '../assets/tokyo/tokyo3-03.jpg';
import lo4 from '../assets/tokyo/tokyo3-04.jpg';
import lo5 from '../assets/tokyo/tokyo3-05.jpg';
import lo6 from '../assets/tokyo/tokyo3-06.jpg';
import lo7 from '../assets/tokyo/tokyo3-07.jpg';
import lo8 from '../assets/tokyo/tokyo3-08.jpg';
import lo9 from '../assets/tokyo/tokyo3-09.jpg';
import lo10 from '../assets/tokyo/tokyo3-10.jpg';
import lo11 from '../assets/tokyo/tokyo3-11.jpg';
import lo12 from '../assets/tokyo/tokyo3-13.jpg';
import lo13 from '../assets/tokyo/tokyo3-14.jpg';



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
  lo13
]

function Play() {
  return (
    <div>
      <BlockInfo text1="play" text2="try" bgc="white"gtcD="repeat(2, 50%)" gtcM="repeat(1, 50%)"/>
      <BlockImgCon images={ImgLogo} gtcD="repeat(4, 25%)" gtcM="repeat(2, 50%)"/>
    </div>
  );
}

export default Play;
