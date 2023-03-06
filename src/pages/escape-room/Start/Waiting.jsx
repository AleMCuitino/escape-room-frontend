import React from 'react'
import { ContainerBody, Text, Hour, Rotate } from '../../../components/buttons/start-styled'
import { Link } from 'react-router-dom';
import Hourglass from '@/assets/buttons/Hourglass.svg';


const Waiting = () => {




  return (
    <div>

        <ContainerBody >

          <div className='container vh-100 d-flex flex-column '>

              <Text > 
                  <h3>¡Factoría F5 ha sido hackeada...!</h3>
                  <p> Has intentado ingresar a la página de Factoría F5 pero descubres que ha sido hackeada. Tu misión a partir de ahora será remediar el hackeo y descubrir quién está detrás y con qué intenciones... 
                  Para ello, te has desplazado a las oficinas centrales de Factoria. El primer paso será reunirte con un equipo de coders que Factoría ha asignado para ayudarte en esta importante misión.
                  ¡Espera a que llegue todo tu equipo para iniciar la aventura! </p>
              </Text>
              
              <Hour>
                  <Rotate  src={Hourglass} alt="hourglass" /> 
              </Hour>

              <p className= 'd-flex justify-content-center my-4'> 1 de 4 partipantes </p> 
              
          </div>
        </ContainerBody>
    </div>
  )
}

export default Waiting



