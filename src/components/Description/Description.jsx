import React from 'react';

import './Description.scss';

export default function Description(props) {
    return (
        <a href = '#' className = 'Description'>{props.description}</a>
    )
}