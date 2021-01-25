import React from "react";

import "./Code.scss";

export default function Code(props) {
    const code = props.code.split("00000").join("");

    return (
         <span className = "Code">Код: {code}</span>
    )
}