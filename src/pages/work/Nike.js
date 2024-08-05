import React from 'react';
import { BlockImg, Blockitem } from '../../component/Block';
import { Container } from '../../component/Core';
import f1 from '../../Assets/nike/5.01.jpg';
import f2 from '../../Assets/nike/5.02.jpg';
import f3 from '../../Assets/nike/5.03.jpg';
import f4 from '../../Assets/nike/5.04.jpg';
import f5 from '../../Assets/nike/5.05.jpg';



function Nike() {

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
            body="nike: "
          />
          <Blockitem
            title="Credit"
            body="Design Lead - Tsz Ho Ip, Supermorebetter studio"
          />
          <Blockitem
            title="Yr"
            body="2019"
          />
        </Container>
        <Container width={[1, 1 / 2, 1 / 2, 1 / 2]} flexDirection={[1]} flexWrap="wrap">
          <Blockitem
            title="Description / EN "
            body="We partnered with the studio, supermorebetter on a pitch for a nike campaign, translating the 2D elements into 3D fixtures and graphics for the spatial design of Nike SoHo."
          />
          <Blockitem
            title="説明 / JP"
            body="スタジオと提携し、ナイキ キャンペーンのピッチでスーパーモアベターを行い、ナイキ ソーホーの空間デザインのために 2D 要素を 3D 備品やグラフィックに変換しました。"
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

export default Nike;
