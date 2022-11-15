import React from 'react';
import TypeStatic from './TypeStatic';
import styled from 'styled-components';

const Info = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 0px;
    background-color: ${props => props.bgc};
    @media only screen and (min-width : 480px) {
        grid-template-columns: repeat(1, 50%);
    }
    @media only screen and (min-width : 768px) {
        grid-template-columns: repeat(2, 50%);
    }
    @media only screen and (min-width : 1000px) {
            grid-template-columns: repeat(2, 50%);
    }
    @media only screen and (min-width : 1600px) {
            grid-template-columns: repeat(2, 50%);
    }
`
const BlockInfo = (props) => {

    return (
        <Info bgc={props.bgc}>
            <TypeStatic
                lang="zh"
                text={props.text1}
                b={props.b1}
                pb="32px"
            />     
            <TypeStatic 
                lang="en"
                text={props.text2}
                b={props.b2}
                pb="32px"
            />
        </Info>
    )
}

export default BlockInfo;
