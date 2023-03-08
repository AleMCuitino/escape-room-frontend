import React from 'react';
import ContainerMain from '@/components/container/ContainerMain';
import BgENIAC from '@/assets/images/eniac.png';
import {EniacDB} from '@/pages/escape-room/stage-three/ENIAC_db.jsx';
/*
** ENIAC
** #Wordle Game 🟢
** #DB Json
** #Logic Game
*/

const StageThree = () => {
  return (

    <ContainerMain 
    bgImg={BgENIAC} 
    initText={EniacDB.introduction}
    locationYear={EniacDB.location_year}
    locationCity={EniacDB.location_city}
    logicGame={EniacDB.logicGame}
    interactiveGame={EniacDB.interactiveGame}
    clues={EniacDB.clue_components}
    solution={EniacDB.solution}
    nextStage={EniacDB.nextStage}
    />

  )
}

export default StageThree