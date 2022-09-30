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
    object-fit: contain;
    grid-column: span ${props => props.colSpan};
    grid-row: span ${props => props.colRow};
    &:hover{
    background-color: #f5f5f5;
        }
     &:active{
    background-color: #f5f5f5;
     }
     @media only screen and (min-width : 480px) {
      height: auto;
  }
  @media only screen and (min-width : 768px) {
    height: auto;
  }
  @media only screen and (min-width : 1000px) {
    height: auto;
  }
  @media only screen and (min-width : 1600px) {
    height: auto;
  }
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
            {props.images.map((imgInfo, index) => {
              const { img, colSpan = 1, rowSpan = 1 } = imgInfo
              return <Item
                key={index}
                original={img}
                thumbnail={img}
                width="3000"
                height="2000"
              >
                {({ ref, open }) => (
                  <ImgGrid ref={ref} onClick={open} src={img} colSpan={colSpan} rowSpan={rowSpan} objfit={props.objfit} />
                )}
              </Item>
            }
            )}
          </Gallery>
        </ImageGallery>
      }</div> 
    )
  }

export default BlockImgProj;
