import React, { useEffect, useState } from 'react';
import { Card, Modal, Form, Button, ListGroup } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, getPost } from '../../redux/actions/PostAction';
import ActivityPostCard from '../ActivityPostCard';


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
            <Button variant="outline-primary" className='rounded-pill py-2 fs-5 px-4 hoverButtonBlue' onClick={handleShow}>Create a post</Button>
          </div>
          {userPosts ?
            <div style={{ maxHeight: '500px', overflowY: 'scroll' }}>
              {userPosts.map((post, i) => (
                  <ActivityPostCard key={i} post={post} />
              ))}
            </div>
            :
            <div>
              <Card.Text className='fw-bold'>You haven't posted yet</Card.Text>
              <Card.Text>Posts you share will be displayed here.</Card.Text>
            </div>}



        </Card.Body>
        <Card.Footer className="text-muted text-center">
          <ListGroup.Item action >Show all activity </ListGroup.Item>
        </Card.Footer>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='hoverButtonBlue'>Crea un Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control style={{ resize: "none" }} value={postContent} onChange={(e) => setPostContent(e.target.value)} className='border-0' as="textarea" rows={3} placeholder="Di cosa vorresti parlare?" />
            </Form.Group>
            {previewUrl && <img className='w-100 h-75' src={previewUrl} />}
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
            handleClose();

          }
          }>

            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
