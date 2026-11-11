import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider, css } from "styled-components";
import { color, space, layout, flexbox, position, width, zIndex } from "styled-system";

import { base } from '../theme';
import { Thumbnail, ThumbnailFont, Wrap, Button, Container } from './Core';
import { Type } from '../components/layout/Type';

export const Block = styled.div`
background-color: ${(props) => props.theme.colors.gre10};
display: flex;
flex-direction: row;
width: 100vw;
flex-wrap: wrap;
`

export const BlockContainer = styled.div`
background-color: ${(props) => props.theme.colors.gre10};
box-shadow: 0px 0px 1px ${(props) => props.theme.colors.gre20} inset;
${color};
${space};
${layout};
`

export const BlockContainer5050 = styled.div`
background-color: ${(props) => props.theme.colors.gre10};
box-shadow: 0px 0px 1px ${(props) => props.theme.colors.gre20} inset;
${color};
${space};
${layout};

`

export const CenterWrap = styled.div`
${layout};
${width};
${position};
${flexbox};
`
const BImage = styled.img`
    flex-grow: 1;
    width: 100%;
    height: auto;
    object-fit: cover;
    margin: 0;
    /* A lazy image that has not loaded has no intrinsic size, so it collapses
       to zero height - and a zero-height image never counts as scrolled into
       view, so it never loads. Reserving its shape up front breaks that
       deadlock, and stops the page jumping as each one arrives. */
    ${(props) => props.$ratio && css`aspect-ratio: ${props.$ratio};`}
    ${space};
    ${layout};
`

const ImgBlock2 = styled.img`
    grid-row: 1 / 2;
    grid-column: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    ${space};
    ${layout};
`

const MenuWrapper = styled.div`
    width: 100%;
    display: flex;
    background-color: #f5f5f5;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #FFF;
    }
`

/* The card is a shape, not a height: one ratio per orientation, so it reads
   the same at 375px and at 1900px. Portrait below M, landscape from M up -
   the same width where the wide cards stop spanning the full row. */
const ThumbCard = styled(Thumbnail)`
    aspect-ratio: ${(props) => props.theme.layout.ratio.portrait};

    @media (min-width: ${(props) => props.theme.breakpoints.M}) {
        aspect-ratio: ${(props) => props.theme.layout.ratio.landscape};
    }
`

const ThumbnailTitle = styled.div`
    grid-row: 1;
    grid-column: 1;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding-bottom: ${(props) => props.theme.layout.space.snug};
    padding-left: ${(props) => props.theme.layout.space.snug};
    position: relative;
    z-index: 10;
    background: transparent;
    opacity: 1;
    transition: opacity 0.2s ease;

    > p {
        color: black;
        transition: color 0.2s ease;
    }

    /* Where a pointer can hover, the info is hover-only. Where it cannot -
       touch - it stays visible, because there is no hover to reveal it. */
    @media (hover: hover) {
        opacity: 0;

        ${({ $isHovered }) => $isHovered && `
            opacity: 1;

            > p {
                color: white;
            }
        `}
    }
`
export const BlockImg = (props) => {
  return (
    <ThemeProvider theme={base}>
      {/* ratio is passed as a transient prop: styled-system's `layout` would
          read a plain width/height and emit them as CSS, fighting the 100%. */}
      <BImage src={props.image} p="none" loading="lazy" $ratio={props.ratio} />
    </ThemeProvider>
  )
};

const BVideo = styled.video`
  flex-grow: 1;
  width: 100%;
  height: auto;
  object-fit: cover;
  margin: 0;
  ${space};
  ${layout};
`;

export const BlockVideo = (props) => {
  return (
    <ThemeProvider theme={base}>
      <BVideo
        src={props.video}
        p="none"
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
        style={{ aspectRatio: '3 / 2' }}
        onError={(e) => {
          console.error('Video failed to load:', props.video);
          e.target.style.display = 'none';
        }}
      />
    </ThemeProvider>
  )
};

export const BlockTwoLn50 = (props) => {
  return (
    <ThemeProvider theme={base}>
      <BlockContainer width={[1, 1, 1 / 2, 1 / 2]} >
        <Wrap padding="snug" pb="loose" display={"block"}>
          <Type fontFamily={[0]} color="grey" size="S">{props.title}</Type>
          <Type fontFamily={[0]} color="navy20" size="S">{props.body}</Type>
        </Wrap>
      </BlockContainer>
    </ThemeProvider>
  )
};

