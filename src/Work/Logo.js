import React from 'react';
import Projimgadv from '../style/projimgadv';
import Projlist from '../component/Projlist';
import lo1 from '../assets/logo/lo-01.jpg';
import lo2 from '../assets/logo/lo-02.jpg';
import lo3 from '../assets/logo/lo-03.jpg';
import lo4 from '../assets/logo/lo-04.jpg';
import ProjImgLogo from '../component/projimglogo';
import Container1 from '../style/container1';


function Logo() {
  return (
    <Container1 theme={{dir: "row", }}>
      <ProjImgLogo t1="amazing" img={lo1}></ProjImgLogo>
      <ProjImgLogo t1="amazing" img={lo1}></ProjImgLogo>
      <ProjImgLogo t1="amazing" img={lo1}></ProjImgLogo>
      <ProjImgLogo t1="amazing" img={lo1}></ProjImgLogo>
      <ProjImgLogo t1="amazing" img={lo1}></ProjImgLogo>
      <ProjImgLogo t1="amazing" img={lo1}></ProjImgLogo>
      <ProjImgLogo t1="amazing" img={lo1}></ProjImgLogo>
      <ProjImgLogo t1="amazing" img={lo1}></ProjImgLogo>
      <ProjImgLogo t1="amazing" img={lo1}></ProjImgLogo>

    </Container1>
  );
}

export default Logo;
