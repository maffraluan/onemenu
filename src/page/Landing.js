import React from 'react'
import { ImageComp, FoodName, Allergic, Modal, Button } from '../components'

import './styles.css'

const Landing = () => {

    return (
        <div className="main-content">
            <ImageComp />
            <FoodName 
                price="R$ 65,90"
                title="Salsicha com Bacon"
                description="Salsicha feito com amor e carinho. 
                Bom pra hotdog! Bora fazer uma reuniao e comer hotdog, brothers?" />

            <Allergic 
                title="Alérgicos"
                description="Pode comer à vontade, parça! Hotdog é dos brabos!"
            />

            <Modal />

            <div className="alteration">
                <span>Sugerir uma alteraçāo</span>
            </div>

            <Button />
        </div>
    )
}

export { Landing }