import React, {useState} from 'react'
import { Container , Paragraph, ContainerBody, ClueContainer} from '@/styled-components/containers-styled.js';
import Location from './Location';
import Answer from './Answer';
import Clues from './Clue/Clues';
import Next from '@/assets/icons/Forward.png'
import { AnswerProvider } from './context/answerContext';
import { useNavigate } from 'react-router-dom';

const ContainerMain = (props) => {

  // redireccionar
  const navigate = useNavigate();

  //limpiar el input al enviar una respuesta
  const [input , setInput ] = useState("");

  // introducción al juego
  const [ intro, setIntro] = useState(true);

  //Juego Logico
  const [ logicGame , setLogicGame ] = useState(true);
  const [ logicResult, setLogicResult ] = useState("");

  //juego interactivo
  const [ interactiveResult, setInteractiveResult ] = useState("");
  
  // Pasar al juego
  const handleClick = () => {
    setIntro(false);
  }

// evaluar si las respuestas son correctas
const problemsResults = (e) => {

  //evita el refresh natural del formulario
  e.preventDefault();

  if ( props.logicGame.result.toLowerCase() === logicResult )  {    

      setLogicGame(false);
      props.clues[0].result = "yes";
     

      if( props.solution.toLowerCase() === interactiveResult ){

          navigate(props.nextStage);
          props.clues[1].result = "yes";

      }

  }
  //limpiar el input
  setInput("")
}


  // AnswerContext para pasar la resolución de los problemas y eventos
  const data = {
    logicGame,
    setLogicResult,
    setInteractiveResult,
    problemsResults,
    input,
    setInput
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
              
                     : "" }
                    
                  
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