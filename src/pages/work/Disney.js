import React from 'react';
import Projimgadv from '../../style/projimgadv.js'
import d0 from '../../assets/d-0.jpg';
import d1 from '../../assets/d-1.jpg';
import d2 from '../../assets/d-2.jpg';
import d3 from '../../assets/d-3.jpg';
import Projlist from '../../component/Projlist';

function Disney() {
  return (
    <div>

      <Projimgadv theme={{ bgcolor: "#324DC3", imgp: "center" }} ><img src={d0} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#f5f5f5", imgp: "center" }} ><img src={d1} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#f5f5f5", imgp: "center" }} ><img src={d2} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#f5f5f5", imgp: "center" }} ><img src={d3} width="80%" height="80%" alt=""/></Projimgadv>
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

export default Disney;
