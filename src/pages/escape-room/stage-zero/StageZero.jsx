import React from 'react';
import ContainerMain from '@/components/container/ContainerMain';
import BgHipatia from '@/assets/images/hipatia.png';
import {HipatiaDB} from '@/pages/escape-room/stage-zero/hipatia_db.js';

/*
** HEDY LAMARR
** #Sliding Puzzle 🟢
** #DB Json
** #Logic Game
*/

const StageZero = () => {
  return (

    <ContainerMain
    bgImg={BgHipatia}
    initText={HipatiaDB.introduction}  
    locationYear={HipatiaDB.location_year}
    locationCity={HipatiaDB.location_city}
    logicGame={HipatiaDB.logicGame}
    clues={HipatiaDB.clue_components}
    solution={HipatiaDB.solution}
    nextStage={HipatiaDB.nextStage}
    />

  )
}

export default StageZero