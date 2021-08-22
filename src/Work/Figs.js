import React from 'react';
import Projimg from '../style/projimg.js'
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
<Projimg src = {f1} theme = {{bgcolor: "#A09E9B"}} position = "50%" />
<Projimg  src = {f2} theme = {{bgcolor: "#2F2F2F"}} position = "50%" />
<Projimg  src = {f3} theme = {{bgcolor: "#1E1D1D"}} position = "50%" />
<Projimg  src = {f4} theme = {{bgcolor: "#1E1D1D"}} position = "0%" />
<Projimg  src = {f5} theme = {{bgcolor: "#1E1D1D"}} position = "50%" />
<Projimg  src = {f6} theme = {{bgcolor: "#A09E9B"}} position = "100%" />
<Projimg  src = {f7} theme = {{bgcolor: "#A09E9B"}} position = "100%" />
<Projimg  src = {f8} theme = {{bgcolor: "#A09E9B"}} position = "100%" />
<Projimg  src = {f9} theme = {{bgcolor: "#A09E9B"}} position = "100%" />
    </div>
  );
}

export default Figs;
