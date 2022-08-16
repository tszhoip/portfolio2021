import React from 'react';
import Container0 from '../style/container0';
import BlockImg4 from '../component/BlockImg4';



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

      <BlockImg4
        images={Play2021} />

      <BlockImg4
        images={Play2021} />



    </Container0>
  );
}

export default Play;
