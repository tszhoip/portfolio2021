import React from 'react';
import Projimg from '../style/projimg.js'
import Projimgadv from '../style/projimgadv.js'
import f1 from './f-1.jpg';
import f2 from './f-2.jpg';
import f3 from './f-3.jpg';
import f4 from './f-4.jpg';
import f5 from './f-5.jpg';
import f6 from './f-6.jpg';
import f7 from './f-7.jpg';
import f8 from './f-8.jpg';
import f9 from './f-9.jpg';

function Figs() {
  return (
    <div>
      {/* <Projimg src={f1} theme={{ bgcolor: "#A09E9B" }} position="50%" height="100vh"/> 
          <Projimg src={f3} theme={{ bgcolor: "#1E1D1D" }} position="50%" height="100vh"/>
          <Projimg src={f4} theme={{ bgcolor: "#1E1D1D" }} position="0%" height="100vh"/>
          <Projimg src={f5} theme={{ bgcolor: "#1E1D1D" }} position="50%" height="100vh"/>
          <Projimg src={f6} theme={{ bgcolor: "#A09E9B" }} position="100%" height="100vh"/>
          <Projimg src={f7} theme={{ bgcolor: "#A09E9B" }} position="100%" height="100vh"/>
          <Projimg src={f8} theme={{ bgcolor: "#A09E9B" }} position="100%" height="100vh"/>*/}
      <Projimgadv theme={{ bgcolor: "#A09E9B", imgp: "center" }} ><img src={f1} width="80%" height="80%" /></Projimgadv>

      <Projimgadv theme={{ bgcolor: "#1E1E1E", imgp: "center" }} ><img src={f2} width="80%" height="80%" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#1E1E1E", imgp: "center" }} ><img src={f3} width="80%" height="80%" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#1E1E1E", imgp: "center" }} ><img src={f5} width="80%" height="80%" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#1E1E1E", imgp: "center" }} ><img src={f4} width="80%" height="80%" /></Projimgadv>

      <Projimgadv theme={{ bgcolor: "#A09E9B", imgp: "center" }} ><img src={f6} width="80%" height="80%" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#A09E9B", imgp: "center" }} ><img src={f7} width="80%" height="80%" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#A09E9B", imgp: "center" }} ><img src={f8} width="80%" height="80%" /></Projimgadv>

      <Projimgadv theme={{ bgcolor: "#A09E9B", imgp: "center" }} ><img src={f4} width="80%" height="80%" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#A09E9B", imgp: "center" }} ><img src={f4} width="80%" height="80%" /></Projimgadv>
      <Projimgadv theme={{ bgcolor: "#A09E9B", imgp: "center" }} ><img src={f4} width="80%" height="80%" /></Projimgadv>

      <Projimg src={f9} theme={{ bgcolor: "#1E1D1D" }} position="100%" height="100vh"/>
      <Projimgadv><img src={f1} width="30%" height="30%"/><img src={f2} width="70%" /></Projimgadv>
    </div>
  );
}

export default Figs;
