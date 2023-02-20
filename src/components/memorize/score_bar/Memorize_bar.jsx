import React, { useContext } from 'react'
import MemorizeContext from '../context/memorizeContext'
/*
Bloque de puntos
    tiene que mostrarse el numero de intentos
    tiene que poder iniciar y reiniciar el juego 
*/


const Memorize_bar = () => {

   const {handleClick_InitGame, scoreItem } = useContext(MemorizeContext)

  return (
    <section>
        <div className="container score-container">
            <button className="start-btn" onClick={handleClick_InitGame}>Empezar el juego</button>
            <div className="score-board">
                <div className="score-board__item">
                    <p>Puntos</p>
                    <p className="score-board__item-score">{scoreItem}</p>
                </div>
                <div className="score-board__item">
                    <p>Tiempo</p>
                    <p className="score-board__item-time">0</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Memorize_bar