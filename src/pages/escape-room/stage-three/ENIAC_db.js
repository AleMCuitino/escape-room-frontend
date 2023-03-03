import Compass from '@/assets/helpers/compass.png'
import Bracelet from '@/assets/helpers/bracelet.png'


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
        text:"",
        img:"",
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