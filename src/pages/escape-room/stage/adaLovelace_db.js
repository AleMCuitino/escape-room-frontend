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
        result: false,   
      } , {
        problem: 2,
        clue: `${MemorizeHelp}`,
        text: "",
        img:`${Machine}`,
        result: false,   
      }],
      solution: "ada lovelace",
      nextStage: "/stage-two",
      logicGame: {
        text:" texto explicativo",
        img:`${LogicGame}`,
        result: "abcde",
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
