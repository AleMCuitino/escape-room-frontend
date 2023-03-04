import React, {useState} from 'react'
import { Container , Paragraph, ContainerBody, ClueContainer} from '@/styled-components/containers-styled.js';
import Location from './Location';
import Answer from './Answer';
import Clues from './Clue/Clues';
import Next from '@/assets/icons/Forward.png'
import { AnswerProvider } from './context/answerContext';

const ContainerMain = (props) => {

  // introducción al juego
  const [ intro, setIntro] = useState(true);

  //Juego Logico
  const [ logicGame , setLogicGame ] = useState(true);
  const [ logicResult, setLogicResult ] = useState("");


  const [ interactiveGame , setInteractiveGame] = useState(false);

  // Eventos
  const handleClick = () => {
    setIntro(false);
  }

const problemsResults = (e) => {
  e.preventDefault();

  if ( props.logicGame.result === logicResult )  {
    
    console.log(logicResult)
    setLogicGame(false);
  }

}


  // AnswerContext para pasar la resolución de los problemas y eventos
  const data = {
    logicGame,
    logicResult,
    setLogicResult,
    interactiveGame,
    problemsResults,
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
                  <Paragraph className='col-10 col-sm-10 mb-5'>
                    {props.initText}
                    <button  className="btn-next" onClick={ handleClick } >Continuar <img src={Next}/></button>
                  </Paragraph>
                  </>
                  :
                  <div className='col-12'>
                
                { logicGame ?
                <>
                <div className='mb-5'>
                { props.logicGame.text === "" ? "" : <p>{props.logicGame.text}</p> }
                { props.logicGame.img === "" ? "" :
                   <img className="img-fluid" src={props.logicGame.img}/>
                } 
                </div>
                </> : 
                props.interactiveGame }
    
      
                  </div>
                
                }   

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
              
            {/* input de solución del puzzles */}
            <AnswerProvider value={data}>
               <Answer/>
            </AnswerProvider>
          
    </div>
  </ContainerBody>
    
    </>
  )
}

export default ContainerMain