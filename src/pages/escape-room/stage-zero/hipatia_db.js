import Papyrus from '@/assets/helpers/papyrus.png'


import LogicGame from '@/assets/games/constellation-logic.png'






export const HipatiaDB = 
    {
      location_city: 'Alejandría',
      location_year: '401',
      introduction: "Lorem Hipatia",
      clue_components: [ {
        problem: 1,
        clue: "",
        text:"",
        img: `${Papyrus}`,
        result: false,   
      }],
      solution: "Lamarr",
      nextStage: "/trip/stage-one",
      logicGame: {
        text:"¿Qué numero de estrellas tiene la constelación en la que no están marcadas?",
        img:`${LogicGame}`,
        result: "8",
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
