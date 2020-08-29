import React from 'react'


import './styles.css'
const Allergic = props => {
    const heart = require('../../assets/heart.svg');
    return (
        <>
            <div className="allergic-title">
                <h2>{props.title}</h2>
            </div>

            <div className="allergic-icons">
                <img src={heart} alt="Heart" />
                <img src={heart} alt="Heart" />
                <img src={heart} alt="Heart" />
            </div>

            <div className="allergic-description">
                <span>{props.description}</span>
            </div>
        </>
    )
};

export { Allergic }