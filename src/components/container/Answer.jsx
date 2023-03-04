import React, { useContext } from 'react'
import { ContainerAnswer , FormAnswer , Submit} from '@/styled-components/containers-styled';
import AnswerContext from './context/answerContext';


const Answer = (props) => {

  const {logicGame} = useContext(AnswerContext);

console.log("2",logicGame);

  return (
    <div >
        <ContainerAnswer className='py-2 ' >

            <FormAnswer className='flex-column flex-md-row mx-auto col-10 '>  

              <input  placeholder='Ingresa tu respuesta_' className= 'fs-6 col-12 col-md-8 mb-3 mb-md-0'  type="text"  ></input>
            
            <Submit className='col-12 col-md-4' type="submit" value="" > Enviar </Submit>
            
            </FormAnswer>
        </ContainerAnswer>    
        
    </div>
  )
}

export default Answer