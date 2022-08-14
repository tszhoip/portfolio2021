import React from 'react';
import Projimgadv from '../../style/projimgadv.js'
// import f1 from '../../assets/f-1.jpg';
// import f2 from '../../assets/f-2.jpg';
// import f3 from '../../assets/f-3.jpg';
// import f4 from '../../assets/f-4.jpg';
// import f5 from '../../assets/f-5.jpg';
// import f6 from '../../assets/f-6.jpg';
import f1 from '../../assets/figs/f-1.jpg';
import f2 from '../../assets/figs/f-2.jpg';
import f3 from '../../assets/figs/f-3.jpg';
import f4 from '../../assets/figs/f-4.jpg';
import f5 from '../../assets/figs/f-5.jpg';
import f6 from '../../assets/figs/f-6.jpg';
import f7 from '../../assets/figs/f-7.jpg';
import f8 from '../../assets/figs/f-8.jpg';
import f9 from '../../assets/figs/f-9.jpg';
import f10 from '../../assets/figs/f-10.jpg';
import f11 from '../../assets/figs/f-11.jpg';
import f12 from '../../assets/figs/f-12.jpg';
import Projlist from '../../component/Projlist';
import BlockImg3 from '../../component/BlockImg3';
import BlockInfo from '../../component/BlockInfo';

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
      <BlockInfo text1="Figs Inc." text2="Web UI" bgc="#222222"/>
      <BlockImg3 images={ImgFig} />
      <Projlist t1="Innocell" t2="website" t3="2020" />
      <Projlist t1="Treedom" t2="App, Branding" t3="2020" />
      <Projlist t1="Figs" t2="ecommerece" t3="2020" path="/figs" />
      <Projlist t1="Concept D'odeur" t2="ecommerece" t3="2020" path="/odeur" />
      <Projlist t1="Hyundai" t2="Website" t3="2020" />
      <Projlist t1="Nike" t2="Art Direction" t3="2020" path="/nike" />
      <Projlist t1="Disney SH" t2="typography" t3="2020" />
      <Projlist t1="American Apparel" t2="ecommerce" t3="2020" />
      <Projlist t1="Logos" t2=" " t3="~2020" />
    </div>
  );
}

export default Figs;
