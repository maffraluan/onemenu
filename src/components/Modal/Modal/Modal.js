import React, { useState } from 'react'

import '../styles.css'
import { Ingredients } from '../Ingredients/Ingredients';
import { TableNutri } from '../TableNutri/TableNutri';
import { TextInfo } from '../TextInfo/TextInfo';

const Modal = (props) => {
    const arrowDown = require('../../../assets/arrow-down.svg');
    const arrowUp = require('../../../assets/arrow-up.svg');
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div className="modal-content">
            <div className="info-icon">
                <h2>Infomações</h2>
                <img onClick={handleToggle} src={!isOpen ? arrowDown : arrowUp} alt="Arrow Down" />
            </div>

            {isOpen &&
                <>
                    <div className="render-components">
                        <Ingredients
                            title="Ingredientes"
                            description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual form of "
                        />

                        <TableNutri
                            title="Table Nutricional"
                            description="Porção de 260g"
                        />

                        <TextInfo />
                    </div>
                </>
            }
        </div>
    )
};

export { Modal }