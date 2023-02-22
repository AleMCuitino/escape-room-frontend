import React, { useContext } from 'react';
import { WordleContext } from "../Wordle"

function Key({ keyVal, bigKey }) {
    const {onDelete, onSelectLetter, onEnter } = useContext(WordleContext);

    const selectLetter = () => {
        if (keyVal === "ENTER") {
            onEnter();

        } else if (keyVal === "DELETE") {
            onDelete();

        } else {
            onSelectLetter(keyVal);
        }
    };
    return (
        <div className='key' id={bigKey && "big"} onClick={selectLetter}>
            {keyVal}
        </div>
    )
}

export default Key
