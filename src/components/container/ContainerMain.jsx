import React, {useState} from 'react'
import { Container , Paragraph, ContainerBody, ClueContainer} from '@/styled-components/containers-styled.js';
import Location from './Location';
import Answer from './Answer';
import Clues from './Clue/Clues';
import Next from '@/assets/icons/Forward.png'



const ContainerMain = (props) => {

  const [ intro, setIntro] = useState(true);

  const handleClick = () => {
    setIntro(false);
  }

  return (
    <>
    <ContainerBody bgImg={props.bgImg}>
    <div className='container py-5' >
          
            {/* board situaciónal y de tiempo */}
            <Location year={props.locationYear} city={props.locationCity} className='col-6 col-sm-4 position-relative'/>
            
              <Container className='col-12 flex-wrap' > 

                   {/* Texto introductorio */}

              { intro === true  ? 
                  <>
                  <Paragraph className='col-10 col-sm-10'>
                    {props.initText}
                    <button  className="btn-next" onClick={ handleClick } >Continuar <img src={Next}/></button>
                  </Paragraph>
                  </>
                  :
                  ""
                }   

                  <div className='col-12'>
                    {props.interactiveGame}
                
                  </div>
                  {/* Aside de pistas logicas, recorre un array */}
                  <ClueContainer> 
                    
                  { props.clues.length > 0  ? 
                    
                    props.clues.map((clue) => {
                     return  <Clues 
                     key={clue.problem}
                     clue={clue.clue}
                     result={clue.result}
                     img={clue.img}
                     text={clue.text}
                     />
                      
                     }) 
              
                     : "no hay nada" }
                    
                  
                  </ClueContainer>

              </Container>
              
            {/* input de solución del puzzle */}
            <Answer/>
          
    </div>
  </ContainerBody>
    
    </>
  )
}

export default ContainerMain