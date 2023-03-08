import React, { useContext } from 'react'
import MemorizeContext from '../context/MemorizeContext';
import { MemorizeCard } from '@/styled-components/memorizeStyled'



const Memorize_card = (props) => {

  const {ref} = useContext(MemorizeContext);

  return (
    <MemorizeCard className="cardM" ref={ref} data-identity={props.id} color={props.color}>
            <div className="card__front" >
               
            </div>
            <div className="card__back"  >
                <span>{props.letter}</span>
                <span className='simbol'>{props.differentiator}</span>
            </div>
    </MemorizeCard>
  )
}

export default Memorize_card