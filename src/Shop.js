import React from "react";
import Product from './component/Product';



const images2 = [
  'https://source.unsplash.com/weekly?sky&w=1024&h=768',
  'https://source.unsplash.com/weekly?sky&w=1024&h=768',
  'https://source.unsplash.com/weekly?sky&w=1024&h=768',
  'https://source.unsplash.com/weekly?sky&w=1024&h=768',
]

function Shop() {
  return (
    <div>
      <Product images={images2} title="Duo Passport Case" type="leather" year="$80" href="https://buy.stripe.com/test_5kA5okgPOeIlfEkbII"/>
      <Product images={images2} title="Innocell" type="website" year="2020" href="https://buy.stripe.com/test_5kA5okgPOeIlfEkbII" />
      <Product images={images2} title="Innocell" type="website" year="2020" href="https://buy.stripe.com/test_5kA5okgPOeIlfEkbII" />
    </div>
  );
}

export default Shop;
