import React from "react";

import "./Tooltip.scss";

export default function Tooltip(props) {

    return (
        <div className = "Tooltip">
            <p className = "Tooltip--text">Продается упаковками:<br/>1 упак. = 2.47 м. кв.</p> 
        </div>
    )
}

// данные о м. кв. в product.json отсутствуют, поэтому везде использую данные значения