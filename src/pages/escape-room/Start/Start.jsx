import React from 'react'
import ButtonsF from '../../../components/buttons/ButtonsF'
import { ContainerBody, ContainerButtons, Look, Text} from '../../../components/buttons/start-styled'
import Target from '@/assets/buttons/Target.svg';
import Chat from '../../../components/chat/Chat';


const Start = () => {

  
  return (
    <>

        <ContainerBody >

          <div className='container h-100 d-flex flex-column '>
          <Text > 
                  <h3>¡Comenzamos!</h3>
                  <p>Ya os habéis encontrado y presentado ¿verdad? ¡Pues bien que así sea, porque tendréis que coordinaros bien para completar la misión! A partir de ahora, las únicas herramientas serán vuestro ingenio, el trabajo en equipo, y un dispositivo que os han dejado en las oficinas de Factoría F5.</p>
                  <p> Encendéis el dispositivo y en la pantalla de inicio veis el siguiente mensaje:
                  “Hola. Soy el dispositivo 404GPT. Como modelo de lenguaje, fui programado y entrenado por una antigua y legendaria promoción de coders, la P5.22-23, para guiar a futuros coders en la resolución de problemas. Presiona el botón correcto para continuar”. 
                  Sin más instrucciones, tenéis delante una serie de botones y ¡llega el momento de tomar la primera decisión de equipo! ¿Cuál será el botón correcto? </p>
              </Text>

                <ContainerButtons >            
                    <ButtonsF > </ButtonsF>
                </ContainerButtons>

                <div className='col-12 '>
                    <Chat/>
                </div>

            
            
              
          </div>
        </ContainerBody>

        
    </>
  )
}

export default Start