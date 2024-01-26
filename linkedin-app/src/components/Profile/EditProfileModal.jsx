import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { useState } from 'react';

export default function EditProfileModal({show, onHide, onSave}) {

    const [userProfile, setUserProfile] = useState({firstname:'', lastname:'', email:'', bio:'', title:'', area:''  })

    const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(userProfile); 
  };
    
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit intro
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicFirstname">
                        <Form.Label>First name</Form.Label>
                        <Form.Control value={userProfile.firstname} onChange={handleChange} name='firstname' type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastname">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control value={userProfile.lastname} onChange={handleChange} name='lastname' type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={userProfile.email} onChange={handleChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicbio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control value={userProfile.bio} onChange={handleChange} name='bio' type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={userProfile.title} onChange={handleChange} name='title' type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicArea">
                        <Form.Label>Area</Form.Label>
                        <Form.Control value={userProfile.area} onChange={handleChange} name='area' type="text" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => onHide(!show)}>Close</Button>
                <Button onClick={(e) => {
                    onHide(!show)
                    handleSubmit(e)
                    }}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}