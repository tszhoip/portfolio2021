import React from 'react';
import BlockImgCon from '../component/BlockImgCon';
import { ThumbnailProj, BlockTwoLn100 } from '../component/Block';
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

function Snap() {
  return (
    <div>
       <BlockTwoLn100 title="We are duo designer couple resides in Los Angeles. Believing design is a process of solving problem. Attitude is essential element of our design. Just like we don’t need an entity to define us, Our work does.
    Whenever we are not working, we love drinking fruity coffee and enjoying southern Asian food."/>
      <BlockTwoLn100 title="我们是一对设计师夫妇，居住在 Los Angeles 。相信设计是解决问题的过程。态度是我们设计的基本要素。就像我们不需要一个实体来定义我们一样，我们的工作就是如此。当我们不工作时，我们喜欢喝果味咖啡和享受南亚美食。"/>
      <BlockImgCon images={ImgLogo} gtcD="repeat(2, 50%)" gtcM="repeat(1, 100%)"/>
    </div>
  );
}

export default Snap;
