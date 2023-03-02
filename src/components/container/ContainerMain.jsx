import React from 'react'
import { Container , Paragraph, ContainerBody, ClueContainer} from '@/styled-components/containers-styled.js';
import Location from './Location';
import Answer from './Answer';
import Clues from './Clue/Clues';


const ContainerMain = (props) => {
  return (
    <>
    <ContainerBody bgImg={props.bgImg}>
    <div className='container py-5' >
          
            {/* board situaciónal y de tiempo */}
            <Location year={props.locationYear} city={props.locationCity} className='col-6 col-sm-4 position-relative'/>
            
              <Container className='col-12 flex-wrap' > 

                   {/* Texto introductorio */}
                  <Paragraph className='col-10 col-sm-10'>
                    {props.initText}
                  </Paragraph>
                  <div className='col-12'>
                    {props.interactiveGame}
                  </div>
                  {/* Aside de pistas logicas, recorre un array */}
                  <ClueContainer> 
                    <Clues/>
                    <Clues/>
                  </ClueContainer>

              </Container>
              
            {/* input de solución del puzzel */}
            <Answer/>
          
    </div>
  </ContainerBody>
    
    </>
  )
}

export default ContainerMain