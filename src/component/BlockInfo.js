import React from 'react';
import Type2 from './Type2';
import styled from 'styled-components';

const Info = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 0px;
    background-color: ${props => props.bgc};
    @media only screen and (min-width : 480px) {
        grid-template-columns: repeat(1, auto);
    }
    @media only screen and (min-width : 768px) {
        grid-template-columns: repeat(2, auto);
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
            <Type2
                text={props.text1}
            />
            <Type2
                text={props.text2}
            />
        </Info>
    )
}

export default BlockInfo;
