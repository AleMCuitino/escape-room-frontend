import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { BubbleCssProvider } from './bubble-styled'
import { ReactComponent as Arrow }  from '@/assets/icons/arrowr.svg'
import { ReactComponent as Ask}  from '@/assets/icons/ask.svg'
import Target  from '@/assets/icons/target.png'


const Bubble = (props) => {

const [ pulse, setPulse ] = useState('');
const [ expand , setExpand ] = useState('');

        const handleClick = () => {
          pulse === 'pulsed' ? setPulse('') : setPulse('pulsed');
          expand === 'expand' ? setExpand('') : setExpand('expand');

        }

  return (
    <BubbleCssProvider>
      
          <div className={`float-button ${pulse}`} id="float-button" onClick={handleClick}> <img className="img-fluid" src={Target}/></div>
          <nav className={`circular-menu ${expand}`} id="circular-menu">
              <ul>
              <li><a className="icon-heart" as={Link} to="#"><Arrow/></a></li>
              <li><a className="icon-cart" onClick="" to="#"><Ask/></a></li>
              </ul>
          </nav>
    
    </BubbleCssProvider>
  )
}

export default Bubble