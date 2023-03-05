import React from 'react';
import { useContext } from "react";
import { WordleContext } from '../Wordle';
import { TextGame } from './gameOverStyled'

const GameOver = () => {
    const { gameOver, currAttempt, correctWord } = useContext(WordleContext)
    return (
        <TextGame className='gameOver'>
            <h3>{gameOver.guessedWord ? "You correctly guessed" : "You feiled"}</h3>
            <h1>Correct: {correctWord}</h1>
            {gameOver.guessedWord && (<h3> You guessed in {currAttempt.attempt} attempts</h3>)}
        </TextGame>
    )
}

export default GameOver
