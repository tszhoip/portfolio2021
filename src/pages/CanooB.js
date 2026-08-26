import React from 'react';
import { BlockImg, Blockitem, BlockThumb } from '../component/Block';
import { Container } from '../component/Core';
import { useNavigate } from 'react-router-dom';
import ca1 from '../assets/canoob/CB-1-01.jpg';
import ca2 from '../assets/canoob/CB-1-02.jpg';
import ca3 from '../assets/canoob/CB-1-03.jpg';
import ca4 from '../assets/canoob/CB-1-04.jpg';
import ca5 from '../assets/canoob/CB-1-05.jpg';
import ca6 from '../assets/canoob/CB-1-06.jpg';
import ca7 from '../assets/canoob/CB-1-07.jpg';
import ca8 from '../assets/canoob/CB-1-08.jpg';
import ca9 from '../assets/canoob/CB-1-09.jpg';
import ca10 from '../assets/canoob/CB-1-10.jpg';
import ca11 from '../assets/canoob/CB-1-11.jpg';
import ca12 from '../assets/canoob/CB-1-12.jpg';
import ca13 from '../assets/canoob/CB-1-13.jpg';
import { flexDirection } from 'styled-system';


function CanooB() {
  const navigate = useNavigate();

  const Thumb = [
    { img: ca1 }
  ]
  const ImgSet = [
    { img: ca2 },
    { img: ca3 },
    { img: ca4 },
    { img: ca5 },
    { img: ca6 },
    { img: ca7 },
    { img: ca8 },
    { img: ca9 },
    { img: ca10 },
    { img: ca11 },
    { img: ca12 },
    { img: ca13 }
  ]

  const relatedProjects = [
    { img: ca1, to: "/work/CanooW", title: "Canoo Showroom" },
    { img: ca1, to: "/work/CanooP", title: "Canoo Process" },
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

      {/* Credit Section */}
      <Container width={[1]} flexWrap="wrap" maxWidth={["1440px"]} pb={[0, 4, 4, 5]} mt={[4, 5, 5, 5]} borderTop="1px solid #e0e0e0">
        <Container width={[1]} flexDirection={[1]} flexWrap="wrap" pt={[4]}>
          <Blockitem
            title="Team"
            body="Nathan Smith - Program Lead
Tsz Ho Ip - Design Lead"
          />
          <Blockitem
            title="Role"
            body="Brand Strategy, Visual Identity, Design Direction"
          />
          <Blockitem
            title="Deliverables"
            body="Brand Guidelines, Logo System, Color Palette, Typography, Marketing Materials"
          />
        </Container>
      </Container>

      {/* Related Projects */}
      <Container width={[1]} display="flex" flexDirection="column" alignItems="center" pb={[5]} mt={[5]}>
        <Container width={[1]} maxWidth={["1440px"]} px={[3]}>
          <h2 style={{ textAlign: 'left', marginBottom: '24px', fontSize: '18px', fontFamily: 'Helvetica' }}>
            Related Projects
          </h2>
        </Container>
        <Container width={[1]} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" gap="16px">
          <BlockThumb width={[1, 1, 1 / 2, 1 / 3]} img={ca1} to="/work/CanooW" title="Canoo Showroom" />
          <BlockThumb width={[1, 1, 1 / 2, 1 / 3]} img={ca1} to="/work/CanooP" title="Canoo Process" />
        </Container>
      </Container>
    </Container>
  );
}

export default CanooB;
