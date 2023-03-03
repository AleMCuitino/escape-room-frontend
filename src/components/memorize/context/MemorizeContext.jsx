import { createContext, useState, useRef, useEffect } from 'react';
import { MemorizeDB } from '@/utilities/memorize_db';
import { ShuffleArray } from '@/utilities/memorize_shuffleArray';

const MemorizeContext = createContext();

//Array de carta que se comparan
const initflippedCards = [];
//Array de cartas matcheadas
const matchArray = [];

const limite = 11;

const MemorizeProvider = ({ children }) => {

	//* tabla de puntos
	const [scoreCounter, setScoreCounter] = useState(0);

	//* cartas
	const [flippedCards, setflippedCards] = useState(initflippedCards); //Array de dos cartas que se comparan para ver si hay match
	const [shuffledArray, setShuffledArray] = useState([]); //Array de cartas a mezclar y duplicar para crear las 16 cartas
	
	const ref = useRef(null);//! permite identificar las cards

	//*board
	const [boardfill, setBoardfill] = useState(''); // renderiza el board con todas las cartas

	//* juego
	const [finishDisplay, setFinishDisplay] = useState('hide'); // mensaje final
	const [match, setMatch] = useState(matchArray) // array


	//! use effect, comprueba que cada vez que actualizan los puntos.
	useEffect(()=>{
		
		if(scoreCounter === 0){
			//si pierde todos los puntos reinicia el juego
			handleClick_InitGame();
		}
		
	},[scoreCounter]);


	//! Logica del juego:
	const handleClick_InitGame = () => {
		//reinicia todo el juego
		resetGame();
		// Crea el juego
		setTimeout(() => {
			createBoard() 
		}, 1600);
	};

	function resetGame() {

		// Da la vuelta a todas las cartas
		matchArray.forEach((cards) => {
			cards.classList.remove('flipped');
		})
		
		// limpia el array de matches
		matchArray.length = 0;
		setMatch(matchArray);

		// Reinicia el contador a 4 puntos
		setScoreCounter(11); 
		//oculta la pantalla de ganador
		setFinishDisplay('hide');
	}

	function createBoard() {

		const randomArray = createRandomArrayFromOther(MemorizeDB, limite); 
		// Crea un array y limite de parejas

		const arrayRandomWithMatches = [...randomArray, ...randomArray];
		// Obtener las parejas de randomArray duplicandolos dos veces en orden

		setShuffledArray(ShuffleArray(arrayRandomWithMatches));
		//! Baraja todo el array

		setBoardfill(true); //printa en pantalla todas las cartas
	}

	function createRandomArrayFromOther(arrayToCopy, maxLength = 8) {

		const clonedArray = [...arrayToCopy]; // modificar el array cada vez que inicia el juego y no afectar el original
		const randomArray = []; // random array

		for (let i = 0; i < maxLength; i++) {
			const randomIndex = Math.floor(Math.random() * clonedArray.length); // generar un numero random
			const randomItem = clonedArray[randomIndex]; // buscar en el array ese index

			randomArray.push(randomItem); // crea un array con 8 elementos random de la lista de frutas
			clonedArray.splice(randomIndex, 1); // para que no se repita
		}
	
		return randomArray; // devuelve todo el array de 8 elementos
	}

	function flipCard(event) {
	
		const card = event.target.closest('.cardM'); //* selecionar la cards del board

		if (card && flippedCards.length < 2 && !card.classList.contains('flipped')) {
			// si la card existe dale la vuelta, si no hay dos cartas en el array, y que no contenga la clase flipped
	
			card.classList.add('flipped'); // añade la clase flipped a la carta y dale vuelta
			initflippedCards.push(card); // envia la carta al array de comprobación 

			setflippedCards(initflippedCards);// envia el array al useState

			if (flippedCards.length === 2) {
				// si ya hay dos cartas para comparar
				checkIdentityMatch(initflippedCards); //verifica que son iguales
				finishGameIfNoMoreMatches(); // comprueba si ya tienen todas las cartas
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
				//añade la clase match y envialas al array de cartas con match
				card.classList.add('match');
				setMatch(matchArray.push(card));
			});

			flippedCards.length = 0; // resetea el array de comprobación
			setScoreCounter(scoreCounter + 1 ); // añade un punto

		} else {
			setTimeout(() => {
				flippedCards.forEach((card) => {
					card.classList.remove('flipped'); //elimina la clase flipped si no hay match
				});
				flippedCards.length = 0; // resetea el array de comprobación
			}, 1000);

			setScoreCounter(scoreCounter - 1 );			
			
		}
	}



	function finishGameIfNoMoreMatches() {
		
		// almacena el valor de la longitud del array de cartas con match
		const numberOfMatches = matchArray.length;
		const final = limite * 2;

		if ( numberOfMatches === final ) {
			setFinishDisplay('show'); // despliega el mensaje de victoria		
		}
	}


	// objeto que envia las props a los hijos
	const data = {
		boardfill,
		handleClick_InitGame,
		flipCard,
		shuffledArray,
		finishDisplay,
		scoreCounter,
		ref,
	};

	return <MemorizeContext.Provider value={data}>{children}</MemorizeContext.Provider>;
};

export { MemorizeProvider };
export default MemorizeContext;
