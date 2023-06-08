import React from 'react';
import { BlockImgCon, BlockImgPlay, BlockImgProj } from '../component/BlockImgPlay';
import lo1 from '../assets/feed/feed-1.jpg';
import lo2 from '../assets/feed/feed-2.jpg';
import lo3 from '../assets/feed/feed-3.jpg';
import lo4 from '../assets/feed/feed-4.jpg';
import lo5 from '../assets/feed/feed-5.jpg';
import lo6 from '../assets/feed/feed-6.jpg';
import lo7 from '../assets/feed/feed-7.jpg';
import lo8 from '../assets/feed/feed-8.jpg';
import lo9 from '../assets/feed/feed-9.jpg';


const ImgLogo = [
  { img: lo1 },
  { img: lo2 },
  { img: lo3, colSpan: 3, rowSpan: 2 },
  { img: lo4 },
  { img: lo5 },
  { img: lo6 },
  { img: lo7 },
  { img: lo8 },
  { img: lo9 },
]



function Feed() {
  return (
    <div>
      <BlockImgPlay images={ImgLogo} gtcD="repeat(4, 25%)" gtcM="repeat(2, 50%)"/>
    </div>
  );
}

export default Feed;
