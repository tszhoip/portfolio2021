import React from "react";
import Product from '../component/Product';
import Product1 from '../component/Product1';
import d1 from '../assets/d-1.jpg';

const images1 = [
  d1,
  d1,
  d1
]



function Shop() {
  return (
    <div>
      <Product images={images1} objfit="cover" t1="Duo Passport Case" t2="leather" t3="$80" href="https://buy.stripe.com/test_5kA5okgPOeIlfEkbII"/>
      <Product1  href="https://buy.stripe.com/test_5kA5okgPOeIlfEkbII" />
    </div>
  );
}

export default Shop;
