import React from 'react';
import ContainerMain from '@/components/container/ContainerMain';
// import Wordle from '@/components/wordle/Wordle';
import BgENIAC from '@/assets/images/eniac.png';
import {EniacDB} from '@/pages/escape-room/stage-three/ENIAC_db.js';
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
    // interactiveGame={<Wordle/>}
    clues={EniacDB.clue_components}
    solution={EniacDB.solution}
    />

  )
}

export default StageThree