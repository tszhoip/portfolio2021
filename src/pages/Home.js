import React from 'react';
import Projlist from '../component/Projlist';
import Container1 from '../style/container1';
import Type1 from '../component/type1';
import n1 from '../assets/n-1.jpg';
import n2 from '../assets/n-2.jpg';
import n3 from '../assets/n-3.jpg';
import n4 from '../assets/n-4.jpg';
import n5 from '../assets/n-5.jpg';
import n6 from '../assets/n-6.jpg';


function Home() {

  const Nike = [
    n1, n2, n3, n4, n5, n6
  ]

  return (
    <Container1>
      <Type1 t1="Tsz and Michelle are a design duo based in Los Angeles, CA. Together, We create."/>
      <Projlist images={Nike} t1="Innocell" t2="website" t3="2020" path="/figs"/>
      <Projlist t1="Treedom" t2="App, Branding" t3="2020" path="/figs"/>
      <Projlist t1="Figs" t2="ecommerece" t3="2020" path="/figs"/>
      <Projlist t1="Concept D'odeur" t2="ecommerece" t3="2020" path="/odeur"/>
      <Projlist t1="Hyundai" t2="Website" t3="2020" path="/hyundai"/>
      <Projlist images={Nike} t1="Nike" t2="Art Direction" t3="2020" path="/nike"/>
      <Projlist t1="Disney SH" t2="typography" t3="2020" path="/disney"/>
      <Projlist t1="American Apparel" t2="ecommerce" t3="2020" path="/figs"/>
      <Projlist t1="Logos" t2=" " t3="~2020" path="/logo"/>
    </Container1>
  );
}

export default Home;
