import React from 'react';
import styled from 'styled-components';
import { Gallery, Item } from 'react-photoswipe-gallery'
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

const ImageGallery = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 0px;
    @media only screen and (min-width : 480px) {
      grid-template-columns: ${props => props.gtcM};
    }
    @media only screen and (min-width : 768px) {
      grid-template-columns: ${props => props.gtcM};
    }
    @media only screen and (min-width : 1000px) {
      grid-template-columns: ${props => props.gtcD};
    }
    @media only screen and (min-width : 1600px) {
      grid-template-columns: ${props => props.gtcD};
    }
`
const ImgGrid = styled.img`
object-fit: cover;
`

const BlockImgProj = (props) => {

    const hasImages = Array.isArray(props.images)
    const smallItemStyles = {
      cursor: "pointer",
      objectFit: "cover",
      width: "100%",
      Height: "100%"
    };

    return ( 
      <div> 
          {
            hasImages &&
            <ImageGallery gtcM={props.gtcM} gtcD={props.gtcD}>
              <Gallery
              id="simple-gallery"
              options={{
                closeOnScroll: true,
                shareEl: false,
                arrowPrevTitle: "asd",
                fullscreenEl: (props) => (
                  <span {...props} style={{ color: "red" }}>
                    f
                  </span>
                )
              }}
              >
                {props.images.map((imageUrl, index) => <Item
                  key={index}
                  original={imageUrl}
                  thumbnail={imageUrl}
                  width="1024"
                  height="1024"
                >
                  {({ ref, open }) => (
                    <ImgGrid ref={ref} onClick={open} src={imageUrl} style={smallItemStyles} objfit={props.objfit} />
                  )}
                </Item>)}
              </Gallery>
            </ImageGallery>
          }
</div> 
    )
  }

export default BlockImgProj;