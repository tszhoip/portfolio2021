import React from 'react';
import BlockImgProj from '../component/BlockImgProj';
import { BlockThumbHm, BlockTwoLn100, BlockTwoLn50 } from '../component/Block';
import ca1 from '../assets/canoo/c-01.jpg';
import ca2 from '../assets/canoo/c-02.jpg';
import ca3 from '../assets/canoo/c-03.jpg';


function Canoo() {

  const ImgCanoo = [
    { img: ca1, colSpan: 2, rowSpan: 1 },
    { img: ca2 },
    { img: ca3 }
  ]

  return (
    <div>
      <BlockTwoLn100 fontSize="32px" title="CANOO INC."/>
       <BlockTwoLn50 title="We are duo designer couple resides in Los Angeles. Believing design is a process of solving problem. Attitude is essential element of our design. Just like we don’t need an entity to define us, Our work does.
    Whenever we are not working, we love drinking fruity coffee and enjoying southern Asian food."/>
      <BlockTwoLn50 title="我们是一对设计师夫妇，居住在 Los Angeles 。相信设计是解决问题的过程。态度是我们设计的基本要素。就像我们不需要一个实体来定义我们一样，我们的工作就是如此。当我们不工作时，我们喜欢喝果味咖啡和享受南亚美食。"/>
         
      <BlockImgProj images={ImgCanoo}  gtcD="repeat(2, 50%)" gtcM="repeat(1, 100%)"/>
     
    
    </div>
  );
}

export default Canoo;
