import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styled from "styled-components"

const Keen = styled.div`
 width:1200px;
 height:500px;
     @media only screen and (min-width : 480px) {
width: 100%;
    }
    @media only screen and (min-width : 768px) {
width: 100%;
    }
    @media only screen and (min-width : 1000px) {
max-width: 1200px;
    }
    @media only screen and (min-width : 1800px) {
max-width: 1400px;
    }
` 

const ProductSlider = (props) => {
    const [sliderRef] = useKeenSlider({ loop: true })
    const hasImages = Array.isArray(props.images)
    
return (
  <Keen ref={sliderRef} className="keen-slider">
    {hasImages && props.images.map((imageUrl, index) => <div className="keen-slider__slide"
      key={index}
      original={imageUrl}>
      <img src={imageUrl} alt={imageUrl} objfit={props.objfit} />
    </div>)}
  </Keen>
)}

export default ProductSlider;