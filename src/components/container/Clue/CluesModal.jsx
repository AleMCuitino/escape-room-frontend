import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { ClueModalWindow } from '@/styled-components/containers-styled';


const CluesModal = (props) => {
  
  return (
    <>
      <ClueModalWindow
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
          <Modal.Header closeButton>  
          </Modal.Header>
          <Modal.Body>
            <h4>{props.cluesTitle} Titulo</h4>
            <p>
              {props.cluesPara}
              Teeeeeeeeeeeeeeeeeexto con props
            </p>
          </Modal.Body>
      
    </ClueModalWindow>
    </>

  )
}

export default CluesModal