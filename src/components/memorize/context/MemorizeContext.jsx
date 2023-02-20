import { createContext,useState } from "react";
import { EmojiFoods } from '@/utilities/memorize_db';
import { ShuffleArray } from '@/utilities/memorize_shuffleArray';
import Memorize_card from '@/components/memorize/card/Memorize_card'

const MemorizeContext = createContext();

//! logica

const board = document.querySelector('.board');
const timer = document.querySelector('.score-board__item-time');
const scoreItem = document.querySelector('.score-board__item-score');
const finishDisplay = document.querySelector('.finish-display');
const initflippedCards = [];
let initscoreCounter = 0;
let totalTime = 0;
let timeInterval = null;



const MemorizeProvider = ({children}) =>{

    //* tabla de puntos
    const [ scoreCounter, setScoreCounter ] = useState(0);
    const [ scoreItem, setScoreItem ] = useState(initscoreCounter);

    //*tiempo
    const [totalTime , setTotalTime] = useState(0);
    const [timer , setTimer] = useState(totalTime);

    //* cartas
    const [ flippedCards, setflippedCards ] = useState(initflippedCards);
    const [ shuffledArray , setShuffledArray  ] = useState([]);

    //*board
    const [ boardfill, setBoardfill ] = useState('');
   
    //* juego
    const [finishDisplay, setFinishDisplay] = useState('hide');


    //! logica
    const handleClick_InitGame = () =>{
        console.log("initGame","funciona");
        resetGame();
        createBoard();
        timeInterval = setInterval(updateTime, 1000);
    }
    
    function resetGame() {
        setBoardfill('') /* board.innerHTML = '';  */
        clearInterval(timeInterval);
        totalTime = 0;
       /*  timer.textContent = totalTime; */
        setScoreCounter(0);
        setScoreItem(scoreCounter)  /* scoreItem.textContent = scoreCounter; */
        setFinishDisplay('hide');
      }

      function createBoard() {
        const randomArray = createRandomArrayFromOther(EmojiFoods, 8); //! selecciona un array y limite de parejas
        const arrayRandomWithMatches = [...randomArray, ...randomArray]; //! obtener las parejas de randomArray duplicandolos dos veces ORdenado
      
        setShuffledArray(ShuffleArray(arrayRandomWithMatches)); // ! baraja todo
        
        setBoardfill(true)
   
      }

      function createRandomArrayFromOther(arrayToCopy, maxLength = 8) {
        const clonedArray = [...arrayToCopy];
        const randomArray = [];
      
        for (let i = 0; i < maxLength; i++) {
          const randomIndex = Math.floor(Math.random() * clonedArray.length);
          const randomItem = clonedArray[randomIndex];
      
          randomArray.push(randomItem);
          clonedArray.splice(randomIndex, 1);
        }
        return randomArray;
      }

      function createCard({ id, emoji }) {
        const card = template.content.cloneNode(true);
        card.querySelector('.card').dataset.identity = id;
        card.querySelector('.card__back').textContent = emoji;
        return card;
      }


      function flipCard(event) {
        console.log("flipCard","funciona");
        const card = event.target.closest('.card'); //* selecionar la card
      
        if (card && flippedCards.length < 2 && !card.classList.contains('flipped')) {
            //! si la card existe dale la vuelta y si no hay dos cartas en el array y no tienen clase flipped
          card.classList.add('flipped');
          flippedCards.push(card);
      
          if (flippedCards.length === 2) {
            	//! si ya hay dos cartas para de dar vuelta
            checkIdentityMatch();
            finishGameIfNoMoreMatches();
          }
        }
      }


      function checkIdentityMatch() {
        const [identity1, identity2] = flippedCards.map(
          (card) => card.dataset.identity
        );
      
        if (identity1 === identity2) {
          flippedCards.forEach((card) => {
            card.classList.add('match');
          });
          flippedCards.length = 0;
          updateScoreCounter(1);
        } else {
          setTimeout(() => {
            flippedCards.forEach((card) => {
              card.classList.remove('flipped');
            });
            flippedCards.length = 0;
          }, 1000);
          updateScoreCounter(-1);
        }
      }

      function updateScoreCounter(score) {
        scoreItem.textContent = scoreCounter += score;
      }
      
      function updateTime() {
        totalTime++;
        timer.textContent = totalTime;
      }

      function finishGameIfNoMoreMatches() {
        const numberOfMatches = board.querySelectorAll('.match').length;
        if (numberOfMatches === 16) {
          finishDisplay.classList.remove('hide');
          clearInterval(timeInterval);
        }
      }

    // objeto que envia las props a los hijos
    const data = {
        boardfill,
        handleClick_InitGame,
        flipCard,
        shuffledArray,
        finishDisplay,
        scoreItem
    }

    return(
        <MemorizeContext.Provider value={data}>
            {children}
        </MemorizeContext.Provider>
    )
};

export { MemorizeProvider }
export default MemorizeContext;