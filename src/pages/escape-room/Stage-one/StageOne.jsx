import React from 'react'
import ContainerMain from '@/components/container/ContainerMain'
import Memorize from '@/components/memorize/Memorize'
import BgLovelance from '@/assets/images/lovelace.png'

/*
** ADA LOVELACE
** #Memorize Game 🟢
** #DB Json
** #Logic Game
*/

const StageOne = () => {
  return (

    <ContainerMain
    bgImg={BgLovelance} 
    initText="Ada_lovelace bloque introductorio"
    locationYear="1837"
    locationCity="Londres"
    logicGame="problema logico"
    interactiveGame={<Memorize/>}
    clueOne="Pista 1"
    clueTwo="Pista 2"
    solution=""
    />

  )
}

export default StageOne