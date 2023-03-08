import React from 'react';
import { useContext } from "react";
import { WordleContext } from '../Wordle';
import { TextGame } from './gameOverStyled'

const GameOver = () => {
    const { gameOver, currAttempt, correctWord } = useContext(WordleContext)
    return (
        <TextGame className='gameOver'>
            <h3>{gameOver.guessedWord ? "¡Has encontrado la palabra!" : "Has fallado"}</h3>
            <h1>Correct: {correctWord}</h1>
            {gameOver.guessedWord && (<h3> Has acertado en {currAttempt.attempt} intentos</h3>)}
        </TextGame>
    )
}

export default GameOver
