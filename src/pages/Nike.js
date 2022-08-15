import React from 'react';
import Projimgadv from '../style/projimgadv.js'
import n1 from '../assets/n-1.jpg';
import n2 from '../assets/n-2.jpg';
import n4 from '../assets/n-4.jpg';
import n6 from '../assets/n-6.jpg';
import n7 from '../assets/n-7.jpg';
import n9 from '../assets/n-9.jpg';
import n10 from '../assets/n-10.jpg';
import n15 from '../assets/n-15.jpg';
import n16 from '../assets/n-16.jpg';
import nv3 from '../assets/n-v-3.mp4';

function Nike() {
  return (
    <div>
      <Projimgadv theme={{ bgcolor: "#2F2F2F", imgp: "center" }} ><img src={n1} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#2F2F2F", imgp: "center" }} ><img src={n2} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n4} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center", vidw: "100%" }} ><video autoPlay muted loop ><source src={nv3} t2="video/mp4" /></video></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n15} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n6} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n10} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n7} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n16} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={n9} width="80%" height="80%" alt=""/></Projimgadv>
    </div>
  );
}

export default Nike;
