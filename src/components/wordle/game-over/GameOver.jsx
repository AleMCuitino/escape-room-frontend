import React from 'react'
import { WordleContext } from '../Wordle'

const GameOver = () => {
    const { gameOver, currAttempt, correctWord } = useContext(WordleContext)
    return (
        <div className='gameOver'>
            <h3>{gameOver.guessedWord ? "You correctly guessed" : "You feiled"}</h3>
            <h1>Correct: {correctWord}</h1>
            {gameOver.guessedWord && (<h3> You guessed in {currAttempt.attempt} attempts</h3>)}
        </div>
    )
}

export default GameOver
