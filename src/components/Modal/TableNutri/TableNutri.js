import React from 'react'

const TableNutri = (props) => {
    return (
        <>
            <div className="tablenutri-title">
                <h2>{props.title}</h2>
                <span>{props.description}</span>
            </div>

            <div className="d-flex-row">
                <div className="circle-progress">
                    <div className="circles">
                        <span>28%</span>
                    </div>
                    <strong>Carboidratos</strong>
                    <span>86g</span>
                </div>

                <div className="circle-progress">
                    <div className="circles">
                        <span>28%</span>
                    </div>
                    <strong>Proteinas</strong>
                    <span>86g</span>
                </div>

                <div className="circle-progress">
                    <div className="circles">
                        <span>28%</span>
                    </div>
                    <strong>Gorduras</strong>
                    <span>86g</span>
                </div>
            </div>

            <div className="progress-input">
                <div className="label-text">
                    <div>
                        <label for="file">Valor energético</label>
                        <span>564 kcal</span>
                    </div>
                    <strong>24%</strong>
                </div>
                
                <div className="progress">
                    <progress id="file" className="progress" value="24" max="100"></progress>
                </div>

                <div className="label-text">
                    <div>
                        <label for="file">Gorduras saturadas</label>
                        <span>564 kcal</span>
                    </div>
                    <strong>24%</strong>
                </div>
                
                <div className="progress">
                    <progress id="file" className="progress" value="24" max="100"></progress>
                </div>

                <div className="label-text">
                    <div>
                        <label for="file">Gorduras trans</label>
                        <span>0 kcal</span>
                    </div>
                    <strong>**</strong>
                </div>
                
                <div className="progress">
                    <progress id="file" className="progress-line" value="0" max="100"></progress>
                </div>

                <div className="label-text">
                    <div>
                        <label for="file">Fibra alimentar</label>
                        <span>564 kcal</span>
                    </div>
                    <strong>100%</strong>
                </div>
                
                <div className="progress">
                    <progress id="file" className="progress" value="100" max="100"></progress>
                </div>

                <div className="label-text">
                    <div>
                        <label for="file">Sódio</label>
                        <span>564 kcal</span>
                    </div>
                    <strong>24%</strong>
                </div>
                
                <div className="progress">
                    <progress id="file" className="progress" value="24" max="100"></progress>
                </div>
            </div>
        </>
    )
};

export { TableNutri }