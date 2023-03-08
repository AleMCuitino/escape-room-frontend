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
                    <h3>Comenzamos!</h3>
                    <p> Hagan click en el botón correcto para corregir el eror 404 </p>
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