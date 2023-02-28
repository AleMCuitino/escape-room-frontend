import React from 'react'
import { TitleLocation } from './containers-styled';

const  Location = (props) => {
  return (

    <div >
        
        <TitleLocation > //// location {props.city} / año {props.year} </TitleLocation>

    </div>
  )
}

export default Location