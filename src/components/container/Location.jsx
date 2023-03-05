import React from 'react'
import { TitleLocation } from '@/styled-components/containers-styled';
import CountDown from './CountDown';

const  Location = (props) => {
  return (

    <div className='mboard-timeline d-flex flex-column flex-md-row justify-content-between col-12'>
        
        <TitleLocation className="order-1 order-md-0 mb-5 mb-md-0"> Location {props.city} / año {props.year} </TitleLocation>
        <CountDown className="order-0 order-md-1"/>

    </div>
  )
}

export default Location