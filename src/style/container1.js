import styled from 'styled-components';

const Container1 = styled.div`
    display: flex;
    flex-direction: ${props => props.theme.dir};
    justify-content: ${props => props.theme.imgp};
    flex-wrap: wrap;
    margin: auto;
    @media only screen and (min-width : 480px) {
      width: 100%;
    }
    @media only screen and (min-width : 768px) {
      width: 100%;
    }
       @media only screen and (min-width : 1000px) {
    width: 100%;
    }
    @media only screen and (min-width : 1600px) {
    max-width: 1600px;
    }
`
export default Container1;

