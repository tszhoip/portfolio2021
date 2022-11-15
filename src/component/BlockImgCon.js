import React from 'react';
import styled from 'styled-components';
import { Gallery, Item } from 'react-photoswipe-gallery'
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

const ImageGallery = styled.div`
    width: 100%;
    display: grid;
    overflow: hidden;
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
    object-fit: contain;
    cursor: pointer;
    width: calc(100% - 16px);
    padding: 8px;
    border: 0.5px solid #f5f5f5;
    &:hover{
    background-color: #f5f5f5;
        }
     &:active{
    background-color: #f5f5f5;
     }
     @media only screen and (min-width : 480px) {
      height: 30vh;
      min-height: 400px;
      max-height: 1100px;
  }
  @media only screen and (min-width : 768px) {
    height: 50vh;
    min-height: 400px;
    max-height: 1100px;
  }
  @media only screen and (min-width : 1000px) {
    height: 75vh;
    min-height: 400px;
    max-height: 1100px;
  }
  @media only screen and (min-width : 1600px) {
    height: 75vh;
    min-height: 400px;
    max-height: 1100px;
  }
`

const BlockImgCon = (props) => {

  const hasImages = Array.isArray(props.images)

  return (
    <div>
      {
        hasImages &&
        <ImageGallery gtcD={props.gtcD} gtcM={props.gtcM} >
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
              ThumbnailProj={imageUrl}
              width="1024"
              height="1024"
            >
              {({ ref, open }) => (
                <ImgGrid ref={ref} onClick={open} src={imageUrl} objfit={props.objfit} />
              )}
            </Item>)}
          </Gallery>
        </ImageGallery>
      }
    </div>
  )
}

export default BlockImgCon;
