import React from 'react';
import { BlockImg, Blockitem } from '../component/Block';
import { Container } from '../component/Core';
import ca1 from '../Assets/Joy/11.01.jpg';
import ca2 from '../Assets/Joy/11.02.jpg';
import ca3 from '../Assets/Joy/11.03.jpg';
import ca4 from '../Assets/Joy/11.04.jpg';
import ca5 from '../Assets/Joy/11.05.jpg';
import ca6 from '../Assets/Joy/11.06.jpg';


function CanooB() {
  const ImgSet = [
    { img: ca1, colSpan: 2, rowSpan: 1 },
    { img: ca2 },
    { img: ca3 },
    { img: ca4 },
    { img: ca5 },
    { img: ca6 }
  ]

  return (
    <Container width={[1]} flexDirection='column' flexWrap="wrap" alignItems="center">
      <Container width={[1]} flexWrap="wrap" maxWidth={["1440px"]} pb={[0, 4, 4, 5]}>
        <Container width={[1, 1 / 2, 1 / 2, 1 / 2]} flexDirection={[1]} flexWrap="wrap">
          <Blockitem
            title="Title"
            body="CanooB Brand Identity"
          />
          <Blockitem
            title="Credit"
            body="Program Lead - Nathan Smith
                  Design Lead - Tsz Ho Ip"
          />
          <Blockitem
            title="Yr"
            body="2024"
          />
        </Container>
        <Container width={[1, 1 / 2, 1 / 2, 1 / 2]} flexDirection={[1]} flexWrap="wrap">
          <Blockitem
            title="Description / EN "
            body="JOY & PEACE symbolizes European footwear excellence with unique designs and exquisite Italian craftsmanship, providing a distinct sense of joy and harmony for each esteemed customer. Evolving into a European Goods Galleria, the brand now caters to the fashion-forward aspirations of young individuals."
          />
          <Blockitem
            title="説明 / CN"
            body="JOY & PEACE 以独特的设计和精湛的意大利工艺象征着欧洲鞋履的卓越品质，为每一位尊贵的顾客带来独特的欢乐与和谐感。该品牌现已发展成为欧洲商品广场，迎合了年轻人的时尚追求。"
          />
        </Container>
      </Container>
      {ImgSet.map((imageObject) => (
        <BlockImg key={imageObject.img} image={imageObject.img} />
      ))}
    </Container>
  );
}

export default CanooB;
