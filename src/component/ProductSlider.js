import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"
import styled from "styled-components"

const Keen = styled.div`
 width:2500px;
 height:500px;
 max-width: 100%;
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