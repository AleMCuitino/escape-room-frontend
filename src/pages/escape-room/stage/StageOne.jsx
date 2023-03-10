import React from 'react'
import ContainerMain from '@/components/container/ContainerMain'
import BgLovelance from '@/assets/images/lovelace.png'
import {LovelaceDB} from '@/pages/escape-room/stage/adaLovelace_db.jsx'

/*
** ADA LOVELACE
** #Memorize Game 🟢
** #DB Json 🟢
** #Logic Game 🟢
** #Helps
*/

const StageOne = () => {
  return (

    <ContainerMain
    bgImg={BgLovelance} 
    initText={LovelaceDB.introduction}
    locationYear={LovelaceDB.location_year}
    locationCity={LovelaceDB.location_city}
    logicGame={LovelaceDB.logicGame}
    interactiveGame={LovelaceDB.interactiveGame}
    clues={LovelaceDB.clue_components}
    solution={LovelaceDB.solution}
    nextStage={LovelaceDB.nextStage}

    />

  )
}

export default StageOne