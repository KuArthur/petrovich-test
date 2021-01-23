import "./Product.scss";

import PRODUCTS from "./lib/products.json";

// import Photo from "./components/Photo/Photo";
// import Description from "./components/Description/Description";
import Tags from "./components/Tags/Tags";

// img_url = PRODUCTS[].primaryImageUrl

function Product() {
  
  return (
    <Tags tags = {PRODUCTS[0].assocProducts} />
  );
}

export default Product;
