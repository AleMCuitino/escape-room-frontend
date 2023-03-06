import React from 'react'
import ButtonsF from '../../../components/buttons/ButtonsF'
import { ContainerBody, ContainerButtons, Look, Text } from '../../../components/buttons/start-styled'
import Target from '@/assets/buttons/Target.svg';
import { Link } from 'react-router-dom';

const Start = () => {

  
  return (
    <div>

        <ContainerBody >

          <div className='container vh-100 d-flex flex-column '>

              <Text > 
                  <h3>Comenzamos!</h3>
                  <p> Encendéis el dispositivo y en la pantalla de inicio veis el siguiente mensaje:
                  “Hola. Soy el dispositivo 404Gpt. Como modelo de lenguaje, fui programado y entrenado por una antigua y legendaria promoción de coders, la P5.22-23, para guiar a futuros coders en la resolución de problemas. Presiona el botón correcto para continuar”. 
                  Sin más instrucciones, tenéis delante una serie de botones y ¡llega el momento de tomar la primera decisión de equipo! ¿Cuál será el botón correcto? </p>
              </Text>
              
              <ContainerButtons >            
                  <ButtonsF > </ButtonsF>
              </ContainerButtons>
              <Look>
              <img src={Target} alt="" />  
              
              </Look>
              
          </div>
        </ContainerBody>
    </div>
  )
}

export default Start