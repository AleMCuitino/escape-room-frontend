import React from 'react'
import ButtonsF from '../../components/buttons/ButtonsF'
import { ContainerBody, ContainerButtons, Text } from '../../components/buttons/start-styled'
import Target from '@/assets/buttons/Target.svg';
import { Link } from 'react-router-dom';
const Start = () => {
  return (
    <div>

        <ContainerBody >

          <div className='container  vh-100 '>
              <Text className= 'position-relative ' > 
                  <h3>Comenzamos!</h3>
                  <br />
                  <br />
                  <p> Hagan click en el botón correcto para corregir el eror 404      </p>
              </Text>
              
              <ContainerButtons className='col-12 '>
            
                  <ButtonsF className='col-4 '> </ButtonsF>
                  
              </ContainerButtons>
              <img src={Target} alt="" />
          </div>
        </ContainerBody>
    </div>
  )
}

export default Start