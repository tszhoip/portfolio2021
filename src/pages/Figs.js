import React from 'react';
import f1 from '../Assets/figs/f-1.jpg';
import f2 from '../Assets/figs/f-2.jpg';
import f3 from '../Assets/figs/f-3.jpg';
import f4 from '../Assets/figs/f-4.jpg';
import f5 from '../Assets/figs/f-5.jpg';
import f6 from '../Assets/figs/f-6.jpg';
import f7 from '../Assets/figs/f-7.jpg';
import f8 from '../Assets/figs/f-8.jpg';
import f9 from '../Assets/figs/f-9.jpg';
import f10 from '../Assets/figs/f-10.jpg';
import f11 from '../Assets/figs/f-11.jpg';
import f12 from '../Assets/figs/f-12.jpg';
import { BlockImgCon, BlockImgPlay, BlockImgProj } from '../component/BlockImgPlay';
import { BlockThumbHm, BlockTwoLn100 } from '../component/Block';

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
 <BlockTwoLn100 title="We are duo designer couple resides in Los Angeles. Believing design is a process of solving problem. Attitude is essential element of our design. Just like we don’t need an entity to define us, Our work does.
    Whenever we are not working, we love drinking fruity coffee and enjoying southern Asian food."/>
      <BlockTwoLn100 title="我们是一对设计师夫妇，居住在 Los Angeles 。相信设计是解决问题的过程。态度是我们设计的基本要素。就像我们不需要一个实体来定义我们一样，我们的工作就是如此。当我们不工作时，我们喜欢喝果味咖啡和享受南亚美食。"/>
       
            <BlockImgProj images={ImgFig}  gtcD="repeat(2, 50%)" gtcM="repeat(1, 100%)"/>
      
    </div>
  );
}

export default Figs;
