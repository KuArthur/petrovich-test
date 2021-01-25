import React from "react";

import cn from "classnames";

import "./Tags.scss";

export default function Tags(props) {
    let tags = [];
    
    props.tags.split("\n").forEach((el,i) => {
        tags.push(
            <a key = {"tags"+i} href = "#" className = {cn("Tags--tag")}>{el}</a>
        )
    });

    return (
        <div className = {cn("Tags")}>
            <span className = {cn("Tags--listHead")}>Могут понадобиться: </span>
            {tags}
        </div>
    )
}