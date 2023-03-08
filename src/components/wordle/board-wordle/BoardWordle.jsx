import "../wordleStyled.js";
import React, { useContext, useRef, useEffect } from 'react'
import Letter from "../letter/Letter";
import { WordleContext } from "../Wordle.jsx";

function BoardWordle() {
    const { focusWordle, setFocusWordle } = useContext(WordleContext);
    const divRef = useRef(null);
    useEffect(() => {
        // Función de manejo de clic en el cuerpo del documento
        function handleClickOutside(event) {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setFocusWordle(false)
                console.log('Clic realizado fuera del div');
            }
        }

        // Agregar evento de clic al cuerpo del documento al montar el componente
        document.addEventListener('click', handleClickOutside);

        // Eliminar evento de clic al cuerpo del documento al desmontar el componente
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [divRef]);

    return (
        <div className={focusWordle ? 'board-focus' : 'board'} onClick={() => setFocusWordle(true)} ref={divRef}>
            <div className="row">
                <Letter letterPos={0} attemptVal={0} />
                <Letter letterPos={1} attemptVal={0} />
                <Letter letterPos={2} attemptVal={0} />
                <Letter letterPos={3} attemptVal={0} />
                <Letter letterPos={4} attemptVal={0} />
            </div>
            <div className="row">
                <Letter letterPos={0} attemptVal={1} />
                <Letter letterPos={1} attemptVal={1} />
                <Letter letterPos={2} attemptVal={1} />
                <Letter letterPos={3} attemptVal={1} />
                <Letter letterPos={4} attemptVal={1} />
            </div>
            <div className="row">
                <Letter letterPos={0} attemptVal={2} />
                <Letter letterPos={1} attemptVal={2} />
                <Letter letterPos={2} attemptVal={2} />
                <Letter letterPos={3} attemptVal={2} />
                <Letter letterPos={4} attemptVal={2} />
            </div>
            <div className="row">
                <Letter letterPos={0} attemptVal={3} />
                <Letter letterPos={1} attemptVal={3} />
                <Letter letterPos={2} attemptVal={3} />
                <Letter letterPos={3} attemptVal={3} />
                <Letter letterPos={4} attemptVal={3} />
            </div>
            <div className="row">
                <Letter letterPos={0} attemptVal={4} />
                <Letter letterPos={1} attemptVal={4} />
                <Letter letterPos={2} attemptVal={4} />
                <Letter letterPos={3} attemptVal={4} />
                <Letter letterPos={4} attemptVal={4} />
            </div>
            <div className="row">
                <Letter letterPos={0} attemptVal={5} />
                <Letter letterPos={1} attemptVal={5} />
                <Letter letterPos={2} attemptVal={5} />
                <Letter letterPos={3} attemptVal={5} />
                <Letter letterPos={4} attemptVal={5} />
            </div>
        </div>
    )
}

export default BoardWordle;
