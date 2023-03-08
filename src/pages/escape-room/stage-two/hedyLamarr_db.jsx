import Star from '@/assets/helpers/star.png'
import Play from '@/assets/helpers/play.png'
import LogicGame from '@/assets/games/lamarr-logic.png'
import Puzzle from '@/components/puzzle/Puzzle';


export const LamarrDB = 
    {
      location_city: 'Hollywood',
      location_year: '1942',
      introduction: "¡Habéis resuelto la prueba con éxito! Y también tenido el honor de visitar el estudio de Charles Babbagge y Ada Lovelace, ¡la primera programadora de la historia! Pero ahora os encontráis en lo que parece el camerino de una actriz. Según el dispositivo, os encontráis en Hollywood y es el año 1942. Mientras os preguntáis por qué en esa época y lugar, descubrís que quizás el camerino no pertenezca a una actriz cualquiera, ya que en su espejo hay escrito en lápiz labial un acertijo matemático...",
      clue_components: [ {
        problem: 1,
        clue: "",
        text:"Ingresa la contraseña con el formato X+X+X",
        img: `${Star}`,
        result: false,   
      } , {
        problem: 2,
        clue: "",
        text:"Resuelve el puzzle para obtener la contraseña.",
        img:`${Play}`,
        result: false,   
      }],
      solution: "Lamarr",
      nextStage: "/trip/stage-three",
      logicGame: {
        text:"",
        img:`${LogicGame}`,
        result: "412+414+416",
      },
      interactiveGame: <Puzzle/>,
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
