import React from 'react'
import { Card } from 'react-bootstrap'
import { FaPen } from "react-icons/fa";
import { useState } from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

export default function About() {

    const [show, setShow] = useState(false);
    const [query, setQuery] = useState("Scrivi qualcosa...");
    const handleClose = () => {
        setShow(false);
        setQuery(query);
    }
    const handleShow = () => setShow(true);
  return (
    <>
        <Card style={{ width: '24rem' }}>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-center about'>
                    <h1>About</h1>
                    <FaPen onClick={handleShow} className='FaPen'/>
                </Card.Title>
                <Card.Text className='text-secondary'>
                {query}
                </Card.Text>
            </Card.Body>
        </Card>

        {/*Modale Aperto */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit About</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className='text-secondary labelAbout'>You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.</Form.Label>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control as="textarea" value={query} rows={3} onChange={(e) => setQuery(e.target.value)}/>
        
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
    </>
  )
}
