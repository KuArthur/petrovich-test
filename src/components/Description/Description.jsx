import React from "react";

import cn from "classnames";
import "./Description.scss";

export default function Description(props) {
    let tags = [];
    const code = props.code.split("00000").join("");
    
    // props.tags.split("\n").forEach(el => {
    //     tags.push(
    //         <a href = "#" className = {cn("Description--tag")}>{el}</a>
    //     )
    // });

    return (
        <div className = {cn("Description")}>
            <span className = {cn("Description--code")}>Код: {code}</span>
            <a href = '#' className = {cn("Description--title")}>{props.description}</a>
            {/* <div className = {cn("Description--tags")}>
                <span>Могут понадобиться: </span>
                {tags}
            </div> */}
        </div>
        
    )
}