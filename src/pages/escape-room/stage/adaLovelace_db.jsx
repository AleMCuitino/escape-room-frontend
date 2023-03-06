import Machine from '@/assets/helpers/machine.png'
import Glasses from '@/assets/helpers/glasses.png'
import MemorizeHelp from '@/assets/helpers/content/memorize.png'
import LogicaleHelp from '@/assets/helpers/content/logica_lovelace.png'
import GameLogicAda from './GameLogicAda'
import Memorize from '@/components/memorize/Memorize'

export const LovelaceDB = 
    {
      location_city: 'Londres',
      location_year: '1843',
      introduction: "¡Correcto! Habéis llegado a la misma conclusión a la que llegaron vuestras predecesoras con la ayuda de Hipatia. Ahora os encontráis en un estudio, y el aparato que lleváis os informa que estáis en Inglaterra en el año 1843. En la pantalla, otra vez aparece un campo de ingreso de contraseña y el sieguiente mensaje: 'Ingresa el resultado del acertijo para ejercitar tu memoria...”.   En el estudio, junto a una máquina muy extraña veis un conjunto de folios encuadernados con el título de 'Notas'. En la primera página de las notas podéis leer un acertijo lógico... ¿Será la respuesta para avanzar con el reinicio?",
      clue_components: [ {
        problem: 1,
        clue: `${LogicaleHelp}`,
        text:"Quizás una tabla así te ayude a ordenar la lógica del ejercicio",
        img: `${Glasses}`,
        result: "no",   
      } , {
        problem: 2,
        clue: `${MemorizeHelp}`,
        text: "¿Qué relación tienen estos colores con el memeorize?",
        img:`${Machine}`,
        result: "no",   
      }],
      solution: "ada lovelace",
      nextStage: "/trip/stage-two",
      logicGame: {
        text:<GameLogicAda/>,
        img:"",
        result: "claire-1797",
      },
      interactiveGame: <Memorize/>,
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

    
