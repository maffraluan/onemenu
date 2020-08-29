import React from 'react'

import './styles.css'

const ImageComp = () => {
    const imageSadia = require('../../assets/sadia.png');
    const iconArrowLeft = require('../../assets/arrow-left.svg');
    const iconHeart = require('../../assets/heart.svg');
    const iconShare = require('../../assets/share.svg');

    return (
        <div className="image-component">
            <div className="banner">
                <img src={imageSadia} alt="" />
            </div>
            
            <div className="header">
                <div className="action-icon">
                    <img className="icon-style" src={iconArrowLeft} alt="voltar" />
                    <div className="icons">
                        <img className="icon-style" src={iconHeart} alt="Coração" style={{ marginRight: '2rem' }} />
                        <img className="icon-style" src={iconShare} alt="Compartilhar" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export { ImageComp }