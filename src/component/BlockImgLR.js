import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import styled from "styled-components";
import { space, layout, flexbox, border, color, typography, width } from "styled-system";



import { base } from '../theme';
import { Thumbnail, Wrap, H1, Text, Button, ContainerBase } from './Core';

const ImageGallery = styled.div`
  display: flex;
  overflow-x: auto; /* Enable horizontal scrolling */
  width: 100vw;
  overflow: hidden;
  padding: 160px 0;
  background-color: #f5f5f5;
  ${space}
  ${layout}
  ${flexbox}
  ${border}
  ${color}
  ${typography}
  ${width}
`;


const ImgGrid = styled.img`
  cursor: pointer;
  width: 360px;
  border: 0.5px solid #f5f5f5;
  ${space}
  ${layout}
  ${flexbox}
  ${border}
  ${color}
  ${typography}
  ${width}
`;

export const BlockImg = (props) => {

  const hasImages = Array.isArray(props.images)

  return (
    <ImageGallery
    width="100vw"
    overflow="hidden"
    gtcD={props.gtcD}
    gtcM={props.gtcM}
    overflowX="auto"
  >
    {hasImages && (
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
          const { img, colSpan = 1, rowSpan = 1 } = imgInfo;
          return (
            <Item
              key={index}
              original={img}
              BlockThumb={img}
              width="1024"
              height="1024"
            >
              {({ ref, open }) => (
                <ImgGrid
                  ref={ref}
                  onClick={open}
                  src={img}
                  colSpan={colSpan}
                  rowSpan={rowSpan}
                  objfit={props.objfit}
                  ml={['40px','80px','160px','160px']}
                />
              )}
            </Item>
          );
        })}
      </Gallery>
    )}
  </ImageGallery>
);
};

