import React, { useEffect } from 'react';
import { WordleMain } from "./wordleStyled.js";
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

    const [focusWordle, setFocusWordle] = useState(false);

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
        <WordleMain>
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
                    setGameOver,
                    focusWordle,
                    setFocusWordle 
                    }}
            >
                <div className='game col-6 mx-auto mb-4'>
                    <h6>Haz click a continuación:</h6>
                    <Board />
                    {gameOver.gameOver ? <GameOver /> : <Keyboard />}
                </div>
            </WordleContext.Provider>
        </WordleMain>
    )
}

export default Wordle;
