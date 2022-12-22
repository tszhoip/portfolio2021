import React from 'react';
import { BlockImgCon, BlockImgPlay, BlockImgProj } from '../component/BlockImgPlay';
import { BlockTwoLn100, BlockTwoLn50 } from '../component/Block';
import { ContainerFlex } from '../component/Container';
import ca1 from '../assets/canoo/c-01.jpg';
import ca2 from '../assets/canoo/c-02.jpg';
import ca3 from '../assets/canoo/c-03.jpg';
import ca4 from '../assets/canoo/c-04.jpg';
import ca5 from '../assets/canoo/c-05.jpg';


function Canoo() {

  const ImgCanoo = [
    { img: ca1, colSpan: 2, rowSpan: 1 },
    { img: ca2 },
    { img: ca3 },
    { img: ca4 },
    { img: ca5 }
  ]

  return (
    <ContainerFlex>
      <BlockTwoLn100 fontSize={[2]} title="CANOO INC."/>
      <BlockTwoLn50 title="Canoo was aiming to do some difference for the brand experience. A immersive expereince yet infomative at the same time. A better UI was created to bring the default google map style world to the next level. "/>
      <BlockTwoLn50 title="我们是一对设计师夫妇，居住在 Los Angeles 。相信设计是解决问题的过程。态度是我们设计的基本要素。就像我们不需要一个实体来定义我们一样，我们的工作就是如此。当我们不工作时，我们喜欢喝果味咖啡和享受南亚美食。"/>
      <BlockTwoLn100 image={ca1} title="我们是一对设计师夫妇，居住在 Los Angeles 。相信设计是解决问题的过程。态度是我们设计的基本要素。就像我们不需要一个实体来定义我们一样，我们的工作就是如此。当我们不工作时，我们喜欢喝果味咖啡和享受南亚美食。"/>
      <BlockTwoLn100 image={ca2}/>
      <BlockTwoLn100 image={ca3}/>
      <BlockTwoLn100 image={ca4}/>
      <BlockTwoLn100 image={ca5}/>
      <BlockImgProj images={ImgCanoo}  gtcD="repeat(2, 50%)" gtcM="repeat(1, 100%)"/>
    </ContainerFlex>
  );
}

export default Canoo;
