import React from 'react';
import Projimgadv from '../style/projimgadv.js'
import d1 from '../Assets/d-1.jpg';
import d2 from '../Assets/d-2.jpg';
import d3 from '../Assets/d-3.jpg';
import d0 from '../Assets/d-0.jpg';
import Projlist from '../component/Projlist';

function Disney() {
  return (
    <div>

      <Projimgadv theme={{ bgcolor: "#324DC3", imgp: "center" }} ><img src={d0} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#f5f5f5", imgp: "center" }} ><img src={d1} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#f5f5f5", imgp: "center" }} ><img src={d2} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#f5f5f5", imgp: "center" }} ><img src={d3} width="80%" height="80%" alt=""/></Projimgadv>

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

export default Disney;
