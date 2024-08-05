import React from 'react';
import { BlockImg, Blockitem } from '../component/Block';
import { Container } from '../component/Core';
import ca1 from '../Assets/inn/9.01.jpg';
import ca2 from '../Assets/inn/9.02.jpg';
import ca3 from '../Assets/inn/9.03.jpg';
import ca4 from '../Assets/inn/9.04.jpg';
import ca5 from '../Assets/inn/9.05.jpg';
import ca6 from '../Assets/inn/9.06.jpg';
import ca7 from '../Assets/inn/9.07.jpg';
import ca8 from '../Assets/inn/9.08.jpg';


function CanooB() {

  const ImgCanooB = [
    { img: ca1, colSpan: 2, rowSpan: 1 },
    { img: ca2 },
    { img: ca3 },
    { img: ca4 },
    { img: ca5 },
    { img: ca6 },
    { img: ca7 },
    { img: ca8 }
  ]

  return (
    <Container width={[1]} flexDirection='column' flexWrap="wrap" alignItems="center">
      <BlockImg image={ca1} />
      <Container width={[1]} flexWrap="wrap" maxWidth={["1440px"]} pb={[0, 4, 4, 5]}>
        <Container width={[1, 1 / 2, 1 / 2, 1 / 2]} flexDirection={[1]} flexWrap="wrap">
          <Blockitem
            title="Title"
            body="Innocell Science Park"
          />
          <Blockitem
            title="Credit"
            body="Design Lead - Tsz Ho Ip"
          />
          <Blockitem
            title="Yr"
            body="2023"
          />
        </Container>
        <Container width={[1, 1 / 2, 1 / 2, 1 / 2]} flexDirection={[1]} flexWrap="wrap">
          <Blockitem
            title="Description / EN "
            body="Innocell is a hostal slash coworking space that located right next to the university. The Hotel is embrassing tech forward experience that anything can be controled through an app. The art direction was nomad style with neumorphism touch."
          />
          <Blockitem
            title="説明 / JP"
            body="Innocellは、大学のすぐ隣にあるホスタルスラッシュコワーキングスペースです。当ホテルは、アプリを通じてあらゆるものを制御できるという最先端のテクノロジー体験を大切にしています。アートディレクションはニューモーフィズムタッチのノマドスタイルでした。"
          />
        </Container>
      </Container>
      <BlockImg image={ca2} />
      <BlockImg image={ca3} />
      <BlockImg image={ca4} />
      <BlockImg image={ca5} />
      <BlockImg image={ca6} />
      <BlockImg image={ca7} />
      <BlockImg image={ca8} />
    </Container>
  );
}

export default CanooB;
