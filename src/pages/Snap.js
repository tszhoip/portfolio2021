import React from 'react';
import { BlockImgCon } from '../component/BlockImgPlay';
import lo1 from '../Assets/tokyo/001.jpg';
import lo2 from '../Assets/tokyo/002.jpg';
import lo3 from '../Assets/tokyo/003.jpg';
import lo4 from '../Assets/tokyo/004.jpg';
import lo5 from '../Assets/tokyo/005.jpg';
import lo6 from '../Assets/tokyo/006.jpg';
import lo7 from '../Assets/tokyo/007.jpg';
import lo8 from '../Assets/tokyo/008.jpg';
import lo9 from '../Assets/tokyo/009.jpg';
import lo10 from '../Assets/tokyo/010.jpg';
import lo11 from '../Assets/tokyo/011.jpg';
import lo12 from '../Assets/tokyo/013.jpg';
import lo13 from '../Assets/tokyo/014.jpg';
import lo14 from '../Assets/tokyo/013.jpg';
import lo15 from '../Assets/tokyo/014.jpg';



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
