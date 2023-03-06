import React from 'react'
import Ada  from '@/assets/games/ada.png'
import Charles  from '@/assets/games/charles.png'
import Claire  from '@/assets/games/claire.png'
import George  from '@/assets/games/george.png'
import Mary  from '@/assets/games/mary.png'

const pictures = [ Ada, Charles, Mary, George, Claire ];

const GameLogicAda = () => {
  return (
    <>
       
        <h1 className='fs-5 fw-bold'>Dado un grupo de 5 personas</h1>
        
        <p className='text-start'><strong>George, Charles, Claire, Ada y Mary.</strong>  Una de ellas nació en 1788, otra en 1797, otra en 1798, otra en 1791 y otra en 1815.</p>
        <ul className='text-start'>
            <li className='mb-3'>I)Tres de ellas, George, Claire y la persona nacida en 1797, prefieren las letras a la ciencia, y dos de ellas, Charles y la persona nacida en 1815, prefieren la ciencia a las letras.</li>
            <li className='mb-3'>II)La persona nacida en 1791, Ada y George son familia, pero dos de ellas prefieren la ciencia a las letras.</li>
            <li>III)La persona nacida en 1788 está casada con Claire.</li>
        </ul>
        <p>Ingresa el nombre de la persona nacida en 1798 seguido del año de nacimiento de Mary en el siguiente formato: nombre-año.</p>
        <div className='d-flex align-items-center justify-content-between'>
            { pictures.map( (portrait, index) => <img key={index} className="img-fluid" src={portrait} alt="personas" /> )  
            }
            
            <img src=""></img>
        </div>

    </>
  )
}

export default GameLogicAda