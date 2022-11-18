import React from 'react';
import Projimgadv from '../style/projimgadv.js'
import n1 from '../assets/n-1.jpg';
import n2 from '../assets/n-2.jpg';
import n4 from '../assets/n-4.jpg';
import n6 from '../assets/n-6.jpg';
import n7 from '../assets/n-7.jpg';
import n9 from '../assets/n-9.jpg';
import n10 from '../assets/n-10.jpg';
import n15 from '../assets/n-15.jpg';
import n16 from '../assets/n-16.jpg';
import nv3 from '../assets/n-v-3.mp4';
import { ThumbnailProj, BlockTwoLn100 } from '../component/Block';

function Nike() {
  return (
    <div>
       <BlockTwoLn100 title="We are duo designer couple resides in Los Angeles. Believing design is a process of solving problem. Attitude is essential element of our design. Just like we don’t need an entity to define us, Our work does.
    Whenever we are not working, we love drinking fruity coffee and enjoying southern Asian food."/>
      <BlockTwoLn100 title="我们是一对设计师夫妇，居住在 Los Angeles 。相信设计是解决问题的过程。态度是我们设计的基本要素。就像我们不需要一个实体来定义我们一样，我们的工作就是如此。当我们不工作时，我们喜欢喝果味咖啡和享受南亚美食。"/>
      
      <Projimgadv theme={{ bgcolor: "#2F2F2F", imgp: "center" }} ><img src={n1} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#2F2F2F", imgp: "center" }} ><img src={n2} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n4} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center", vidw: "100%" }} ><video autoPlay muted loop ><source src={nv3} t2="video/mp4" /></video></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n15} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n6} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n10} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n7} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n16} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n9} width="80%" height="80%" alt=""/></Projimgadv>
    </div>
  );
}

export default Nike;
