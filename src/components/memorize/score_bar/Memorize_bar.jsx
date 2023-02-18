import React from 'react'
/*
Bloque de puntos
    tiene que mostrarse el numero de intentos
    tiene que poder iniciar y reiniciar el juego 
*/


const Memorize_bar = () => {
  return (
    <section>
        <div class="container score-container">
            <button class="start-btn">Empezar el juego</button>
            <div class="score-board">
                <div class="score-board__item">
                    <p>Puntos</p>
                    <p class="score-board__item-score">0</p>
                </div>
                <div class="score-board__item">
                    <p>Tiempo</p>
                    <p class="score-board__item-time">0</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Memorize_bar