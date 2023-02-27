import React, { useEffect } from 'react';
import "./Wordle.css";
import Board from "../../components/wordle/board-wordle/BoardWordle";
import Keyboard from "./keyboard-wordle/KeyboardWordle";
import { createContext, useState } from "react";
import { boardDefault, generateWordSet } from "../../utilities/wordle/Words";

export const WordleContext = createContext();

function Wordle() {
    const [board, setBoard] = useState(boardDefault);
    const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
    const [wordSet, setWordSet] = useState(new Set());
    const [disabledLetters, setDisabledLetters] = useState([]);

    const correctWord = "PASTA";

    useEffect(() => {
        generateWordSet().then((words) => {
            setWordSet(words.wordSet)
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

        // if (currWord === correctWord) {
        //     alert("Game Ended")
        // }
    };

    return (
        <div className="wordle">
            <nav>
                <h3>Wordle Board</h3>
            </nav>
            <WordleContext.Provider
                value={{ board, setBoard, currAttempt, setCurrAttempt, onSelectLetter, onDelete, onEnter, correctWord, setDisabledLetters, disabledLetters, }}>
                <div className='game'>
                    <Board />
                    <Keyboard />
                </div>
            </WordleContext.Provider>
        </div>
    )
}

export default Wordle;
