import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styled from "styled-components";
import { width } from "styled-system";

const Keen = styled.div`
 height: auto;
 ${width}
`

export const ProductSliderFull = (props) => {
  const [sliderRef] = useKeenSlider({ loop: true })
  const hasImages = Array.isArray(props.images)

  return (
    <Keen ref={sliderRef} className="keen-slider">
      {hasImages && props.images.map((imageUrl, index) =>
        <div className="keen-slider__slide" key={index} original={imageUrl}>
          <img src={imageUrl} alt={imageUrl} objfit={props.objfit} />
        </div>)}
    </Keen>
  )
}

