import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import profile_img from '../assets/profile_img_PlaceHolder.png'
import { Row, Col } from 'react-bootstrap'
import { HiOutlinePencil } from "react-icons/hi2";
import { BiCheckShield } from "react-icons/bi";
import ProfileCarousel from './Profile/profileCarousel';
import { useState } from 'react';
import EditProfileModal from './Profile/EditProfileModal';


import { useParams } from 'react-router-dom';



export default function MainProfile({userMe}) {

  const [modalShow, setModalShow] = useState(false);
  const [edit, setEdit] = useState('')


  return (

    <>
      {userMe &&
        <Card className='rounded-5'>
          <div className='position-relative'>
            <Card.Img variant='top' src={userMe.image} alt='Background Image' height={350} />
            <Row className="justify-content-start align-items-center position-absolute top-0 w-100 h-75">
              <Col xs={12} className=" d-flex justify-content-end"><div className='bg-white rounded-circle p-2 m-4'><Image src={profile_img} height={20} width={20} /></div></Col>
              <Col xs={6} className=' d-flex justify-content-start mt-5 p-5' > <Image className='mt-5 rounded-circle border border-5' src={userMe.image} height={200} width={200} onClick={() => { setEdit('image'); setModalShow(true) }} /></Col>
            </Row>
          </div>
          <Card.Body >
            <div className='d-flex justify-content-end'><Button variant='light' className='fs-3' type='button' onClick={() => { setEdit('info'); setModalShow(true) }}><HiOutlinePencil /></Button></div>
            <Row>
              <Col md={8}>
                <Card.Title className='fs-1 d-inline-block m-0 me-2'>{userMe.name} {userMe.surname} </Card.Title>
                <Button variant='outline-primary' className=' rounded-pill hoverButtonBlue'><BiCheckShield className='fs-4' />  Get verified</Button>
                <Card.Text className='fw-bold'>{userMe.title} </Card.Text>
                <Card.Text className='text-muted mb-2'>{userMe.area} <a variant='link' className='text-decoration-none'>Contact info</a></Card.Text>
                <Card.Text className='text-primary my-1'> connections </Card.Text>
                <Button variant="primary" className='rounded-pill py-2 px-3'>Open to</Button>
                <Button variant="outline-primary" className='rounded-pill py-2 mx-3 px-3 hoverButtonBlue'>Add profile section</Button>
                <Button variant="outline-dark" className='rounded-pill py-2 px-3 hoverButtonBlack'>More</Button>
              </Col>
              <Col className=' '>
                <Card.Text className='ms-1'>About you: {userMe.bio} </Card.Text>
              </Col>
            </Row>
          </Card.Body>
          <ProfileCarousel />
          <EditProfileModal show={modalShow} onHide={setModalShow} edit={edit} />
        </Card>
      }

    </>
  );
}