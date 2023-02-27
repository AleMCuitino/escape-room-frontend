import { createContext, useState, useRef, useEffect } from 'react';
import { EmojiFoods } from '@/utilities/memorize_db';
import { ShuffleArray } from '@/utilities/memorize_shuffleArray';

const MemorizeContext = createContext();

//! logica

const board = document.querySelector('.board');
const timer = document.querySelector('.score-board__item-time');
const scoreItem = document.querySelector('.score-board__item-score');
const finishDisplay = document.querySelector('.finish-display');

//Array de carta que se comparan
const initflippedCards = [];
//Array de cartas matcheadas
const matchArray = [];

let initscoreCounter = 0;
let totalTime = 0;
let timeInterval = null;


const MemorizeProvider = ({ children }) => {
	//* tabla de puntos
	const [scoreCounter, setScoreCounter] = useState(0);
	const [scoreItem, setScoreItem] = useState(initscoreCounter);

	//*tiempo
	const [totalTime, setTotalTime] = useState(0);
	const [timer, setTimer] = useState(totalTime);

	//* cartas
	const [flippedCards, setflippedCards] = useState(initflippedCards); //array de cartas que han hecho macht
	console.log('aa', flippedCards);
	const [shuffledArray, setShuffledArray] = useState([]); //mezclar cartas
	const [isFlipped, setIsFlipped] = useState(false); // se ha clicado la carta y añade una clase
	const ref = useRef(null);

	//*board
	const [boardfill, setBoardfill] = useState('');

	//* juego
	const [finishDisplay, setFinishDisplay] = useState('hide');
	const [match, setMatch] = useState(matchArray)


	//! use effect

	useEffect(()=>{
		console.log("total:", match)
	},[match]);




	//! logica
	const handleClick_InitGame = () => {
		console.log('initGame', 'funciona');
		resetGame();
		createBoard();
	};

	function resetGame() {
		/*  setBoardfill('') */ /* board.innerHTML = '';  */
		clearInterval(timeInterval);
		setTotalTime(0);
		setTimer(totalTime); /*  timer.textContent = totalTime; */
		setScoreCounter(0);
		setScoreItem(scoreCounter); /* scoreItem.textContent = scoreCounter; */
		setFinishDisplay('hide');
	}

	function createBoard() {
		const randomArray = createRandomArrayFromOther(EmojiFoods, 8); //! selecciona un array y limite de parejas
		const arrayRandomWithMatches = [...randomArray, ...randomArray]; //! obtener las parejas de randomArray duplicandolos dos veces ORdenado

		setShuffledArray(ShuffleArray(arrayRandomWithMatches)); // ! baraja todo

		console.log('baraja', shuffledArray);
		setBoardfill(true);
	}

	function createRandomArrayFromOther(arrayToCopy, maxLength = 8) {
		const clonedArray = [...arrayToCopy]; //! modificar el array por juego y no afectar el original
		const randomArray = []; //! generar random

		for (let i = 0; i < maxLength; i++) {
			const randomIndex = Math.floor(Math.random() * clonedArray.length); //! generar un numero random
			const randomItem = clonedArray[randomIndex]; //! buscar en el array ese index

			randomArray.push(randomItem); //! crea un array con 8 elementos random de la lista de frutas
			clonedArray.splice(randomIndex, 1); //* para que no se repita
		}
		console.log('randomArray', randomArray);
		return randomArray; //! devuelve todo el array de 8 elementos
	}

	function flipCard(event) {
	
		const card = event.target.closest('.card'); //* selecionar la card

		if (!card.classList.contains('flipped')) {
			console.log('no tiene fillped card');
		}

		if (card.classList.contains('flipped')) {
			console.log('tiene fillped card');
		}

		if (card && flippedCards.length < 2 && !card.classList.contains('flipped')) {
			//! si la card existe dale la vuelta y si no hay dos cartas en el array y no tienen clase flipped
			/*  setIsFlipped(true); */
			/*  ref.current.classList.add('flipped'); */
			card.classList.add('flipped');
			initflippedCards.push(card);

			console.log("array pusheado",initflippedCards);
			setflippedCards(initflippedCards);

			console.log('estado', flippedCards);
			if (flippedCards.length === 2) {
				//! si ya hay dos cartas para de dar vuelta
				checkIdentityMatch(initflippedCards);
				finishGameIfNoMoreMatches();
			}
		}
	}

	function checkIdentityMatch(array) {

		//extrae los dataset-identity de las dos cartas a comparar
		const [identity1, identity2] = array.map((card) => {
      	return card.dataset.identity
		
	});

    

		if (identity1 === identity2) {
			flippedCards.forEach((card) => {
				card.classList.add('match');
			});
			setMatch(matchArray.push(identity1, identity2));

			flippedCards.length = 0;
			setScoreCounter(scoreCounter + 1 );
			setScoreItem(scoreCounter);
			console.log("matcharry",match)



		} else {
			setTimeout(() => {
				flippedCards.forEach((card) => {
					card.classList.remove('flipped');
				});
				flippedCards.length = 0;
			}, 1000);

			setScoreCounter(scoreCounter - 1 );
			setScoreItem(scoreCounter);
			
		}
	}



	function finishGameIfNoMoreMatches() {

		
		const numberOfMatches = matchArray.length;
		console.log("array", match)

		if ( numberOfMatches === 16) {
			setFinishDisplay('show');
			
		}
	}

	// objeto que envia las props a los hijos
	const data = {
		boardfill,
		handleClick_InitGame,
		flipCard,
		shuffledArray,
		finishDisplay,
		scoreItem,
		EmojiFoods,
		isFlipped,
		ref,
	};

	return <MemorizeContext.Provider value={data}>{children}</MemorizeContext.Provider>;
};

export { MemorizeProvider };
export default MemorizeContext;
