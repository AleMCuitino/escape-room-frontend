import React, { useEffect } from 'react';
import "./Wordle.css";
import Board from "../../components/wordle/board-wordle/BoardWordle";
import Keyboard from "./keyboard-wordle/KeyboardWordle";
import { createContext, useState } from "react";
import { boardDefault, generateWordSet } from "../../utilities/wordle/Words";
import GameOver from './game-over/GameOver';

export const WordleContext = createContext();

function Wordle() {
    const [board, setBoard] = useState(boardDefault);
    const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
    const [wordSet, setWordSet] = useState(new Set());
    const [disabledLetters, setDisabledLetters] = useState([]);
    const [correctWord, setCorrectWord] = useState("")
    const [gameOver, setGameOver] = useState({
        gameOver: false, 
        guessedWord: false
    })

    // const correctWord = "PASTA";

    useEffect(() => {
        generateWordSet().then((words) => {
            setWordSet(words.wordSet);
            setCorrectWord(words.todaysWord);
            // console.log(wordSet)
            
        });
    }, []);

    const onSelectLetter = (keyVal) => {
        if (currAttempt.letterPos > 4) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
        setBoard(newBoard);
        setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
    }

    const onDelete = () => {
        if (currAttempt.letterPos === 0) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
        setBoard(newBoard)
        setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
    }

    const onEnter = () => {
        if (currAttempt.letterPos !== 5) return;
        let currWord = "";
        for (let i = 0; i < 5; i++) {
            currWord += board[currAttempt.attempt][i];
        }
        if (wordSet.has(currWord.toLowerCase())) {
            setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
        } else {
            alert("Word not found");
        }

        if (currWord === correctWord) {
            setGameOver({gameOver: true, guessedWord: true})
            return;
        }

        if (currAttempt.attempt === 5) {
            setGameOver({gameOver: true, guessedWord: false });
        }
    };

    return (
        <div className="wordle">
            <nav>
                <h3>Wordle Board</h3>
            </nav>
            <WordleContext.Provider
                value={{ 
                    board, 
                    setBoard, 
                    currAttempt, 
                    setCurrAttempt, 
                    onSelectLetter, 
                    onDelete, 
                    onEnter, 
                    correctWord, 
                    disabledLetters,
                    setDisabledLetters, 
                    gameOver,
                    setGameOver 
                    }}
            >
                <div className='game'>
                    <Board />
                    {gameOver.gameOver ? <GameOver /> : <Keyboard />}
                </div>
            </WordleContext.Provider>
        </div>
    )
}

export default Wordle;
