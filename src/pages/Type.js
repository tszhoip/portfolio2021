import React from 'react';
import styled from 'styled-components';
import { Button } from '../component/Buttons';
import { BlockTwoLn100, BlockTwoLn50, BlockThumbHm } from '../component/Block';

const TestContainer = styled.div`
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    flex-flow: row wrap;
`

function Type() {

  return (
    <TestContainer>
      <BlockTwoLn100
        title="Typography LockUp" 
      />
      <BlockTwoLn50
        title="2Col-HL-02" 
        body="orem ipsum dolor sit amet, consecte" 
      />
      <BlockTwoLn50
        title="2Col-HL-01" 
        body="orem ipsum dolor sit amet, consecte" 
      />
      <BlockTwoLn50
        title="4Col-HL-02" 
        body="orem ipsum dolor sit amet, consecte" 
      />
      <BlockTwoLn50
        title="4Col-HL-03" 
        body="orem ipsum dolor sit amet, consecte" 
      />
      <BlockTwoLn50
        title="4Col-HL-04" 
        body="lorem ipsum dolor sit amet, consecte,lorem ipsum dolor sit amet, consecte,lorem ipsum dolor sit amet, consecte, " 
        
      />
      <BlockTwoLn100
        title="Button" 
      />
      <Button cta="button01"/>
      <BlockThumbHm/>

    </TestContainer>
  );
}

export default Type;
