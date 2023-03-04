import React, { useState } from 'react'
import { BubbleCssProvider } from './bubble-styled'
import { ReactComponent as Arrow }  from '@/assets/icons/arrow.svg'



const Bubble = () => {

const [ pulse, setPulse ] = useState('');
const [ expand , setExpand ] = useState('');

        const handleClick = () => {
          pulse === 'pulsed' ? setPulse('') : setPulse('pulsed');
          expand === 'expand' ? setExpand('') : setExpand('expand');

        }

  return (
    <BubbleCssProvider>
      <div className="smartphone-viewport">
          <div className={`float-button ${pulse}`} id="float-button" onClick={handleClick}></div>
          <nav className={`circular-menu ${expand}`} id="circular-menu">
              <ul>
              <li><a className="icon-heart" href="#"><Arrow/></a></li>
              <li><a className="icon-cart" href="#"></a></li>
              </ul>
          </nav>
      </div>
    </BubbleCssProvider>
  )
}

export default Bubble