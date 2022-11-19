import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Gallery, Item } from 'react-photoswipe-gallery'
import Container1 from '../style/container1';

const ProjectContainer = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => props.bgcolor};
    color: ${props => props.color};
`
const ProjectInfo = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
`
const ImageGallery = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 4px;
    grid-column-gap: 4px;
    padding-left: 16px;
    padding-right: 16px;
    @media only screen and (min-width : 480px) {
        grid-template-columns: repeat(2, auto);
    }
    @media only screen and (min-width : 768px) {
        grid-template-columns: repeat(3, auto);
    }
    @media only screen and (min-width : 1000px) {
            grid-template-columns: repeat(4, auto);

    }
    @media only screen and (min-width : 1600px) {
            grid-template-columns: repeat(6, auto);

    }
`
const ImgGrid = styled.img`
    height: auto;
`


const ProjFull = (props) => {

    const hasImages = Array.isArray(props.images)


    return (
      <Container1 bgcolor = {props.bgcolor}>
        
        <TypeStatic t1={props.t1} t2={props.t2} t3={props.t3}/>
          {

            hasImages &&
            <ImageGallery>
              <Gallery>
                {props.images.map((imageUrl, index) => <Item
                  key={index}
                  original={imageUrl}
                  BlockThumbHm={imageUrl}
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <ImgGrid ref={ref} onClick={open} src={imageUrl} objfit={props.objfit} />
                  )}
                </Item>)}
              </Gallery>
            </ImageGallery>
          }

        

     </Container1 >
    )
  }

export default ProjFull;
