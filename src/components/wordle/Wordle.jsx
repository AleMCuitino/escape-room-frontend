import React from 'react';
import "./Wordle.css";
import Board from "../../components/wordle/board-wordle/BoardWordle";
import Keyboard from "./keyboard-wordle/KeyboardWordle";
import { createContext, useState} from "react";
import { boardDefault } from "../../utilities/wordle/Words";


export const WordleContext = createContext();

function Wordle() {
    const [board, setBoard] = useState(boardDefault);
    return (
        <div className='wordle'>
            <nav>
                <h3>Wordle Board</h3>
            </nav>
            <WordleContext.Provider value={{ board, setBoard}}>
                <Board />
                <Keyboard /> 
            </WordleContext.Provider>
        </div>
    )
}

export default Wordle;
