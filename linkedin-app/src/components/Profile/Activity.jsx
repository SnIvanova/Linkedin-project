import React, { useEffect, useState } from 'react';
import { Card, Modal, Form, Button, ListGroup } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, getPost } from '../../redux/actions/PostAction';
import { PencilFill } from 'react-bootstrap-icons';
import { MdDelete } from 'react-icons/md';


export default function Activity({ username }) {

  const userPosts = useSelector(state => state.post.userPosts) || null
  const [show, setShow] = useState(false);
  const [postContent, setPostContent] = useState("");
  const dispatch = useDispatch();
  const [previewUrl, setPreviewUrl] = useState(null);
  const [img, setImg] = useState(null);
  console.log(userPosts)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const pubblica = async () => {
  //   try {
  //     handleClose(); // Chiudi la modale prima della pubblicazione

  //     const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': henKey,
  //       },
  //       body: JSON.stringify({ content: postContent }),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error posting data`);
  //     }

  //     // Aggiorna i dati dopo la pubblicazione
  //     const newData = await response.json();
  //     setUserData(newData);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    dispatch(getPost(username))
  }, [username])


  const handleFileChange = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
        setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    setImg(e.target.files[0])
};

  return (
    <>
      <Card >
        <Card.Body >
          <div className='d-flex justify-content-between'>
            <div>
              <Card.Title>Activity</Card.Title>
              <Card.Text>10 followers</Card.Text>
            </div>
            <Button variant="outline-primary" className='rounded-pill py-2 fs-5 px-4' onClick={handleShow}>Create a post</Button>
          </div>
          {userPosts ?
            <div style={{ maxHeight: '500px', overflowY: 'scroll' }}>
              {userPosts.map((post, i) => (
                <Card key={i} className='rounded-5 border my-2 px-3 pt-3' >

                  <Card.Title>{post.username}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{post.createdAt}</Card.Subtitle>
                  <Card.Body>
                    <Card.Text className='p-2'>{post.text}</Card.Text>
                  </Card.Body>
                  <Card.Subtitle className="mb-2 text-muted text-end">{Math.round(Math.random() * 100)} comments</Card.Subtitle>

                  <Card.Footer className='p-1 d-flex justify-content-between cardFooter'>
                    <p className='d-flex align-items-center'><PencilFill className=' pe-2 fs-2 mt-1' /></p>
                    <p className='d-flex align-items-center'><MdDelete className=' pe-2 fs-2 mt-1 ' /></p>
                  </Card.Footer>
                </Card>

              ))}
            </div>
            :
            <div>
              <Card.Text className='fw-bold'>You haven't posted yet</Card.Text>
              <Card.Text>Posts you share will be displayed here.</Card.Text>
            </div>}



        </Card.Body>
        <Card.Footer className="text-muted text-center">
          <ListGroup.Item action >Show all activity {/* <FaArrowRightLong /> onClick={handleShow}>*/}</ListGroup.Item>
        </Card.Footer>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea un Post</Modal.Title>
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
              <Form.Control style={{ resize: "none" }} value={postContent} onChange={(e) => setPostContent(e.target.value)} className='border-0' as="textarea" rows={3} placeholder="Di cosa vorresti parlare?" />
            </Form.Group>
            {img && <img className='w-100 h-75' src={img} />}
            <Form.Group controlId="formFile" className="" >
              <Form.Control type="file" name='post' onChange={handleFileChange} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <MDBIcon far icon="clock" />
          <Button variant="primary" onClick={() => {
            dispatch(createPost(postContent, img))
            console.log(postContent)
          }
          }>

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
