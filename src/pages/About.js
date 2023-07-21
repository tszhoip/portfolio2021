import React from 'react';
import { BlockImgPlay } from '../component/BlockImgPlay'
import { Wrap } from '../component/Core'
import lo1 from '../Assets/feed/feed-1.jpg';
import lo2 from '../Assets/feed/feed-2.jpg';
import lo3 from '../Assets/feed/feed-3.jpg';
import lo4 from '../Assets/feed/feed-4.jpg';
import lo5 from '../Assets/feed/feed-5.jpg';
import lo6 from '../Assets/feed/feed-6.jpg';
import lo7 from '../Assets/feed/feed-7.jpg';
import lo8 from '../Assets/feed/feed-8.jpg';
import lo9 from '../Assets/feed/feed-9.jpg';


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



function About() {
  return (
    <div>
      <Wrap>
        Noname
      </Wrap>
      <BlockImgPlay images={ImgLogo} gtcD="repeat(4, 25%)" gtcM="repeat(2, 50%)"/>
    </div>
  );
}

export default About;
