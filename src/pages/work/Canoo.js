import React from 'react';
import BlockImg3 from '../../component/BlockImg3';
import BlockInfo from '../../component/BlockInfo';
import ca1 from '../../assets/c-01.jpg';
import ca2 from '../../assets/c-02.jpg';
import ca3 from '../../assets/c-03.jpg';
import ca4 from '../../assets/c-04.jpg';
import ca5 from '../../assets/c-05.jpg';
import ca6 from '../../assets/c-06.jpg';
import ca7 from '../../assets/c-07.jpg';
import ca8 from '../../assets/c-08.jpg';
import ca9 from '../../assets/c-09.jpg';
import ca10 from '../../assets/c-10.jpg';
import ca11 from '../../assets/c-11.jpg';
import ca12 from '../../assets/c-12.jpg';



function Canoo() {


  const imgCanoo = [
    ca1,
    ca2,
    ca3,
    ca4,
    ca5,
    ca6,
    ca7,
    ca8,
    ca9,
    ca10,
    ca11,
    ca12
  ]

  return (
    <div>
      <BlockInfo t1="canoo"/>
      <BlockImg3 images={imgCanoo} />
     
    
    </div>
  );
}

export default Canoo;
