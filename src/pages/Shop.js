import React from "react";
import Product from '../component/Product';
import d1 from '../assets/d-1.jpg';

const images1 = [
  d1,
  d1,
  d1
]

const images2 = [
  'https://source.unsplash.com/weekly?sky&w=1024&h=768',
  'https://source.unsplash.com/weekly?sky&w=1024&h=768',
  'https://source.unsplash.com/weekly?sky&w=1024&h=768',
  'https://source.unsplash.com/weekly?sky&w=1024&h=768',
]

const images3 = [
  'https://source.unsplash.com/weekly?sky&w=1024&h=768',
  'https://source.unsplash.com/weekly?sky&w=1024&h=768',
  'https://source.unsplash.com/weekly?sky&w=1024&h=768',
  'https://source.unsplash.com/weekly?sky&w=1024&h=768',
]

function Shop() {
  return (
    <div>
      <Product images={images1} objfit="cover" title="Duo Passport Case" type="leather" year="$80" href="https://buy.stripe.com/test_5kA5okgPOeIlfEkbII"/>
      <Product images={images2} title="Innocell" type="website" year="2020" href="https://buy.stripe.com/test_5kA5okgPOeIlfEkbII" />
      <Product images={images3} title="Innocell" type="website" year="2020" href="https://buy.stripe.com/test_5kA5okgPOeIlfEkbII" />
    </div>
  );
}

export default Shop;
