import React, { useContext } from 'react'
import MemorizeContext from '../context/MemorizeContext'
/*
Bloque de puntos
    tiene que mostrarse el numero de intentos
    tiene que poder iniciar y reiniciar el juego 
*/


const Memorize_bar = () => {

   const {handleClick_InitGame, scoreCounter } = useContext(MemorizeContext)

  return (
    <>
        <div className="containerM score-container">
            {/* <button className="start-btn" onClick={handleClick_InitGame}>Empezar el juego</button> */}
            <div className="score-board">
                <div className="score-board__item">
                    <p>Puntos</p>
                    <p className="score-board__item-score">{scoreCounter}</p>
                </div>
               
            </div>
        </div>
    </>
  )
}

export default Memorize_bar