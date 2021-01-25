import React from "react";

import cn from "classnames";

import "./Status.scss";

export default function Status(props) {
    const status = props.status === true ? "Наличие" : "Отсутствует";
    return (
        <a href = "#" className = {cn("Status",props.status ? "Status-active-inStock":"Status-active-outStock")}>{status}</a>
    )
}

// данные о м. кв. в product.json отсутствуют, поэтому везде использую данные значения