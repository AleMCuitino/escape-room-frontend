

import React from 'react'

import { Container , Title } from '@/components/container/containers-styled';
import CountDown from './CountDown';

const ContainerMain = () => {
  return (
    <div className='d-flex justify-content-center' >
      <CountDown/>

      <Container> 
          
          <Title> Hola, Soy un container guapisimo </Title>
      
      </Container>
    </div>
  )
}

export default ContainerMain