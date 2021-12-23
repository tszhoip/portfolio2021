import React from 'react';
import Projlist from './component/Projlist';

function Home() {
  const subnavposit = {
    position: 'Absolute', top: '', width: '100%', borderTop: '1px solid #f5f5f5'
  };
  return (
    <div style={subnavposit}>
      <Projlist img="https://source.unsplash.com/random/1024x300" title="Innocell" type="website" year="2020" path="/figs"/>
      <Projlist title="Treedom" type="App, Branding" year="2020" path="/figs"/>
      <Projlist title="Figs" type="ecommerece" year="2020" path="/figs"/>
      <Projlist title="Concept D'odeur" type="ecommerece" year="2020" path="/odeur"/>
      <Projlist title="Hyundai" type="Website" year="2020" path="/hyundai"/>
      <Projlist title="Nike" type="Art Direction" year="2020" path="/nike"/>
      <Projlist title="Disney SH" type="typography" year="2020" path="/disney"/>
      <Projlist title="American Apparel" type="ecommerce" year="2020" path="/figs"/>
      <Projlist title="Logos" type=" " year="~2020" path="/figs"/>
    </div>
  );
}

export default Home;
