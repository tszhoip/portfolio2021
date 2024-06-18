import React from 'react';
import {  BlockImgProj } from '../component/BlockImgPlay';
import { BlockTwoLn100, BlockTwoLn50, Block, BlockConCol, BlockConRow, Blockitem } from '../component/Block';
import { ContainerBase } from '../component/Core';
import ca1 from '../Assets/canoo/1.01.jpg';
import ca2 from '../Assets/canoo/1.02.jpg';
import ca3 from '../Assets/canoo/1.03.jpg';
import ca4 from '../Assets/canoo/1.04.jpg';
import ca5 from '../Assets/canoo/1.05.jpg';
import ca6 from '../Assets/canoo/1.06.jpg';
import ca7 from '../Assets/canoo/1.07.jpg';
import ca8 from '../Assets/canoo/1.08.jpg';
import ca9 from '../Assets/canoo/1.09.jpg';
import ca10 from '../Assets/canoo/1.10.jpg';
import { flexDirection } from 'styled-system';


function Canoo() {

  const ImgCanoo = [
    { img: ca1, colSpan: 2, rowSpan: 1 },
    { img: ca2 },
    { img: ca3 },
    { img: ca4 },
    { img: ca5 },
    { img: ca6 },
    { img: ca7 },
    { img: ca8 },
    { img: ca9 },
    { img: ca10 }
  ]

  return (
    <Block>
            <BlockTwoLn100 image={ca1}/>
      <BlockConRow width={["100vw", "100vw", "100vw", "100vw"]} padding={[2]}>
      <BlockConCol width={[1, 1/2, 1/2, 1/2]}>
       <Blockitem
        title="Title"
        body="Canoo Brand Identity"
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
        </BlockConCol>
        <BlockConCol width={[1, 1/2, 1/2, 1/2]}>
       <Blockitem 
        title="Description / EN "
        body="Canoo, an electric vehicle startup, has been at the forefront of innovative mobility solutions since 2018. Initially focusing on niche markets like urban commute and subscription services, the company shifted its priority to commercial vehicles post-IPO. This strategic pivot necessitated a reevaluation of the brand's visual identity. The Brand Vision project aims to realign the visual and brand messaging to better reflect the company's evolving ethos and motto."
        />
        <Blockitem
        title="説明 / JP"
        body="Canooは、2018年以来革新的なモビリティソリューションの先駆者である電気自動車のスタートアップです。当初は都市通勤やサブスクリプションサービスなどのニッチ市場に焦点を当てていましたが、IPO後に商用車を優先する方針に転換しました。この戦略的な転換に伴い、ブランドのビジュアルアイデンティティを見直す必要がありました。ブランドビジョンプロジェクトは、企業の進化する理念やモットーによりよく適合するように、ビジュアルとブランドメッセージを正しく調整することを目的としています。"
        />
        </BlockConCol>
        </BlockConRow>
      <BlockTwoLn100 image={ca2}/>
      <BlockTwoLn100 image={ca3}/>
      <BlockTwoLn100 image={ca4}/>
      <BlockTwoLn100 image={ca5}/>
      <BlockTwoLn100 image={ca6}/>
      <BlockTwoLn100 image={ca7}/>
      <BlockTwoLn100 image={ca8}/>
      <BlockTwoLn100 image={ca9}/>
      <BlockTwoLn100 image={ca10}/>
    </Block>
  );
}

export default Canoo;
