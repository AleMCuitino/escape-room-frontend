import React from 'react'
import ContainerMain from '@/components/container/ContainerMain'
import Memorize from '@/components/memorize/Memorize'

/*
** ADA LOVELACE
** #Memorize Game 🟢
** #DB Json
** #Logic Game
*/

const StageOne = () => {
  return (

    <ContainerMain 
    initText="Ada_lovelace bloque introductorio"
    locationYear="1837"
    locationCity="Londres"
    logicGame="problema lógico"
    interactiveGame={<Memorize/>}
    clueOne="Pista 1"
    clueTwo="Pista 2"
    solution=""
    />

  )
}

export default StageOne