import React from 'react';
import ContainerMain from '@/components/container/ContainerMain';
import Wordle from '@/components/wordle/Wordle';

/*
** ENIAC
** #Wordle Game 🟢
** #DB Json
** #Logic Game
*/

const StageOne = () => {
  return (

    <ContainerMain 
    initText="ENIAC bloque introductorio"
    locationYear="1946"
    locationCity="Filadelfia"
    logicGame="problema lógico"
    interactiveGame={<Wordle/>}
    clueOne="Pista 1"
    clueTwo="Pista 2"
    solution=""
    />

  )
}

export default StageThree