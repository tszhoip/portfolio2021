import React from 'react';
import BlockImgPlay from '../component/BlockImgPlay';
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
  lo1,
  lo2,
  lo3,
  lo4,
  lo5,
  lo6,
  lo7,
  lo8,
  lo9
]

function Feed() {
  return (
    <div>
      <BlockImgPlay images={ImgLogo} gtcD="repeat(4, 25%)" gtcM="repeat(2, 50%)"/>
    </div>
  );
}

export default Feed;
