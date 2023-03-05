import Star from '@/assets/helpers/star.png'
import Play from '@/assets/helpers/play.png'


import LogicGame from '@/assets/games/constellation-logic.png'






export const LamarrDB = 
    {
      location_city: 'Hollywood',
      location_year: '1942',
      introduction: "Registrada al nacer como Augusta Ada Byron y conocida habitualmente como Ada Lovelace, fue una matemática y escritora británica",
      clue_components: [ {
        problem: 1,
        clue: "",
        text:"",
        img: `${Star}`,
        result: false,   
      } , {
        problem: 2,
        clue: "",
        text:"",
        img:`${Play}`,
        result: false,   
      }],
      solution: "Lamarr",
      logicGame: {
        text:"¿Qué numero de estrellas tiene la constelación en la que no están marcadas?",
        img:`${LogicGame}`,
        result: 8,
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
