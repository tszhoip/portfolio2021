import React from 'react';
import ProjFull from '../component/ProjFull';
import Container0 from '../style/containerbg';
import Container1 from '../style/container1';
import d1 from '../assets/f-1.jpg';
import d2 from '../assets/f-2.jpg';
import d3 from '../assets/f-3.jpg';
import d4 from '../assets/f-4.jpg';
import d5 from '../assets/f-5.jpg';
import d6 from '../assets/f-6.jpg';
import d7 from '../assets/f-7.jpg';
import d8 from '../assets/f-8.jpg';
import d9 from '../assets/f-9.jpg';


import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

function Work() {
  const imgFig = [
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
    d7,
    d8
  ]

  const images2 = [
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
    'https://source.unsplash.com/weekly?mountain&w=1024&h=768',
    'https://source.unsplash.com/weekly?architecture&w=1024&h=768',
    'https://source.unsplash.com/weekly?white architecture&w=1024&h=768',
    'https://source.unsplash.com/weekly?black architecture&w=1024&h=768',
    'https://source.unsplash.com/weekly?plane architecture&w=1024&h=768'
  ]

  return (
    <Container0 bgcolor="white">
   
      <ProjFull color="#fff"
        bgcolor="white"
        t1="01 typewritter"
        t2="Random font design that "
        objfit="contain"
        images={imgFig}/>
      <ProjFull color="#fff"
        bgcolor="#DFD2D2"
        t1="01 typewritter"
        t2="Random font design that "
        objfit="contain"
        images={images2} />
      <ProjFull color="#fff"
        bgcolor="#DFD2D2"
        t1="01 typewritter"
        t2="Random font design that "
        objfit="contain"
        images={images2} />
    
    </Container0>
  );
}

export default Work;
