import React from 'react';
import Projimgadv from '../style/projimgadv.js'
import o1 from './o-1.jpg';
import o2 from './o-2.jpg';
import o3 from './o-3.jpg';
import o4 from './o-4.jpg';
import o5 from './o-5.jpg';
import o6 from './o-6.jpg';
import o7 from './o-7.jpg';
import ov0 from './o-v-0.mp4';
import ov1 from './o-v-1.mp4';

function Odeur() {
  return (
    <div>
      <Projimgadv theme={{ bgcolor: "#f5f5f5", imgp: "center" }} ><img src={o1} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#f5f5f5", imgp: "center" }} ><img src={o2} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#f5f5f5", imgp: "center" }} ><img src={o3} width="80%" height="80%" alt=""/></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#f5f5f5", imgp: "center" }} ><img src={o4} width="80%" height="80%" alt="" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#f5f5f5", imgp: "center" }} ><img src={o5} width="80%" height="80%" alt="" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center", vidw: "50%" }} >
        <video autoPlay muted loop ><source src={ov0} type="video/mp4" /></video>
        <video autoPlay muted loop ><source src={ov1} type="video/mp4" /></video>
      </Projimgadv>
      <Projimgadv theme={{ bgcolor: "#ffffff", imgp: "center" }} ><img src={o6} width="80%" height="80%" alt="" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#EBEBDE", imgp: "center" }} ><img src={o7} width="80%" height="80%" alt="" /></Projimgadv>
      
      
          </div>
  );
}

export default Odeur;
