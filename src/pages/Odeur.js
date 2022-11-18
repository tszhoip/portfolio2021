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
import { ThumbnailProj, BlockTwoLn100 } from '../component/Block';

const ImgFig = [
  f1,
  f1,
  f2,
  f3,
  f4,
  f5,
  f6,
  ov0,
  ov1
]

function Odeur() {
  return (
    <div>
       <BlockTwoLn100 title="We are duo designer couple resides in Los Angeles. Believing design is a process of solving problem. Attitude is essential element of our design. Just like we don’t need an entity to define us, Our work does.
    Whenever we are not working, we love drinking fruity coffee and enjoying southern Asian food."/>
      <BlockTwoLn100 title="我们是一对设计师夫妇，居住在 Los Angeles 。相信设计是解决问题的过程。态度是我们设计的基本要素。就像我们不需要一个实体来定义我们一样，我们的工作就是如此。当我们不工作时，我们喜欢喝果味咖啡和享受南亚美食。"/>
        <BlockImgProj images={ImgFig} gtcD="repeat(2, 50%)" gtcM="repeat(1, 100%)"/>/>
      
    </div>
  );
}

export default Odeur;
