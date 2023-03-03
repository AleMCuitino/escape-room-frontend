import React from 'react'
import { ContainerBody, Text, Hour, Rotate } from '../../../components/buttons/start-styled'

import { Link } from 'react-router-dom';
import Hourglass from '@/assets/buttons/Hourglass.svg';


const Start = () => {
  return (
    <div>

        <ContainerBody >

          <div className='container vh-100 d-flex flex-column '>

              <Text > 
                  <h3>Factoria ha sido hackeada...</h3>
                  <p> Hagan click en el botón correcto para corregir el eror 404 </p>
              </Text>
              
              <Hour>
                  <Rotate  src={Hourglass} alt="hour" /> 
                  
              </Hour>
              <p className= 'd-flex justify-content-center my-4' > 1 de 4 partipantes </p> 
          </div>
        </ContainerBody>
    </div>
  )
}

export default Start