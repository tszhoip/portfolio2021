import React from 'react';
import Projlist from '../component/Projlist';
import Container1 from '../style/container1';
import Type1 from '../component/type1';
import n1 from '../assets/n-1.jpg';
import n2 from '../assets/n-2.jpg';
import n3 from '../assets/n-3.jpg';
import n4 from '../assets/n-4.jpg';
import n5 from '../assets/n-5.jpg';
import i1 from '../assets/i-1.jpg';
import i2 from '../assets/i-2.jpg';
import i3 from '../assets/i-3.jpg';
import i4 from '../assets/i-4.jpg';
import i5 from '../assets/i-5.jpg';
import d1 from '../assets/d-1.jpg';
import d2 from '../assets/d-2.jpg';
import d3 from '../assets/d-3.jpg';
import d4 from '../assets/d-4.jpg';
import d5 from '../assets/d-5.jpg';

const Nike = [
  n1, n2, n3, n4, n5
]
const Innocell = [
  i1, i2, i3, i4, i5
]
const Hyundai = [
  i1, i2, i3, i4, i5
]
const Disney = [
  d5, d1, d2, d3, d4,
]

function Home() {
  return (
    <Container1>
      <Type1 t1="Tsz and Michelle are a design duo based in Los Angeles, CA. Together, We create."/>

      <Projlist t1="Treedom" t2="App, Branding" t3="2020" path="/figs"/>
      <Projlist images={Innocell} t1="Innocell" t2="website, casestudy" t3="2020" path="/innocell" />
      <Projlist t1="Concept D'odeur" t2="ecommerece" t3="2020" path="/odeur"/>
      <Projlist t1="Figs" t2="ecommerece" t3="2020" path="/figs" />
      <Projlist images={Hyundai} t1="Hyundai" t2="Website" t3="2020" path="/hyundai"/>
      <Projlist images={Nike} t1="Nike" t2="Art Direction" t3="2020" path="/nike"/>
      <Projlist images={Disney} t1="Disney SH" t2="typography" t3="2020" path="/disney"/>
      <Projlist t1="American Apparel" t2="ecommerce" t3="2020" path="/figs"/>
      <Projlist t1="Logos" t2=" " t3="~2020" path="/logo"/>
    </Container1>
  );
}

export default Home;
