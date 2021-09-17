import React from 'react';
import Projimg from '../style/projimg.js'
import Projimgadv from '../style/projimgadv.js'
import n1 from './n-1.jpg';
import n2 from './n-2.jpg';
import n3 from './n-3.jpg';
import n4 from './n-4.jpg';
import n5 from './n-5.jpg';
import n6 from './n-6.jpg';
import n7 from './n-7.jpg';
import n8 from './n-8.jpg';
import n9 from './n-9.jpg';
import n10 from './n-10.jpg';
import n15 from './n-15.jpg';
import n16 from './n-16.jpg';
import n11 from './n-11.jpg';
import n12 from './n-12.jpg';
import nv1 from './n-v-1.mp4';
import nv2 from './n-v-2.mp4';
import nv3 from './n-v-3.mp4';

function Nike() {
  return (
    <div>
      <Projimgadv theme={{ bgcolor: "#2F2F2F", imgp: "center"}} ><img src={n1} width="80%" height="80%" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#2F2F2F", imgp: "center" }} ><img src={n2} width="80%" height="80%" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n4} width="80%" height="80%" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center", vidw: "72%" }} ><video autoPlay muted loop ><source src={nv3} type="video/mp4" /></video></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n15} width="80%" height="80%" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n6} width="80%" height="80%" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n10} width="80%" height="80%" /></Projimgadv>
      {/* <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "flex-end" }} ><img src={n6} width="32.4%" height="32.4%" /><img src={n7} width="57.6%" height="57.6%" /></Projimgadv> */}
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n7} width="80%" height="80%" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n16} width="80%" height="80%" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n9} width="80%" height="80%" /></Projimgadv>
      
      
          </div>
  );
}

export default Nike;
