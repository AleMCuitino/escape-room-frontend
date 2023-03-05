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
                  <p> Hagan click en el botón correcto para corregir el eror 404 </p>
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