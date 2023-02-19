import { createContext } from "react";
import { EmojiFoods } from '@/utilities/memorize_db';
import { ShuffleArray } from '@/utilities/memorize_shuffleArray';

const MemorizeContext = createContext();

//! logica

const board = document.querySelector('.board');
const timer = document.querySelector('.score-board__item-time');
const scoreItem = document.querySelector('.score-board__item-score');
const finishDisplay = document.querySelector('.finish-display');
const flippedCards = [];
let scoreCounter = 0;
let totalTime = 0;
let timeInterval = null;



const MemorizeProvider = ({children}) =>{


    //! logica
    const handleClick_InitGame = () =>{
        resetGame();
        createBoard();
        timeInterval = setInterval(updateTime, 1000);
    }
    
    function resetGame() {
        board.innerHTML = '';
        clearInterval(timeInterval);
        totalTime = 0;
        timer.textContent = totalTime;
        scoreCounter = 0;
        scoreItem.textContent = scoreCounter;
        finishDisplay.classList.add('hide');
      }

      function createBoard() {
        const randomArray = createRandomArrayFromOther(EmojiFoods);
        const arrayRandomWithMatches = [...randomArray, ...randomArray];
      
        const shuffledArray = ShuffleArray(arrayRandomWithMatches);
      
        shuffledArray.forEach((emoji) => {
          const card = createCard(emoji);
          fragment.append(card);
        });
      
        board.append(fragment);
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
        const card = event.target.closest('.card');
      
        if (card && flippedCards.length < 2 && !card.classList.contains('flipped')) {
          card.classList.add('flipped');
          flippedCards.push(card);
      
          if (flippedCards.length === 2) {
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
        handleClick_InitGame
    }

    return(
        <MemorizeContext.Provider value={data}>
            {children}
        </MemorizeContext.Provider>
    )
};

export { MemorizeProvider }
export default MemorizeContext;