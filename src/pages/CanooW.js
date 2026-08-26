import React from 'react';
import { BlockImg, Blockitem } from '../component/Block';
import { Container } from '../component/Core';
import ca1 from '../Assets/CanooW/2.01.jpg';
import ca2 from '../Assets/CanooW/2.02.jpg';
import ca3 from '../Assets/CanooW/2.03.jpg';
import ca4 from '../Assets/CanooW/2.04.jpg';



function CanooW() {
  const ImgSet = [
    { img: ca1 },
    { img: ca2 },
    { img: ca3 },
    { img: ca4 }
  ]

  return (
    <Container width={[1]} flexDirection='column' flexWrap="wrap" alignItems="center">
      <BlockImg image={ca1} />
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
            body="CanooB, an electric vehicle startup, has been at the forefront of innovative mobility solutions since 2018. Initially focusing on niche markets like urban commute and subscription services, the company shifted its priority to commercial vehicles post-IPO. This strategic pivot necessitated a reevaluation of the brand's visual identity. The Brand Vision project aims to realign the visual and brand messaging to better reflect the company's evolving ethos and motto."
          />
          <Blockitem
            title="説明 / JP"
            body="CanooBは、2018年以来革新的なモビリティソリューションの先駆者である電気自動車のスタートアップです。当初は都市通勤やサブスクリプションサービスなどのニッチ市場に焦点を当てていましたが、IPO後に商用車を優先する方針に転換しました。この戦略的な転換に伴い、ブランドのビジュアルアイデンティティを見直す必要がありました。ブランドビジョンプロジェクトは、企業の進化する理念やモットーによりよく適合するように、ビジュアルとブランドメッセージを正しく調整することを目的としています。"
          />
        </Container>
      </Container>
      {ImgSet.map((imageObj, index) => (
        <BlockImg key={index} image={imageObj.img} />
      ))}
    </Container>
  );
}

export default CanooW;
