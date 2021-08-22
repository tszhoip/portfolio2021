import React from 'react';
import Projlist from './component/Projlist';

function Home() {
  const subnavposit = {
    position: 'Absolute', top: '50%', width: '100%', borderTop: '1px solid #f5f5f5'
  };
  return (
    <div style={subnavposit}>
        <Projlist title="Innocell" type="website" year="2020" />
        <Projlist title="Treedom" type="App, Branding" year="2020" />
        <Projlist title="Figs" type="ecommerece" year="2020" path="/figs"/>
        <Projlist title="Concept D'odeur" type="ecommerece" year="2020" />
        <Projlist title="Hyundai" type="Website" year="2020" />
        <Projlist title="Nike" type="Art Direction" year="2020" />
        <Projlist title="Disney SH" type="typography" year="2020" />
        <Projlist title="American Apparel" type="ecommerce" year="2020" />
    </div>
  );
}

export default Home;
