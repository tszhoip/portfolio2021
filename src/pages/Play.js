import React from 'react';
import ProjFull from '../component/ProjFull';
import Container0 from '../style/container0';



import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

function Play() {
  const Play2021 = [
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
  ]

  const Play2020 = [
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
  ]


  return (
    <Container0 bgcolor="white">

      <ProjFull color="#fff"
        bgcolor="white"
        t1="2021"
        t2=" "
        objfit="contain"
        images={Play2021} />

      <ProjFull color="#fff"
        bgcolor="#DFD2D2"
        t1="2020"
        t2=" "
        objfit="contain"
        images={Play2020} />


    </Container0>
  );
}

export default Play;