export const BlockTwoLn100 = (props) => {
  return (
    <ThemeProvider theme={base}>
      <BlockContainer width={[1, 1, 1, 1]}>
        <Wrap padding="none" pb="none">
          <ImgBlock2 src={props.image} pb="none" />
          <Type as="h2" fontFamily={[0]} color="navy10" size="S">{props.title}</Type>
          <Type color="black" size="S">{props.body}</Type>
        </Wrap>
      </BlockContainer>
    </ThemeProvider>
  )
};

export const Blockitem = (props) => {
  return (
    <ThemeProvider theme={base}>
      <Wrap padding="snug" pb="snug" flexDirection="column">
        <ImgBlock2 src={props.image} pb="tight" />
        <Type pb="tight" fontFamily={[0]} color="lightgrey" size="M">{props.title}</Type>
        <Type pb="" pr="loose" fontFamily={[0]} color="black" size="M">{props.body}</Type>
      </Wrap>
    </ThemeProvider>
  )
};

export const BlockMenu = (props) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };
  const navigateShop = () => {
    navigate('/Shop');
  };

  return (
    <ThemeProvider theme={base}>
      <MenuWrapper>
        <Wrap width="100%">
          <Button fontFamily={[0]} width="25%" fontSize={base.text.size.M} fontWeight={base.text.weight.reg} padding="snug" variant="default" flexGrow="1" textAlign="left" onClick={navigateHome}> Work </Button>
          <Button fontFamily={[0]} width="25%" fontSize={base.text.size.M} fontWeight={base.text.weight.reg} padding="snug" variant="default" flexGrow="1" textAlign="left" onClick={navigateShop}> Shop </Button>
        </Wrap>
      </MenuWrapper>
    </ThemeProvider>
  )
};





export const BlockFooter = (props) => {
  const navigate = useNavigate();

  const navigateAbout = () => {
    navigate('/about');
  };
  const navigateResource = () => {
    navigate('/archive');
  };
  const navigateContact = () => {
    navigate('/contact');
  };
  const navigateTerms = () => {
    navigate('/terms');
  };


  return (
    <ThemeProvider theme={base}>
      <Wrap className="block-footer" justifyContent="start" flexDirection={["row"]} flexWrap="wrap" zIndex="1" width={[1]} pt="none" pb="none" bg="#000" color="grey">

        <Button width={[1 / 2, 1 / 2, 1 / 4, 1 / 4]} padding="snug" fontFamily={[0]} fontSize={base.text.size.M} fontWeight={base.text.weight.reg} variant="footer" textAlign="left" onClick={navigateAbout}> About </Button>
        <Button width={[1 / 2, 1 / 2, 1 / 4, 1 / 4]} padding="snug" fontFamily={[0]} fontSize={base.text.size.M} fontWeight={base.text.weight.reg} variant="footer" textAlign="left" onClick={navigateResource}> Resource </Button>
        <Button width={[1 / 2, 1 / 2, 1 / 4, 1 / 4]} padding="snug" fontFamily={[0]} fontSize={base.text.size.M} fontWeight={base.text.weight.reg} variant="footer" textAlign="left" onClick={navigateContact}> Contact </Button>
        <Button width={[1 / 2, 1 / 2, 1 / 4, 1 / 4]} padding="snug" fontFamily={[0]} fontSize={base.text.size.M} fontWeight={base.text.weight.reg} variant="footer" textAlign="left" onClick={navigateTerms}> Terms </Button>

        <Button width={[1, 1, 1, 1]} padding="snug" fontFamily={[0]} fontSize={base.text.size.M} fontWeight={base.text.weight.reg} variant="footerDisable" textAlign="left"> © 2026 MHZ Design Office. All rights reserved.</Button>
      </Wrap>
    </ThemeProvider>
  )
};


