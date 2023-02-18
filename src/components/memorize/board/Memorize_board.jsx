import React from 'react'

/*
Tablero de juego
    tiene que mostrar las cartas
    tiene que mostrar una copia de las cartas
    tiene que barajarlas
    tiene que poder hacer match
    tiene que volver al juego si no hay match
    tiene que quedarse las cartas frontalmente si hay match
    tiene que poder ganar
    tiene que poder perder
*/

const Memorize_board = (props) => {
  return (
    <section>
            <div class="container">
                <div class="board">
                    {props.cards}
                </div>
                <div class="finish-display hide">
                    <p>🎉</p>
                    <h2>Has terminado el juego!</h2>
                </div>
            </div>
    </section>
  )
}

export default Memorize_board