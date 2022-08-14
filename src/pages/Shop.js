import React from "react";
import L01 from '../component/L01';
import p1 from '../assets/product/1.jpg';
import p2 from '../assets/product/2.jpg';
import p3 from '../assets/product/3.jpg';

const images1 = [
  p2,
  p1,
  p3
]



function Shop() {
  return (
    <div>
      <L01  href="https://buy.stripe.com/test_5kA5okgPOeIlfEkbII" />
    </div>
  );
}

export default Shop;