export const BlockThumb = (props) => {
  const { width, imgHover, ...restProps } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Detect mobile on mount and resize
  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 900;
      setIsMobile(isSmallScreen);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload both images
  useEffect(() => {
    if (!props.img) return;

    const preloadImages = async () => {
      const images = [];

      // Preload primary image
      const img1 = new Image();
      img1.src = props.img;
      images.push(
        new Promise((resolve) => {
          img1.onload = resolve;
          img1.onerror = resolve;
        })
      );

      // Preload hover image if provided
      if (imgHover) {
        const img2 = new Image();
        img2.src = imgHover;
        images.push(
          new Promise((resolve) => {
            img2.onload = resolve;
            img2.onerror = resolve;
          })
        );
      }

      await Promise.allSettled(images);
      setImagesLoaded(true);
    };

    preloadImages();
  }, [props.img, imgHover]);

  // Determine which image to display
  const displayImage = isMobile && imgHover ? imgHover : isHovered && imgHover ? imgHover : props.img;

  return (
    <ThemeProvider theme={base}>
      <ThumbCard
        {...restProps}
        width={width}
        to={props.to}
        onMouseEnter={() => imgHover && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        backgroundImage={displayImage}
        backgroundImageHover={imgHover}
      >
        <ImgBlock2 src={displayImage} to={props.linkto} side={props.side} />
        {/* Padding lives on the block, not on the text: Type carries no space
            props, so p="snug" here was being dropped on the floor. */}
        <ThumbnailTitle $isHovered={Boolean(isHovered && imgHover)}>
          <Type fontFamily={[0]} size="M">{props.title}</Type>
        </ThumbnailTitle>
      </ThumbCard>
    </ThemeProvider>
  )
}

export const BlockThumbFont = (props) => {
  const { width, ...restProps } = props;
  return (
    <ThemeProvider theme={base}>
      <ThumbnailFont {...restProps} width={width} height={['auto']} display="flex" flexDirection="column" to={props.to}>
        <ImgBlock2 height={props.height} src={props.img} to={props.linkto} side={props.side} />
        <Container display="flex" flexDirection="row" justifyContent={"space-between"} alignItems={["center"]}>
        <Type fontFamily={[0]} size="S" p="snug" >{props.title}</Type>
        <Button padding="snug" fontFamily={[0]} size="S" variant="footer" to={props.to} > BUY IT </Button>
        </Container>
      </ThumbnailFont>
    </ThemeProvider>
  )
}

export const BlockThumbFull = (props) => {
  const { width, ...restProps } = props;
  return (
    <ThemeProvider theme={base}>
      <Thumbnail {...restProps} width={width} height={["350px","400px", "450px","500px"]}to={props.to}>
        <Type fontFamily={[0]} size="S" p="snug">{props.title}</Type>
      </Thumbnail>
    </ThemeProvider>
  )
}


export const BlockType = (props) => {
  return (
    <ThemeProvider theme={base}>
      <Wrap pl="snug" flexDirection={['column', 'column', 'column', 'column']} flexWrap="wrap" justifyContent="center" width={[3 / 4, 2 / 3, 1 / 2, 1 / 2]}>
        <Type as="h2" fontFamily={[0]} size="S" >{props.title}</Type>
        <Type fontFamily={[0]} color={'blk40'} size="S">{props.body}</Type>
      </Wrap>
    </ThemeProvider>
  )
}



export const BlockHeader = ({ title, description, buttonText, handleBuyClick, zIndex }) => {
  return (
    <ThemeProvider theme={base}>
      <Wrap width={["100%", "100%", "100%", "100%"]} position='fixed' top='0' flexDirection={['row']} zIndex='999' height={["64px", "64px", "64px", "64px"]}>
        <Wrap flexGrow={["6", "6", "6", "6"]} p="snug" flexDirection='column' justifyContent="center">
          <Type as="h2" fontFamily={[0]} size="S" fontWeight='600'>{title}</Type>
          <Type as="h2" fontFamily={[0]} size="S" fontWeight='400'>{description}</Type>
        </Wrap>
        <Wrap p="tight">
          <Button fontFamily={[0]} size="S" p="snug" flexShrink="1" fontWeight='600' variant="primaryR" fle onClick={handleBuyClick} >{buttonText}</Button>
        </Wrap>
      </Wrap>
    </ThemeProvider>
  )
}

export const BlockList = ({ title, description }) => {
  return (
    <ThemeProvider theme={base}>
      <Wrap width={["100%"]} borderBottom="1px grey solid">
        <Wrap flexGrow='4' width={["50%"]} pt="tight" pb="tight" flexDirection='row' justifyContent="left">
          <Type fontFamily={[0]} color={['blk70']} variant='' size="S">{title}</Type>
        </Wrap>
        <Wrap flexGrow='4' width={["50%"]} pt="tight" pb="tight" flexDirection='row' justifyContent="left">
          <Type fontFamily={[0]} color={['blk50']} variant='' size="S">{description}</Type>
        </Wrap>
      </Wrap>
    </ThemeProvider>
  )
}
