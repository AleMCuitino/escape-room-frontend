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

            { props.clue !== "" ? <img className='img-fluid mx-auto d-block' src={props.clue} />  : "" }

            { props.text !== "" ?
            <>
            <h4>{props.text}</h4>
            </>
             : "" }
           
         
             
          
          </Modal.Body>
      
    </ClueModalWindow>
    </>

  )
}

export default CluesModal