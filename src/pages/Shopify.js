import React from 'react';
import { BlockImg, Blockitem } from '../component/Block';
import { Container } from '../component/Core';
import f1 from '../Assets/shopify/10.1.jpg';
import f2 from '../Assets/shopify/10.2.jpg';
import f3 from '../Assets/shopify/10.3.jpg';
import f4 from '../Assets/shopify/10.4.jpg';
import f5 from '../Assets/shopify/10.5.jpg';


function Shopify() {

  const ImgCanooB = [
    f1,
    f2,
    f3,
    f4,
    f5,
  ]

  return (
    <Container width={[1]} flexDirection='column' flexWrap="wrap" alignItems="center">
      <Container width={[1]} flexWrap="wrap" maxWidth={["1440px"]} pb={[0, 4, 4, 5]}>
        <Container width={[1, 1 / 2, 1 / 2, 1 / 2]} flexDirection={[1]} flexWrap="wrap">
          <Blockitem
            title="Title"
            body="shopify: case study"
          />
          <Blockitem
            title="Credit"
            body="Design Lead - Tsz Ho Ip"
          />
          <Blockitem
            title="Yr"
            body="2019 ~ present"
          />
        </Container>
        <Container width={[1, 1 / 2, 1 / 2, 1 / 2]} flexDirection={[1]} flexWrap="wrap">
          <Blockitem
            title="Description / EN "
            body="Case study for major shopify brand, the idea is to optimize user expereience for online shopping experience"
          />
          <Blockitem
            title="説明 / JP"
            body="大手 Shopify ブランドのケーススタディ、アイデアはオンライン ショッピング エクスペリエンスのユーザー エクスペリエンスを最適化することです"
          />
        </Container>
      </Container>
      <BlockImg image={f1} />
      <BlockImg image={f2} />
      <BlockImg image={f3} />
      <BlockImg image={f4} />
      <BlockImg image={f5} />
    </Container>
  );
}

export default Shopify;
