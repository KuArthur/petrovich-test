import {React, useState} from "react";

import "./Stepper.scss";

export default function Stepper(props) {
    const [value, setValue] = useState(1)

    const handleChangeValue = (e) => {
        setValue(Number(e.target.value))
    }

    return (
        <div className = "Stepper">
            <input className = "Stepper--input" value = {value} onChange = {handleChangeValue} />
            <div className = "Stepper--buttons">
                <div className = "Stepper--button-arrow-up" onClick = {() => setValue(value + 1)} />
                <div className = "Stepper--button-arrow-down" onClick = {() => {if(value > 1)  setValue(value - 1)}} />
            </div>
        </div>
    )
}