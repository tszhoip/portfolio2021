import React from 'react';
import Projimgadv from '../style/projimgadv.js'
import f1 from '../assets/f-1.jpg';
import f2 from '../assets/f-2.jpg';
import f3 from '../assets/f-3.jpg';
import f4 from '../assets/f-4.jpg';
import f5 from '../assets/f-5.jpg';
import f6 from '../assets/f-6.jpg';
import Projlist from '../component/Projlist';

function Figs() {
  return (
    <div>
      <Projimgadv theme={{ bgcolor: "#A09E9B", imgp: "center" }} ><img src={f1} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#222222", imgp: "center" }} ><img src={f2} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#222222", imgp: "center" }} ><img src={f3} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#222222", imgp: "center" }} ><img src={f4} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#222222", imgp: "center" }} ><img src={f5} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#222222", imgp: "center" }} ><img src={f6} width="80%" height="80%" alt=""/></Projimgadv>

{/* 
      <Projimgadv><img src={f1} width="50%" alt="" /><img src={f2} width="50%" alt=""/></Projimgadv> */}
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
