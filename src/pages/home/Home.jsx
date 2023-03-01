import React from 'react';
import Wordle from '../../components/wordle/Wordle';
import Puzzle from '../../components/puzzle/Puzzle';
import Memorize from '../../components/memorize/Memorize';

function Home() {
    return (
        <div>
            <Wordle />
            <h1> Hola Escape-room </h1>
            <Memorize/>            
            <Puzzle />
        </div>
    )
}

export default Home
