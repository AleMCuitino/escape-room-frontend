import React from 'react'
import { ContainerBody, Text, Hour, Rotate } from '../../../components/buttons/start-styled'
import { Link } from 'react-router-dom';
import  Hourglass  from '@/assets/buttons/Hourglass.svg';


const Waiting = () => {




  return (
    <div>

        <ContainerBody >

          <div className='container vh-100 d-flex flex-column '>

              <Text > 
                  <h3>Factoria ha sido hackeada...</h3>
                  <p> LOREM LOREM  LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM </p>
              </Text>
              
              <Hour>
                  <Rotate  src={Hourglass} alt="hour" title="hour" /> 
              </Hour>

              <p className= 'd-flex justify-content-center my-4'> 1 de 4 partipantes </p> 
              
          </div>
        </ContainerBody>
    </div>
  )
}

export default Waiting



