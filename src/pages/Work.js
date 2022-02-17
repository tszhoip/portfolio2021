import React from 'react';
import ProjFull from '../component/ProjFull';
import Container0 from '../style/container0';
import Container1 from '../style/container1';
import d2 from '../assets/f-2.jpg';
import d3 from '../assets/f-3.jpg';
import d4 from '../assets/f-4.jpg';
import d5 from '../assets/f-5.jpg';
import d6 from '../assets/f-6.jpg';
import d7 from '../assets/f-7.jpg';
import n1 from '../assets/n-1.jpg';
import n2 from '../assets/n-2.jpg';
import n3 from '../assets/n-3.jpg';
import n4 from '../assets/n-4.jpg';
import n5 from '../assets/n-5.jpg';
import n6 from '../assets/n-6.jpg';
import lo1 from '../assets/logo/lo-01.jpg';
import lo2 from '../assets/logo/lo-02.jpg';
import lo3 from '../assets/logo/lo-03.jpg';
import lo4 from '../assets/logo/lo-04.jpg';
import lo5 from '../assets/logo/lo-05.jpg';
import lo6 from '../assets/logo/lo-06.jpg';
import lo7 from '../assets/logo/lo-07.jpg';
import lo8 from '../assets/logo/lo-08.jpg';
import lo9 from '../assets/logo/lo-09.jpg';
import lo10 from '../assets/logo/lo-10.jpg';
import lo11 from '../assets/logo/lo-11.jpg';
import lo12 from '../assets/logo/lo-12.jpg';
import ca1 from '../assets/c-01.jpg';
import ca2 from '../assets/c-02.jpg';
import ca3 from '../assets/c-03.jpg';
import ca4 from '../assets/c-04.jpg';
import ca5 from '../assets/c-05.jpg';
import ca6 from '../assets/c-06.jpg';
import ca7 from '../assets/c-07.jpg';
import ca8 from '../assets/c-08.jpg';
import ca9 from '../assets/c-09.jpg';
import ca10 from '../assets/c-10.jpg';
import ca11 from '../assets/c-11.jpg';
import ca12 from '../assets/c-12.jpg';
import t1 from '../assets/t-1.jpg';
import t2 from '../assets/t-2.jpg';


import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

function Work() {
  const imgFig = [
    d2,
    d3,
    d4,
    d5,
    d6,
    d7
  ]

  const imgNike = [
    n1,
    n2,
    n3,
    n4,
    n5,
    n6
  ]

  const imgTree = [
    t1,
    t2,
    n3,
    n4,
    n5,
    n6
  ]

  const imgLogo = [
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
    lo12
  ]

  const imgCanoo = [
    ca1,
    ca2,
    ca3,
    ca4,
    ca5,
    ca6,
    ca7,
    ca8,
    ca9,
    ca10,
    ca11,
    ca12
  ]

  return (
    <Container0 bgcolor="white">
      
      <ProjFull color="#fff"
        bgcolor="white"
        t1="Canoo"
        t2="Web"
        objfit="contain"
        images={imgCanoo} />
      <ProjFull color="#fff"
        bgcolor="white"
        t1="Treedom"
        t2="Branding, App"
        objfit="contain"
        images={imgFig}/>
      <ProjFull color="#fff"
        bgcolor="#DFD2D2"
        t1="Nike"
        t2="Art Direction"
        objfit="contain"
        images={imgNike} />
      <ProjFull color="#fff"
        bgcolor="#DFD2D2"
        t1="Treedom"
        t2="Identity, App"
        objfit="contain"
        images={imgTree} />
      <ProjFull color="#fff"
        bgcolor="#DFD2D2"
        t1="Disney"
        t2="Identity, App"
        objfit="contain"
        images={imgTree} />
      <ProjFull color="#fff"
        bgcolor="#DFD2D2"
        t1="Hyundai"
        t2="Identity, App"
        objfit="contain"
        images={imgTree} />
      <ProjFull color="#fff"
        bgcolor="#DFD2D2"
        t1="Logo"
        t2="2010~2022"
        objfit="contain"
        images={imgLogo} />
    
    </Container0>
  );
}

export default Work;
