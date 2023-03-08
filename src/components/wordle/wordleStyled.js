import styled from "styled-components";

export const WordleMain = styled.div`
    text-align: center;
    background-color: #121212;
    width: 100%;
    height: 100%;
    /* display: flex; */
    color: white;

body {
    padding: 0%;
    margin: 0;
    width: 100%;
    height: 100%;
}

.game {
    width: 100vw;
    height: calc(100vh - 170px);
    display: flex;
    align-items: center;
    padding-top: 50px;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
}

.board {
    width: 20vw;
    height: 50vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
}

.row {
    flex: 10%;
    display: flex;
    flex-direction: row;
    margin: 1px;
}

.letter {
    flex: 10%;
    height: 5vh;
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
