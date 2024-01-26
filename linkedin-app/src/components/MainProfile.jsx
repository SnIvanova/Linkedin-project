import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import profile_img from '../assets/profile_img_PlaceHolder.png'
import bg_img from '../assets/bg_img_placeHolder.png'
import { Row, Col } from 'react-bootstrap'
import { HiOutlinePencil } from "react-icons/hi2";
import { BiCheckShield } from "react-icons/bi";
import ProfileCarousel from './Profile/profileCarousel';
import { useState } from 'react';
import EditProfileModal from './Profile/EditProfileModal';

export default function MainProfile() {
  const [modalShow, setModalShow] = useState(false);

  return (

    <>
    <Card className='rounded-5'>
      <div className='position-relative'>
        <Card.Img variant='top' src={bg_img} alt='Background Image' height={350} />
        <Row className="justify-content-start align-items-center position-absolute top-0 w-100">
          <Col xs={12} className=" d-flex justify-content-end"><div className='bg-white rounded-circle p-2 m-4'><Image src={profile_img} height={20} width={20} /></div></Col>
          <Col xs={12} className=' d-flex justify-content-start mt-5' ><div className='bg-white rounded-circle p-5 m-5'><Image src={profile_img} height={100} width={100} /></div></Col>
        </Row>
      </div>
      <Card.Body >
        <div className='d-flex justify-content-end'><Button variant='light' className='fs-3' type='button' onClick={() => {console.log('yerp');setModalShow(true)}}><HiOutlinePencil/></Button></div>
        <Row>
          <Col md={8}>
            <Card.Title className='fs-1 d-inline-block m-0 me-2'>Name Namone </Card.Title>
            <Button variant='outline-primary' className=' rounded-pill'><BiCheckShield className='fs-4'/>  Get verified</Button>
            <Card.Text className='fw-bold'>Muratore presso muralandia </Card.Text>
            <Card.Text className='text-muted mb-2'>Lagos, Nigeria, Africa <a variant='link' className='text-decoration-none'>Contact info</a></Card.Text>
            <Card.Text className='text-primary my-1'>10 connections </Card.Text>
            <Button variant="primary" className='rounded-pill py-2 px-3'>Open to</Button>
            <Button variant="outline-primary" className='rounded-pill py-2 mx-3 px-3'>Add profile section</Button>
            <Button variant="outline-dark" className='rounded-pill py-2 px-3'>More</Button>
          </Col>
          <Col className='d-flex '>
            <img src={profile_img} alt="img" width={30} height={30} />
            <Card.Text className='ms-1'>10 connections </Card.Text>
          </Col>
        </Row>
      </Card.Body>
        <ProfileCarousel />
    </Card>

    <EditProfileModal show={modalShow} onHide={setModalShow}/>
    </>
  );
}