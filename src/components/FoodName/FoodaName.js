import React from 'react'

import './styles.css'

const FoodName = (props) => {
    return (
        <>
            <div className="title">
                <h2>{props.title}</h2>
                <h2>{props.price}</h2>
            </div>

            <div className="description">
                <p>{props.description}</p>
            </div>
        </>
    )
}

export { FoodName }