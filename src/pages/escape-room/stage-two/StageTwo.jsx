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
    initText="Al ingresar la respuesta el dispositivo os ha dezplazado nuevamente en el tiempo y el espacio. Podéis ver en la pantalla que os encontráis en Hollywood y es el año 1942. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
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