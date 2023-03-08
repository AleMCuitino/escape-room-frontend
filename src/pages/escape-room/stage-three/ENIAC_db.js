import Compass from '@/assets/helpers/compass.png'
import Bracelet from '@/assets/helpers/bracelet.png'
import LogicGame from '@/assets/games//stage3-logic.png'


export const EniacDB = 
    {
      location_city: 'Filadelfia',
      location_year: '1946',
      introduction: "¡Otro desplazamiento más! ¿Cuántos quedarán? Y nuevamente el honor de haber sido testigos de otro paso importante en los avances tecnológicos, de la mano de Hedy Lamarr, cuyo trabajo sentó las bases de la comunicación por bluetooth y wifi. Ahora estáis ante una gran máquina que intuís tiene que ser uno de los primeros ordenadores. Os encontráis en Filadelfia y es el año 1946 y vuestro dispositivo os pide que echéis un vistazo a los planos de los circuitos de la máquina. Muy cerca del lugar donde os ha transportado la máquina, encontráis una nota con los nombres de seis mujeres y un plano... ¿Será el que necesitáis?",
      clue_components: [ {
        problem: 1,
        clue: "",
        text:"Ingresa la sucesión de letras del circuito en minúsculas y sin espacios.",
        img: `${Compass}`,
        result: false,   
      } , {
        problem: 2,
        clue: "",
        text:"Resuelve el wordle para obtener la contraseña",
        img:`${Bracelet}`,
        result: false,   
      }],
      solution: "eniac",
      nextStage: "/trip/final",
      logicGame: {
        text:"`El plano está firmado por las programadoras que han creado un algoritmo para controlar el flujo de energía en las entrañas de la máquina. En él podéis ver la red de componentes que requieren suministro energético. Para garantizar la eficiencia, la corriente debe llegar a todos los componentes sin pasar dos veces por el mismo y regresando al punto de origen, que es el círculo rojo con una A. Cada uno del resto de componentes está señalado con un letra ¿Podríais encontrar la sucesión de letras correcta? ` ",
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