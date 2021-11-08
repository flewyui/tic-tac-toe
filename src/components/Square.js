import React from 'react';
import '../style.css';

const Square = (props) => {
    return (
        <button className="square" onClick={props.onClick}>
            <p className="mark">{props.value}</p>
        </button>
    )
}

export default Square;