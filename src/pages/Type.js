import React from 'react';
import styled from 'styled-components';
import {OneLn100, OneLn50} from '../component/LayoutTypeDefault';
import {OneLn} from '../component/LayoutTypeTheme';
import {OneL25 ,OneL50, OneL100, TwoL50} from '../component/LayoutType';
import { BlockTwoLn } from '../component/Typography';

const TestContainer = styled.div`
    width: 100%;
    background-color: lightgrey;
    display: flex;
    flex-flow: row wrap;
`

function Type() {

  return (
    <TestContainer>
    {/* <TypeStyle1 title="ABC" body="orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas quam pharetra ante lacinia, at aliquam leo elementum. Vivamus efficitur efficitur orci, ac aliquet eros mollis at. Nulla a sem quis libero ultrices dictum at sit amet nisi. Nullam iaculis, purus vel sagittis hendrerit, purus risus bibendum neque, a eleifend tellus lacus dignissim urna. Nunc rutrum libero et lacinia malesuada. Sed varius porta dignissim. Duis varius, nibh ac ultrices hendrerit, elit sapien lobortis lorem, ut lacinia justo orci quis orci. Donec euismod lacus a odio pellentesque, vel finibus risus imperdiet." h="" w="" o="2" lang="en" /> */}
    <OneLn100 lang="zh" title="F2222设计师夫妇2ads" body="orem ipsum dolor sit amet, consecte" o="1" />
    <OneLn50 lang="en" title="F222设计师夫妇2ads2"  o="2" />
    <OneLn50 title="11111" body="asdsdsd" o="3" lang="en" />
    <OneLn100 lang="zh" title="F2222设计师夫妇2ads" body="orem ipsum dolor sit amet, consecte" o="8" />

    <OneLn theme="" lang="zh" title="F2222设计师夫妇2ads" body="orem ipsum dolor sit amet, consecte" o="1" />
    <OneLn theme="w50" lang="en" title="F222设计师夫妇2ads2"  o="2" />
    <OneLn theme="w50" title="11111" body="asdsdsd" o="3" lang="en" />
    <OneLn theme="w25" lang="zh" title="F2222设计师夫妇2ads" body="orem ipsum dolor sit amet, consecte" o="8" />
    <OneLn theme="w25" lang="zh" title="F2222设计师夫妇2ads" body="orem ipsum dolor sit amet, consecte" o="8" />
    <OneLn theme="w25" lang="zh" title="F2222设计师夫妇2ads" body="orem ipsum dolor sit amet, consecte" o="8" />
    <OneLn theme="w25" lang="zh" title="F2222设计师夫妇2ads" body="orem ipsum dolor sit amet, consecte" o="8" />

    <OneL100 lang="zh" title="F2222设计师夫妇2ads" body="orem ipsum dolor sit amet, consecte"/>
    <TwoL50 lang="en" title="F222设计师夫妇2ads2" body="orem ipsum dolor sit amet, consecte"/>
    <TwoL50 lang="en" title="F222设计师夫妇2ads2" body="orem ipsum dolor sit amet, consecte"/>
    <OneL25 lang="zh" title="F2222设计师夫妇2ads" body="orem ipsum dolor sit amet, consecte"/>
    <OneL25 lang="zh" title="F2222设计师夫妇2ads" body="orem ipsum dolor sit amet, consecte"/>
    <OneL25 lang="zh" title="F2222设计师夫妇2ads" body="orem ipsum dolor sit amet, consecte"/>
    <OneL25 lang="zh" title="F2222设计师夫妇2ads" body="orem ipsum dolor sit amet, consecte"/>
    {/* <TypeAction title="F333333" h="" w="" o="3" lang="en" /> */}

    <BlockTwoLn col="25%" title="sdsdsdsdds" body="orem ipsum dolor sit amet, consecte"/>


    </TestContainer>
  );
}

export default Type;
