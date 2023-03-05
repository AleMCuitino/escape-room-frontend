import React from 'react'
import ContainerMain from '@/components/container/ContainerMain'
import Puzzle from '@/components/puzzle/Puzzle'
import {LovelaceDB} from '@/pages/escape-room/stage/adaLovelace_db.js'

/*
** HEDY LAMARR
** #Sliding Puzzle 🟢
** #DB Json
** #Logic Game
*/

const StageTwo = () => {
  return (

    <ContainerMain 
    bgImg=""
    initText={LovelaceDB.introduction}
    locationYear={LovelaceDB.location_year}
    locationCity={LovelaceDB.location_city}
    logicGame={LovelaceDB.logicGame}
    interactiveGame={<Puzzle/>}
    clues={LovelaceDB.clue_components}
    solution={LovelaceDB.solution}
    />

  )
}

export default StageTwo