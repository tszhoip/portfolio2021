import styled from 'styled-components';

const Projimgadv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: ${props => props.theme.bgcolor};
    align-content: center;
    justify-content: ${props => props.theme.imgp};
    img {
      max-width: 1200px;
      @media (max-width: 1000px) {
      width: 100%;
    }
    }
    video {
      width: ${props => props.theme.vidw};
      max-width: 1200px;
      height: auto;
      @media (max-width: 1000px) {
      width: 100%;
    }
    @media (max-width: 1000px) {
    flex-direction: column;
    }
`

export default Projimgadv;

