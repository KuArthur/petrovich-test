import {React, useState} from "react";

import cn from "classnames";

import "./Price.scss";

export default function Price(props) {
    const [index,setIndex] = useState(0);
    
    const goldPrice = props.goldPrice;
    const goldPriceAlt = Math.floor(props.goldPriceAlt * 100) / 100;
    const retailPrice = props.retailPrice;
    const retailPriceAlt = Math.floor(props.retailPriceAlt * 100) / 100;
    
    const goldPriceSwitch = index === 0 ? goldPriceAlt : goldPrice;
    const retailPriceSwitch = index === 0 ? retailPriceAlt : retailPrice;

    const handleClickUnits = index => {
        setIndex(index);
    }

    let unitsName = [];
    if(props.unit === "упак.") {
        unitsName = ["За м. кв.", "За упаковку"]
    } else unitsName = ["За шт."]

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
                    <span className = "Price--price-type-gold">{goldPriceSwitch} &#8381;</span> {/*svg ruble*/}
                    <span className = "Price--price-type-retail">{retailPriceSwitch} &#8381;</span>
                </div>
            </div>
        <span className = "Price--points">Можно купить за {props.points} балла</span>
            <div className = "Price--units">
                {units}
            </div>
        </div>
    )
}