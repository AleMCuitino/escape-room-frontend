import React, { useContext, useEffect, useState } from 'react'
import { ContainerBody, Text, Hour, Rotate } from '../../../components/buttons/start-styled'
import { Link, useNavigate } from 'react-router-dom';
import Hourglass from '@/assets/buttons/Hourglass.svg';
import Chat from '../../../components/chat/Chat';
import { getUsersInRoom } from '../../../services/escape.service';
import { UserContext } from '../../../contexts/UserContext';
import { set } from 'react-hook-form';


const Waiting = () => {

  const { userStorage, setUserStorage } = useContext(UserContext)
  const [participants, setParticipants] = useState(null)
  const [participantsReady, setParticipantsReady] = useState(null)

  const navigate = useNavigate();

  const getUsers = async () => {
    const { data } = await getUsersInRoom(userStorage?.user?.room_id);
    setParticipants(data?.users)

    setParticipantsReady(data?.users.filter((participant) => {
      return participant.participed === true;
    }))

    if(participants?.length === participantsReady?.length){
      navigate("/start")
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  



  return (
    <div>

      <ContainerBody >

        <div className='container vh-100 d-flex flex-column '>

          <Text >
            <h3>¡Factoría F5 ha sido hackeada...!</h3>
            <p> Has intentado ingresar a la página de Factoría F5 pero descubres que ha sido hackeada. Tu misión a partir de ahora será remediar el hackeo y descubrir quién está detrás y con qué intenciones...
              Para ello, te has desplazado a las oficinas centrales de Factoría. El primer paso será reunirte con un equipo de coders que Factoría ha asignado para ayudarte en esta importante misión.
              ¡Espera a que llegue todo tu equipo para iniciar la aventura! </p>
          </Text>

          <Hour>
            <Rotate src={Hourglass} alt="hourglass" />
          </Hour>

          <p className='d-flex justify-content-center my-4'> {participantsReady? participantsReady.length : "..."} de {participants?.length} partipantes </p>

          <div className='col-12 '>
            <Chat getUsers={getUsers} />
          </div>
        </div>
      </ContainerBody>
    </div>
  )
}

export default Waiting



