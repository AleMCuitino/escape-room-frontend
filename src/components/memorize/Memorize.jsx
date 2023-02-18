import React from 'react'
import Memorize_card from '@/components/memorize/card/Memorize_card'
import Memorize_bar from '@/components/memorize/score_bar/Memorize_bar'
import Memorize_board from '@/components/memorize/board/Memorize_board'

/*
Layout de memorize
    tiene que contener todos los elementos   
    tiene que controlar los estados
*/
const Memorize = () => {
  return (
    <>   
        <Memorize_bar/>
        <Memorize_board cards={<Memorize_card/>}/>        
    </>
  )
}

export default Memorize