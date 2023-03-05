import Compass from '@/assets/helpers/compass.png'
import Bracelet from '@/assets/helpers/bracelet.png'
import LogicGame from '@/assets/games//stage3-logic.png'


export const EniacDB = 
    {
      location_city: 'Filadelfia',
      location_year: '1946',
      introduction: "ENIAC Filadelfia",
      clue_components: [ {
        problem: 1,
        clue: "",
        text:"",
        img: `${Compass}`,
        result: false,   
      } , {
        problem: 2,
        clue: "",
        text:"",
        img:`${Bracelet}`,
        result: false,   
      }],
      solution: "pasta",
      logicGame: {
        text:"`Las programadoras de la máquina ENIAC han creado un algoritmo para controlar el flujo de energía en las entrañas de la máquina. El equipo cuenta con un plano de los circuitos  de la máquina que muestra la red de componentes que requieren suministro energético.  Para garantizar la eficiencia, la corriente debe llegar a todos los componentes sin pasar dos veces por el mismo y regresando al punto de origen. Cada componente está señalado con un letra ¿Podríais encontrar la sucesión de letras correcta? ingrésala en minúsculas y sin espacios` ",
        img:`${LogicGame}`,
        result: "arribalabirra"
      },
      help: [
        {
            problem:1,
            helps: [
                "ayuda 1",
                "ayuda 2",
                "ayuda 3",
                "ayuda 4",    
            ]
        },
        {
            problem:2,
            helps: [
                "ayuda 1",
                "ayuda 2",
                "ayuda 3",
                "ayuda 4",    
            ]
        }
      ]

    };