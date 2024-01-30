import React, { useEffect, useState } from 'react';
import { Card, Modal, Form, Button, ListGroup } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit'; // Assicurati che la tua libreria MDBReact sia importata correttamente
import { vinsToken } from '../../dati';


export default function Activity() {

  const [userData, setUserData] = useState(null);
  const [show, setShow] = useState(false);
  const [postContent, setPostContent] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const pubblica = async () => {
    try {
      handleClose(); // Chiudi la modale prima della pubblicazione

      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': vinsToken,
        },
        body: JSON.stringify({ content: postContent }),
      });

      if (!response.ok) {
        throw new Error(`Error posting data`);
      }

      // Aggiorna i dati dopo la pubblicazione
      const newData = await response.json();
      setUserData(newData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Card className='w-100 rounded-5 my-5'>
      <Card.Body className='d-flex justify-content-between'>
        <div>
            <Card.Title>Activity</Card.Title>
            <Card.Text>10 followers</Card.Text>
            <Card.Text className='fw-bold'>You haven't posted yet</Card.Text>
            <Card.Text>Posts you share will be displayed here.</Card.Text>
        </div>
        <div className='d-flex align-items-baseline'>
            <Button variant="outline-primary" className='rounded-pill py-2 fs-5 px-4 hoverButtonBlue' onClick={handleShow}>Create a post</Button>
            <Button variant="light" className='fs-3 ms-2'>{/* <HiOutlinePencil /> onClick={handleShow}>*/}</Button>
        </div>
        
      </Card.Body>
      <Card.Footer className="text-muted text-center">
        <ListGroup.Item action className='underlineParagraph' >Show all activity {/* <FaArrowRightLong /> onClick={handleShow}>*/}</ListGroup.Item>
        </Card.Footer>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='hoverButtonBlue'>Crea un Post</Modal.Title>
        </Modal.Header>
        {/*<Modal.Header closeButton>
          <Modal.Title>Creat un Post</Modal.Title>
            <div className="dropdown">
              <button className="dropdown-btn"> Name ecc.</button> creare un'altra modale  
            
            </div>
          </Modal.Header>*/}
        <Modal.Body>
          <Form>
            {/*<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Type you email..."
                autoFocus
              />
  </Form.Group>*/}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control style={{resize: "none"}} className='border-0' as="textarea" rows={3} placeholder="Di cosa vorresti parlare?"/>
            </Form.Group>
            <Form.Group className='d-flex justify-content-start'>
              <MDBIcon far icon="image" className='pe-2' />
              <MDBIcon far icon="calendar-alt" className='pe-2' />
              <MDBIcon fas icon="sms" className='pe-2' />
              <MDBIcon fas icon="ellipsis-h"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <MDBIcon far icon="clock" />
          <Button variant="primary" onClick={pubblica}>
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>

      {/*<Modal.Dialog>     MODALE SULL'ICONA PENNA, Da collegare
        <Modal.Header closeButton>
          <Modal.Title>Quali contenuti vuoi mostrare per primi?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>La tua attività recente mostrerà solo i contenuti degli ultimi 360 giorni.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog> */}

      
    </>
  );
}
