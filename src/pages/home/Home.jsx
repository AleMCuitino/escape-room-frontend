import React from 'react';
import Wordle from '../../components/wordle/Wordle';
import Memorize from '../../components/memorize/Memorize'

function Home() {
    return (
        <div>
            <Wordle />
            <h1> Hola Escape-room </h1>
            <Memorize/>            
        </div>
    )
}

export default Home
