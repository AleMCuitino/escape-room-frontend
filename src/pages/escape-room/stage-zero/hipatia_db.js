import Papyrus from '@/assets/helpers/papyrus.png'
import LogicGame from '@/assets/games/constellation-logic.png'
import Hipatia from '@/assets/helpers/content/hipatia-pic.jpg'

export const HipatiaDB = 
    {
      location_city: 'Alejandría',
      location_year: '401',
      introduction: "Al presionar el botón sentisteis un cosquilleo. Unas chispas en el aire pronto se transformaron en rayos que no tardaron en envolveros y transportaros en un extraño viaje a través de un túnel. La pantalla del dispositivo dejó de marcar “error 404” para mostraros que... ¡Os habéis desplazado en el tiempo y el espacio! Ahora os encontráis en la biblioteca de Alejandría en el año 401, y el dispositivo os informa que fue programado con la ayuda de personas relevantes de la historia de la programación. Para reiniciarse, necesita reproducir las claves con las que fue programado, y debéis descubrirlas para salir del hack. La pantalla os pide una contraseña: “si sois quienes me han programado, entonces sabréis el número de estrellas de la constelación en el mapa de la astrónoma y filósofa Hipatia”. Efectivamente, en el lugar de la biblioteca que os encontráis, podeís ver un mapa del cielo...",
      clue_components: [ {
        problem: 1,
        clue: `${Hipatia}`,
        text:"Hipatia fue una filósofa y maestra neoplatónica griega,​ que destacó en los campos de las matemáticas y la astronomía,​ miembro y cabeza de la Escuela neoplatónica de Alejandría a comienzos del siglo V. Hipatia fue una de las primeras mujeres matemáticas de la historia.​ Escribió sobre geometría, álgebra y astronomía, mejoró el diseño de los primitivos astrolabios —instrumentos para determinar las posiciones de las estrellas sobre la bóveda celeste— e inventó un densímetro. Por ello, está considerada como una pionera en la historia de las mujeres en la ciencia.",
        img: `${Papyrus}`,
        result: false,   
      }],
      solution: "8",
      nextStage: "/trip/stage-one",
      logicGame: {
        text:"¿Qué número de estrellas tiene la constelación con el signo de interrogación?",
        img:`${LogicGame}`,
        result: "8",
        
      },
      interactiveGame:"",
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
