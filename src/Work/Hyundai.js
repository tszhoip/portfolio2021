import React from 'react';
import Projimgadv from '../style/projimgadv.js'
import h1 from '../assets/h-1.jpg';
import h2 from '../assets/h-2.jpg';
import h3 from '../assets/h-3.jpg';
import h0 from '../assets/h-0.jpg';
import Projlist from '../component/Projlist';

function Hyundai() {
  return (
    <div>
      <Projimgadv theme={{ bgcolor: "#1E1E1E", imgp: "center" }} ><img src={h0} width="80%" height="80%" alt="" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#1E1E1E", imgp: "center" }} ><img src={h1} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#1E1E1E", imgp: "flex-end" }} ><img src={h2} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#1E1E1E", imgp: "flex-start" }} ><img src={h3} width="80%" height="80%" alt=""/></Projimgadv>

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

export default Hyundai;
