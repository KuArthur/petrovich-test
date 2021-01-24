import React from "react";

import "./Button.scss";

export default function Button(props) {
    return (
       <div className = "Button" data-url = "/cart/" data-product-id = {props.productId}>В корзину</div>
    )
}