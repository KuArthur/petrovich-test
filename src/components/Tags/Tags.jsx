import React from "react";

import cn from "classnames";

import "./Tags.scss";

export default function Tags(props) {
    let tags = [];
    
    props.tags.split("\n").forEach(el => {
        tags.push(
            <a href = "#" className = {cn("Tags--tag")}>{el}</a>
        )
    });
    console.log(tags);
    return (
        <div className = {cn("Tags")}>
            <span>Могут понадобиться: </span>
            {tags}
        </div>
    )
}