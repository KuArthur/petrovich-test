import React from 'react';

import cn from "classnames"

import './Photo.scss';

export default function Photo(props) {
    return (
        <div className = {cn('Photo')}>
            <a href = "#" className = {cn('Photo--link')}>
                <img src = {props.img_url} className = "Photo--img"></img>
            </a>
        </div>
    )
}