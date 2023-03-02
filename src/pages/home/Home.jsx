import React from 'react';
import Wordle from '../../components/wordle/Wordle';
import Puzzle from '../../components/puzzle/Puzzle';
import Memorize from '../../components/memorize/Memorize';

function Home() {
    return (
        <div>
            <Wordle />
            <Memorize/>            
            <Puzzle />      
        </div>
    )
}

export default Home
