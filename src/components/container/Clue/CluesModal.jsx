import React , {useState} from 'react'
import Modal from 'react-bootstrap/Modal';


const CluesModal = (props) => {
  
  return (
    <>
      <Modal
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
      
    </Modal>
    </>

  )
}

export default CluesModal