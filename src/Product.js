import "./Product.scss";

import PRODUCTS from "./lib/products.json";

import Photo from "./components/Photo/Photo";
import Description from "./components/Description/Description";
import Tags from "./components/Tags/Tags";
import Stepper from "./components/Stepper/Stepper";
import Button from "./components/Button/Button";
import Price from "./components/Price/Price";
import Tooltip from "./components/Tooltip/Tooltip";
import Status from "./components/Status/Status";
import Code from "./components/Code/Code";

// img_url = PRODUCTS[].primaryImageUrl

function Product() {

  const products = [];

  PRODUCTS.forEach((product,i) => {
    products.push(
      <div key = {product.productId + i} className = "Product">
        
        <div className = "Product--content">
          <div className = "Product--firstRow">
            <Code code = {product.code} />
            <Status status = {product.isActive} />
          </div>
          <div className = "Product--secondRow">
            <div className = "Product--info">
              <Description description = {product.title} />
              <div className = "Product--tags">
                <Tags tags = {product.assocProducts} />
              </div>
              
            </div>
            <div className = "Product--price">
              <Price  goldPriceAlt = {product.priceGoldAlt}
                      retailPriceAlt = {product.priceRetailAlt}
                      goldPrice = {product.priceGold}
                      retailPrice = {product.priceRetail}
                      points = {231.75}
              />
              <div className = "Product--tooltip">
                <Tooltip />
              </div>
              <div className = "Product--buttons">
                <Stepper />
                <Button productId = {product.productId} />
              </div>
            </div>
          </div>
        </div>
        <div className = "Product--photo">
          <Photo img_url = {product.primaryImageUrl} />
        </div>
    </div>
    )
  })
  
  return (
    
    <div className = "Products">
      {products}
    </div>
  )
}

export default Product;
