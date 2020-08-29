import React from 'react'

const Ingredients = (props) => {
    return (
        <>
        <div className="ingredients-title">
            <h2>{props.title}</h2>
        </div>

        <div className="ingredients-description">
            <span>{props.description}</span>
        </div>
    </>
    )
};

export { Ingredients }