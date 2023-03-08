import React, { useContext } from 'react'
import Memorize_card from '../card/Memorize_card';
import MemorizeContext from '../context/MemorizeContext';



const Memorize_board = () => {

const {flipCard, boardfill, shuffledArray, finishDisplay, ref } = useContext(MemorizeContext); 


  return (
    <section>
            <div className="containerM">
                <div className="board" onClick={flipCard} ref={ref}>
                    { boardfill ? 
                    
                   shuffledArray.map((dbMemorize, index) => {
                    return  <Memorize_card  color={dbMemorize.color} key={index} id={dbMemorize.id} letter={dbMemorize.letter} differentiator={dbMemorize.differentiator}/>
                     
                    }) 
             
                    : "" }
                   
                </div>
                <div className={`finish-display ${finishDisplay}`}>
                    
                </div>
            </div>
    </section>
  )
}

export default Memorize_board