import styled from 'styled-components';

const Projimg = styled.img`
    display: block;
    height: 100vh;
    width: 100vw;
    object-position: ${props => props.position};
    overflow: hidden;
    object-fit: contain;
    background-color: ${props => props.theme.bgcolor};
    @media (max-width: 1000px) {
        height: auto;
      }
`

export default Projimg;