import React from "react";

import cn from "classnames";
import "./Description.scss";

export default function Description(props) {
    
    return (
        <div className = {cn("Description")}>
            <a href = '#' className = {cn("Description--title")}>{props.description}</a>
        </div>
        
    )
}