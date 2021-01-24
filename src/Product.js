import "./Product.scss";

import PRODUCTS from "./lib/products.json";

// import Photo from "./components/Photo/Photo";
// import Description from "./components/Description/Description";
// import Tags from "./components/Tags/Tags";
// import Stepper from "./components/Stepper/Stepper";
// import Button from "./components/Button/Button";
import Price from "./components/Price/Price";

// img_url = PRODUCTS[].primaryImageUrl

function Product() {
  
  return (
    <div>
    <Price goldPrice = {345.567} retailPrice = {368.789}/>
    </div>
    
  );
}

export default Product;
