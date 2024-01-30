
import React, { useState } from 'react';
import { Card, Modal, Form, Button, ListGroup } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { PencilFill } from 'react-bootstrap-icons';
import { MdDelete } from 'react-icons/md';
import { deletePost, editPost } from '../redux/actions/PostAction';



export default function ActivityPostCard({ post }) {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [postContent, setPostContent] = useState(post.text);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [img, setImg] = useState(null);



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
            <Card className='rounded-5 border my-2 px-3 pt-3' >

                <Card.Title>{post.username}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{post.createdAt}</Card.Subtitle>
                <Card.Body>
                    <Card.Text className='p-2'>{post.text}</Card.Text>
                </Card.Body>
                <Card.Subtitle className="mb-2 text-muted text-end">{Math.round(Math.random() * 100)} comments</Card.Subtitle>

                <Card.Footer className='p-1 d-flex justify-content-between cardFooter'>
                    <p className='d-flex align-items-center' onClick={() => setShow(true)}><PencilFill className=' pe-2 fs-2 mt-1' /></p>
                    <p className='d-flex align-items-center' onClick={() =>  dispatch(deletePost(post._id))}><MdDelete className=' pe-2 fs-2 mt-1 ' /></p>
                </Card.Footer>
            </Card>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifica Post</Modal.Title>
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
                        dispatch(editPost(postContent, post._id, img))
                        setShow(false)
                    }
                    }>

                       Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
