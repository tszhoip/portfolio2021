import React from 'react';
import { BlockImgProj } from '../component/BlockImgPlay';
import { BlockTwoLn100 } from '../component/Block';
import lo1 from '../Assets/logo/lo01.jpg';
import lo2 from '../Assets/logo/lo02.jpg';
import lo3 from '../Assets/logo/lo03.jpg';
import lo4 from '../Assets/logo/lo04.jpg';
import lo5 from '../Assets/logo/lo05.jpg';
import lo6 from '../Assets/logo/lo06.jpg';
import lo7 from '../Assets/logo/lo07.jpg';
import lo8 from '../Assets/logo/lo08.jpg';
import lo9 from '../Assets/logo/lo09.jpg';
import lo10 from '../Assets/logo/lo10.jpg';
import lo11 from '../Assets/logo/lo11.jpg';
import lo12 from '../Assets/logo/lo12.jpg';
import lo13 from '../Assets/logo/lo13.jpg';
import lo14 from '../Assets/logo/lo14.jpg';
import lo15 from '../Assets/logo/lo15.jpg';
import lo16 from '../Assets/logo/lo16.jpg';
import lo17 from '../Assets/logo/lo17.jpg';
import lo18 from '../Assets/logo/lo18.jpg';
import lo19 from '../Assets/logo/lo19.jpg';
import lo20 from '../Assets/logo/lo20.jpg';
import lo21 from '../Assets/logo/lo21.jpg';
import lo22 from '../Assets/logo/lo22.jpg';
import lo23 from '../Assets/logo/lo23.jpg';
import lo24 from '../Assets/logo/lo24.jpg';
import lo25 from '../Assets/logo/lo25.jpg';
import lo26 from '../Assets/logo/lo26.jpg';
import lo27 from '../Assets/logo/lo27.jpg';
import lo28 from '../Assets/logo/lo28.jpg';
import lo29 from '../Assets/logo/lo29.jpg';
import lo30 from '../Assets/logo/lo30.jpg';


const ImgLogo = [
  { img: lo1 },
  { img: lo2 },
  { img: lo3 },
  { img: lo4 },
  { img: lo5 },
  { img: lo6 },
  { img: lo7 },
  { img: lo8 },
  { img: lo9 },
  { img: lo10 },
  { img: lo11 },
  { img: lo12 },
  { img: lo13 },
  { img: lo14 },
  { img: lo15 },
  { img: lo16 },
  { img: lo17 },
  { img: lo18 },
  { img: lo19 },
  { img: lo20 },
  { img: lo21 },
  { img: lo22 },
  { img: lo23 },
  { img: lo24 },
  { img: lo25 },
  { img: lo26 },
  { img: lo27 },
  { img: lo28 },
  { img: lo29 },
  { img: lo30 },
]


function Logo() {
  return (
    <div>
       <BlockTwoLn100 title="We are duo designer couple resides in Los Angeles. Believing design is a process of solving problem. Attitude is essential element of our design. Just like we don’t need an entity to define us, Our work does.
    Whenever we are not working, we love drinking fruity coffee and enjoying southern Asian food."/>
      <BlockTwoLn100 title="我们是一对设计师夫妇，居住在 Los Angeles 。相信设计是解决问题的过程。态度是我们设计的基本要素。就像我们不需要一个实体来定义我们一样，我们的工作就是如此。当我们不工作时，我们喜欢喝果味咖啡和享受南亚美食。"/>
      
      <BlockImgProj images={ImgLogo} gtcD="repeat(5, 20%)" gtcM="repeat(3, 33.3%)"/>
    </div>
  );
}

export default Logo;
