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
      <Projlist title="Innocell" type="website" year="2020" />
      <Projlist title="Treedom" type="App, Branding" year="2020" />
      <Projlist title="Figs" type="ecommerece" year="2020" path="/figs" />
      <Projlist title="Concept D'odeur" type="ecommerece" year="2020" path="/odeur" />
      <Projlist title="Hyundai" type="Website" year="2020" />
      <Projlist title="Nike" type="Art Direction" year="2020" path="/nike" />
      <Projlist title="Disney SH" type="typography" year="2020" />
      <Projlist title="American Apparel" type="ecommerce" year="2020" />
      <Projlist title="Logos" type=" " year="~2020" />
    </div>
  );
}

export default Hyundai;
