import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styled from "styled-components"

const Keen = styled.div`
 height: auto;
     @media only screen and (min-width : 480px) {
width: 100%;
    }
    @media only screen and (min-width : 768px) {
width: 50%;
    }
    @media only screen and (min-width : 1000px) {
      max-width: 50% ;
    }
    @media only screen and (min-width : 1800px) {
max-width: 50% ;
    }
` 

const ProductSlider = (props) => {
    const [sliderRef] = useKeenSlider({ loop: true })
    const hasImages = Array.isArray(props.images)
    
return (
  <Keen ref={sliderRef} className="keen-slider">
    {hasImages && props.images.map((imageUrl, index) => 
      <div className="keen-slider__slide" key={index} original={imageUrl}>
        <img src={imageUrl} alt={imageUrl} objfit={props.objfit} />
    </div>)}
  </Keen>
)}

export default ProductSlider;