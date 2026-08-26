import React from 'react';
import { BlockImg, Blockitem } from '../component/Block';
import { Container } from '../component/Core';
import ca1 from '../Assets/CanooP/4.01.jpg';
import ca2 from '../Assets/CanooP/4.02.jpg';
import ca3 from '../Assets/CanooP/4.03.jpg';
import ca4 from '../Assets/CanooP/4.04.jpg';
import ca5 from '../Assets/CanooP/4.05.jpg';
import ca6 from '../Assets/CanooP/4.06.jpg';
import ca7 from '../Assets/CanooP/4.07.jpg';


function CanooP() {

  const ImgSet = [
    { img: ca1 },
    { img: ca2 },
    { img: ca3 },
    { img: ca4 },
    { img: ca5 },
    { img: ca6 },
    { img: ca7 }
  ]

  return (
    <Container width={[1]} flexDirection='column' flexWrap="wrap" alignItems="center">
      <BlockImg image={ca1} />
      <Container width={[1]} flexWrap="wrap" maxWidth={["1440px"]} pb={[0, 4, 4, 5]}>
        <Container width={[1, 1 / 2, 1 / 2, 1 / 2]} flexDirection={[1]} flexWrap="wrap">
          <Blockitem
            title="Title"
            body="Canoo Design Process"
          />
          <Blockitem
            title="Credit"
            body="Design Lead - Tsz Ho Ip"
          />
          <Blockitem
            title="Yr"
            body="2018 – Present"
          />
        </Container>
        <Container width={[1, 1 / 2, 1 / 2, 1 / 2]} flexDirection={[1]} flexWrap="wrap">
          <Blockitem
            title="Description / EN "
            body="An electric vehicle startup, has been at the forefront of innovative mobility solutions since 2018. Process is always an important to explore and discover."
          />
          <Blockitem
            title="説明 / CN"
            body="一家电动汽车初创公司自 2018 年以来一直处于创新移动解决方案的前沿。流程始终是探索和发现的重要内容。"
          />
        </Container>
      </Container>
      {ImgSet.map((imageObj, index) => (
        <BlockImg key={index} image={imageObj.img} />
      ))}
    </Container>
  );
}

export default CanooP;
