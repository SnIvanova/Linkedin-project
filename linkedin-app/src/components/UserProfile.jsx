import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { Button, Card, Col, Image, Row, ListGroup } from 'react-bootstrap';
import { HiOutlinePencil } from 'react-icons/hi';
import { FaArrowRightLong } from "react-icons/fa6";
import { getUserProfile, updateProfile } from '../redux/actions/user';
// Import 
import Activity from '../components/Profile/Activity';
import Analytics from '../components/Profile/Analytics';
import Sidebar from '../components/Profile/Sidebar';
import EditProfileModal from '../components/Profile/EditProfileModal'; 
import Experiences from './Experience';
import Interessi from "../components/Profile/Interests"
//import ModaleExperiences from '../Expirience/ModaleExperiences'; 

const UserProfile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userMe);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getUserProfile(userId));
  }, [dispatch, userId]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleSave = (updatedData) => {
    dispatch(updateProfile(userId, updatedData));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  const { area, bio, createdAt, email, image, name, surname, title, updatedAt, username } = user;
  const CreatedAt = format(new Date(createdAt), 'MMMM dd, yyyy');
  const UpdatedAt = format(new Date(updatedAt), 'MMMM dd, yyyy');

  return (
    <Row className='p-5'>
    <Col md={8}>
    <Card className='rounded-5'>
      <Card.Img src={image} alt='Background Image' height={350} />
      
        <Button variant='light' className='rounded-circle float-end'>
          <Image src={image} height={20} width={20} />
        </Button>
        <Row className='justify-content-start align-items-center'>
          <Col xs='auto' className='bg-white rounded-circle p-5'>
            <Image src={image} height={100} width={100} />
          </Col>
        </Row>
      
      <Card.Body>
        <Button variant='light' className='fs-3 float-end'>
          <HiOutlinePencil  onClick={handleShowModal}/>
        </Button>
        <Row>
          <Col md={6}>
            <Card.Title>{name} {surname}</Card.Title>
            <Card.Text className='fw-bold'>{title} at {area}</Card.Text>
            <Card.Text className='text-muted'>{bio}</Card.Text>
            <Card.Text className='text-muted'>Email: {email}</Card.Text>
            <Card.Text className='text-muted'>Username: {username}</Card.Text>
            <Card.Text className='text-muted'>Joined: {CreatedAt}</Card.Text>
            <Card.Text className='text-muted'>Last updated: {UpdatedAt}</Card.Text>
          </Col>
          
        </Row>
        
      </Card.Body>
      <Card.Footer className='text-muted text-center'>
        <ListGroup.Item action>Show all analytics  <FaArrowRightLong /></ListGroup.Item>
      </Card.Footer>
    </Card>
        <Analytics />
        <Interessi />
        <Activity />
         <Experiences /> 
    </Col>
    <Sidebar />
    <EditProfileModal show={showModal} onHide={handleHideModal} onSave={handleSave} user={user} />
</Row>
)
};  

export default UserProfile;