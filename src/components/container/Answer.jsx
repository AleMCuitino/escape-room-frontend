import React, { useContext } from 'react'
import {  FormAnswer , Submit} from '@/styled-components/containers-styled';
import AnswerContext from './context/answerContext';


const Answer = () => {

  const {logicGame , input , setInput, problemsResults , setLogicResult, setInteractiveResult } = useContext(AnswerContext);

  return (
  
     
            <FormAnswer onSubmit={problemsResults} 
            className='flex-column flex-md-row mx-auto col-12 col-md-8'>  

              <input
                placeholder='Ingresa tu respuesta_'
                value={input } 
                className= 'fs-6 col-12 col-md-8 mb-3 mb-md-0'
                type="text"
                onChange={ (e) => {
                
                setInput(e.target.value)
                
                if( logicGame === true ){
                  setLogicResult(e.target.value.toLowerCase())                 
                }
                else{
                  setInteractiveResult(e.target.value.toLowerCase())
                }
                }} />
            
              <Submit className='col-12 col-md-4' type="submit"> Enviar </Submit>
            
            </FormAnswer>
      

  )
}

export default Answer