import React from 'react'
import ContainerMain from '@/components/container/ContainerMain'
import Puzzle from '@/components/puzzle/Puzzle'

/*
** HEDY LAMARR
** #Sliding Puzzle 🟢
** #DB Json
** #Logic Game
*/

const StageTwo = () => {
  return (

    <ContainerMain 
    initText="Os encontráis en Hollywood"
    locationYear="1942"
    locationCity="Hollywood"
    logicGame="problema lógico"
    interactiveGame={<Puzzle/>}
    clueOne="Pista 1"
    clueTwo="Pista 2"
    solution="Lamarr"
    />

  )
}

export default StageTwo