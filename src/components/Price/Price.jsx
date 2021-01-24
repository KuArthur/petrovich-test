import {React, useState} from "react";

import cn from "classnames";

import "./Price.scss";

export default function Price(props) {
    const [index,setIndex] = useState(0);
    
    const price = index === 0 ? Math.floor(props.goldPrice * 100) / 100 : Math.floor(props.retailPrice * 100) / 100 ;
    // const retailPrice = Math.floor(props.retailPrice * 100) / 100;
    // const points = Math.floor(props.retailPrice * 100) / 100;

    const handleClickUnits = index => {
        setIndex(index);
    }

    const unitsName = ["За м. кв.", "За упаковку"];

    const units = unitsName.map((el,i) => {
        return(
        <div key = {i} 
             className = {cn("Price--unit", index === i ? "Price--unit-active" : '')} onClick = {() => handleClickUnits(i)}>
                    <p className = "Price--unitText">{el}</p>
        </div>
        )
    })

    return (
        <div className = "Price">
            <div className = "Price--wrapper">
                <span className = "Price--clubCartText">По карте клуба</span>
                <div className = "Price--prices">
                    <span className = "Price--price-type-gold">{price} &#8381;</span> {/*svg ruble*/}
                    <span className = "Price--price-type-retail">{price} &#8381;</span>
                </div>
            </div>
        <span className = "Price--points">Можно купить за {props.points} балла</span>
            <div className = "Price--units">
                {units}
            </div>
        </div>
    )
}