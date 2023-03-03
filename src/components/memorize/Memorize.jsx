import React from 'react'
import Memorize_bar from '@/components/memorize/score_bar/Memorize_bar'
import Memorize_board from '@/components/memorize/board/Memorize_board'
import { Main_memorize } from '@/styled-components/memorizeStyled'
import { MemorizeProvider } from './context/memorizeContext'


/*
Layout de memorize
    tiene que contener todos los elementos   
    tiene que controlar los estados
*/

const Memorize = () => {
  return (
   <MemorizeProvider> {/* context */}
        <Main_memorize>   {/* styled-components css */}
            <Memorize_bar/> {/* barra de datos */}
            <Memorize_board/>   {/* juego con cartas  */}    
        </Main_memorize>
    </MemorizeProvider>
  )
}

export default Memorize