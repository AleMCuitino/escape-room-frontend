import styled from "styled-components";
import {colorVar}  from '@/styled-components/variables.js';

export const WordleMain = styled.div`
.game {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.board {
    display: flex;
    flex-direction: column;
    
    .letter {
        border: ${colorVar.digital} 2px solid;
        backdrop-filter: blur(5px);
        border: 1px solid rgb(0 255 255 / 18%);
        box-shadow: 0 8px 32px 0 rgb(29 170 169 / 37%);
        }   
}

.board-focus {
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 32px 0 rgb(255 255 255 / 25%);
}

.row {
    display: flex;
    flex-direction: row;
    margin: 1px;
}

.letter {
    flex: 10%;
    height: 5vh;
    width: 5vw;
    border: 2px solid grey;
    margin: 2px;
    display: grid;
    place-items: center;
    font-size: 30px;
    font-weight: bolder;
    color: white;
    font-family: 'Fira', monospace;
}

#correct {
    background-color: #528d4e;
}

#almost {
    background-color: #b49f39;
}

#error {
    background-color: #3a393c;
}

.keyboard {
    width: 70vw;
    height: 30vh;
    margin-top: 10vh;
    display: none;
}

.line1 {
    flex: 33%;
    display: flex;
    flex-direction: row;
    display: flex;
    justify-content: center;
    margin: 5px;
}

.line2 {
    flex: 33%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5px;
}

.line3 {
    flex: 33%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5px;
}

.key {
    width: 40px;
    height: 60px;
    margin: 5px;
    border-radius: 4px;
    display: grid;
    place-items: center;
    font-size: 20px;
    background-color: grey;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
}

#big {
    width: 100px;
}

#disabled {
    background-color: #3a393c;
}

`
