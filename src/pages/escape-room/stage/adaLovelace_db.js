import Machine from '@/assets/helpers/machine.png'
import Glasses from '@/assets/helpers/glasses.png'
import MemorizeHelp from '@/assets/helpers/content/memorize.png'
import LogicaleHelp from '@/assets/helpers/content/logica_lovelace.png'
import LogicGame from '@/assets/games/lovelace.png'

export const LovelaceDB = 
    {
      location_city: 'Londres',
      location_year: '1837',
      introduction: "Registrada al nacer como Augusta Ada Byron y conocida habitualmente como Ada Lovelace, fue una matemática y escritora británica",
      clue_components: [ {
        problem: 1,
        clue: `${LogicaleHelp}`,
        text:"",
        img: `${Glasses}`,
        result: "no",   
      } , {
        problem: 2,
        clue: `${MemorizeHelp}`,
        text: "",
        img:`${Machine}`,
        result: "no",   
      }],
      solution: "ada lovelace",
      nextStage: "/trip/stage-two",
      logicGame: {
        text: `Dado un grupo de 5 personas: George, Charles, Claire, Ada y Mary: \n 
        Una de ellas nació en 1788, otra en 1797, otra en 1798, otra en 1791 y otra en 1815. \n \n
        I)Tres de ellas, George, Claire y la persona nacida en 1797, prefieren las letras a la ciencia, y dos de ellas, Charles y la persona nacida en 1815, prefieren la ciencia a las letras. \n
        II)La persona nacida en 1791, Ada y George son familia, pero dos de ellas prefieren la ciencia a las letras. \n
        III)La persona nacida en 1788 está casada con Claire. \n

        Ingresa el nombre de la persona nacida en 1798 seguido del año de nacimiento de Mary en el siguiente formato; nombre-año.
        `,
        img:`${LogicGame}`,
        result: "claire-1797",
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

    
