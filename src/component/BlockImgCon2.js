import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Gallery, Item } from 'react-photoswipe-gallery'
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

const ImageGallery = styled.div`
    width: 100%;
    display: grid;
    overflow: hidden;
    @media only screen and (min-width : 480px) {
        grid-template-columns: repeat(2, auto);
    }
    @media only screen and (min-width : 768px) {
        grid-template-columns: repeat(2, auto);
    }
    @media only screen and (min-width : 1000px) {
            grid-template-columns: repeat(4, auto);
    }
    @media only screen and (min-width : 1600px) {
            grid-template-columns: repeat(4, auto);
    }
`
const ImgGrid = styled.img`
    object-fit: contain;
    cursor: pointer;
    width: 100%;
    height: 75vh;
    min-height: 400px;
    max-height: 1100px;
    &:hover{
      border: none;
      transform: scale(1.02);
      transition: width 0.5s, height 0.5s, background-color 0.5s, transform 0.5s
     }
     &:active{
       color: #000;
     }
`

const BlockImgCon2 = (props) => {

    const hasImages = Array.isArray(props.images)
    // const smallItem = {
    //   cursor: "pointer",
    //   objectFit: "contain",
    //   border: "0.5px solid red",
    //   width: "100%",
    //   height: "75vh",
    //   minHeight: "400px",
    //   maxHeight: "1100px"
    // }

    return ( 
      <div> 
          {
            hasImages &&
            <ImageGallery>
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
                    <ImgGrid ref={ref} onClick={open} src={imageUrl} objfit={props.objfit} />
                  )}
                </Item>)}
              </Gallery>
            </ImageGallery>
          }
</div> 
    )
  }

export default BlockImgCon2;
