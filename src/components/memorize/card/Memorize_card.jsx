import React, { useContext } from 'react'
import MemorizeContext from '../context/memorizeContext';

/*
Cartas del juego de memorize
    tienen que tener una vista frontal
    tienen que tener una vista tracera
    tienen que mostrar letras
    se tienen que duplicar
    se tienene que barajar
*/

const Memorize_card = (props) => {

  const {ref} = useContext(MemorizeContext);

  return (
    <div className="card" ref={ref} data-identity={props.id}>
            <div className="card__front" >
               
            </div>
            <div className="card__back">
                {props.emoji}
            </div>
    </div>
  )
}

export default Memorize_card