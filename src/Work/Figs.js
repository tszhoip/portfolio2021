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

export default Figs;
