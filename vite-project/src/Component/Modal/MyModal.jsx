import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const MyModal = ({ show, handleClose }) => {
    return (
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            ...
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary">Understood</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default MyModal

