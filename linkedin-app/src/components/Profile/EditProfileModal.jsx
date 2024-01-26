import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, updateProfileImage } from '../../redux/actions/user';
import { henKey } from '../../dati';

export default function EditProfileModal({ show, onHide, edit }) {
    const { _id, name, surname, email, bio, title, area } = useSelector(state => state.user.userMe)
    const [userProfile, setUserProfile] = useState({ name: name, surname: surname, email: email, bio: bio, title: title, area: area })
    const dispatch = useDispatch()
    const [previewUrl, setPreviewUrl] = useState(null);
    const [img, setImg] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserProfile((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmitInfo = (e) => {
        e.preventDefault();
        dispatch(updateProfile(userProfile, henKey))
    };

    const handleSubmitImage = (e) => {
        e.preventDefault();
        dispatch(updateProfileImage(_id, img, henKey))
    };

    const handleFileChange = (e) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
        setImg(e.target.files[0])
    };

    return (
        edit === 'info' ?
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
                            <Form.Control value={userProfile.name} onChange={handleChange} name='name' type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLastname">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control value={userProfile.surname} onChange={handleChange} name='surname' type="text" />
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
                        handleSubmitInfo(e)
                    }}>Save</Button>
                </Modal.Footer>
            </Modal>

            :
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add a background photo
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formFile" className="">
                        <Form.Control type="file" onChange = { handleFileChange } />
                    </Form.Group>
                    {previewUrl && <img className='w-100 h-75' src={previewUrl} />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={() => onHide(!show)}>Close</Button>
                    <Button onClick={(e) => {
                        onHide(!show)
                        handleSubmitImage(e)
                    }}>Save CHanges</Button>
                </Modal.Footer>
            </Modal>
    );
}