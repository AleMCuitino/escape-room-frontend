import React, { useContext, useEffect, useState } from 'react'
import { ContainerBody, Text, Hour, Rotate } from '../../../components/buttons/start-styled'
import { Link, useNavigate } from 'react-router-dom';
import Hourglass from '@/assets/buttons/Hourglass.svg';
import Chat from '../../../components/chat/Chat';
import { getUsersInRoom } from '../../../services/escape.service';
import { UserContext } from '../../../contexts/UserContext';
import { set } from 'react-hook-form';
import { useLocalStorage } from '../../../hooks/useLocalStorage';


const Waiting = () => {

  const { userStorage, setUserStorage } = useContext(UserContext)
  const [usersReady, setUsersReady] = useLocalStorage('usersReady', '')
  const [participants, setParticipants] = useState([{}, {}])
  const [participantsReady, setParticipantsReady] = useState([{}])

  const navigate = useNavigate();

  const getUsers = async () => {
    const { data } = await getUsersInRoom(userStorage?.user?.room_id);
    setParticipants(data?.users)
    let readyUsers = data?.users.filter((participant) => {
      return participant.participed == true;
    })
    setUsersReady({
      users: data?.users?.length,
      ready: readyUsers?.length
    })
    setParticipantsReady()
  }
  function ready () {
    // getUsers();
    let users = window.localStorage.getItem('usersReady')

    if (users.ready == users.users) {
      navigate("/start")
    }
  }

  useEffect(() => {
    getUsers();
    // ready();
  }, [])
 




  return (
    <div>

      <ContainerBody >

        <div className='container vh-100 d-flex flex-column '>

          <Text >
            <h3 title="hacking">¡Factoría F5 ha sido hackeada...!</h3>
            <p> Has intentado ingresar a la página de Factoría F5 pero descubres que ha sido hackeada. Tu misión a partir de ahora será remediar el hackeo y descubrir quién está detrás y con qué intenciones...
              Para ello, te has desplazado a las oficinas centrales de Factoría. El primer paso será reunirte con un equipo de coders que Factoría ha asignado para ayudarte en esta importante misión.
              ¡Espera a que llegue todo tu equipo para iniciar la aventura! </p>
          </Text>

          <Hour>
            <Rotate src={Hourglass} alt="hour" title="hour" />
          </Hour>

          <p className='d-flex justify-content-center my-4'> {usersReady ? usersReady.ready : "..."} de {usersReady ? usersReady.users : '...'} partipantes </p>

          <div className='col-12 '>
            <Chat ready={ready} getUsers={getUsers}  />
          </div>
        </div>
      </ContainerBody>
    </div>
  )
}

export default Waiting



