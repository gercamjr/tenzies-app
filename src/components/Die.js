import React from 'react';

export default function Die(props) {
    return (
        <div className="die">
            <h3 className="die__num">{props.value}</h3>
        </div>
    )
}