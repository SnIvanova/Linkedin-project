/* import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import MDBIcon from 'mdb-react-ui-kit'

export default function CreatePost() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <>
        <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Di cosa vorresti parlare?</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Di cosa vorresti parlare?</Form.Label>
              <div>
              <MDBIcon far icon="image" />
              <MDBIcon far icon="calendar-alt" />
              <MDBIcon fas icon="sms" />
              <MDBIcon fas icon="ellipsis-h" />
                </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <MDBIcon far icon="clock" />
          <Button variant="primary" onClick={handleClose}>
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </>
  )
}
 */