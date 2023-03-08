import React from 'react';
import ContainerMain from '@/components/container/ContainerMain';
import Puzzle from '@/components/puzzle/Puzzle';
import BgLamarr from '@/assets/images/lamarr.png';
import {LamarrDB} from '@/pages/escape-room/stage-two/hedyLamarr_db.js';

/*
** HEDY LAMARR
** #Sliding Puzzle 🟢
** #DB Json
** #Logic Game
*/

const StageTwo = () => {
  return (

    <ContainerMain
    bgImg={BgLamarr}
    initText={LamarrDB.introduction}  
    locationYear={LamarrDB.location_year}
    locationCity={LamarrDB.location_city}
    logicGame={LamarrDB.logicGame}
    interactiveGame={<Puzzle/>}
    clues={LamarrDB.clue_components}
    solution={LamarrDB.solution}
    nextStage={LamarrDB.nextStage}
    />

  )
}

export default StageTwo