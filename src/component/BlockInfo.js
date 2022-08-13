import React from 'react';
import Type2 from './Type2';
import styled from 'styled-components';

const Info = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 0px;
    background-color: #d5d5d5;
    @media only screen and (min-width : 480px) {
        grid-template-columns: repeat(1, auto);
    }
    @media only screen and (min-width : 768px) {
        grid-template-columns: repeat(2, auto);
    }
    @media only screen and (min-width : 1000px) {
            grid-template-columns: repeat(3, auto);
    }
    @media only screen and (min-width : 1600px) {
            grid-template-columns: repeat(4, auto);
    }
`
const BlockInfo = (props) => {

    return ( 
      <Info> 
          <Type2 text={props.t1}/>
          <Type2 text={props.t2}/>
</Info> 
    )
  }

export default BlockInfo;
