import React, { useContext } from 'react'
import Memorize_card from '../Card/Memorize_card';
import MemorizeContext from '../context/memorizeContext';

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



const Memorize_board = () => {

const {flipCard, boardfill, shuffledArray, finishDisplay } = useContext(MemorizeContext); 


  return (
    <section>
            <div className="container">
                <div className="board" onClick={flipCard}>
                    { boardfill ? 
                    
                    shuffledArray.map((emoji) => {

                      <Memorize_card id={emoji.id} emoji={emoji.emoji}/>
                    })
              
                    : "no hay nada" }
                </div>
                <div className={`finish-display ${finishDisplay}`}>
                    <p>🎉</p>
                    <h2>Has terminado el juego!</h2>
                </div>
            </div>
    </section>
  )
}

export default Memorize_board