import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import { MdPeopleAlt } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6"; 
import { Image } from 'react-bootstrap';
import profile_img from '../assets/profile_img_PlaceHolder.png'
import bg_img from '../assets/bg_img_placeHolder.png'
import {Row, Col} from 'react-bootstrap'
import { HiOutlinePencil } from "react-icons/hi2";

export default function MainProfile() {
  return (
    <Card className='rounded-5'>
        <Card.Img src={bg_img} alt='Background Image' height={350} />
        <Card.ImgOverlay>
            <Button variant='light' className='rounded-cirle float-end' ><Image src={profile_img} height={20} width={20} /></Button>
            <Row className="justify-content-start align-items-center">
              <Col xs="auto" className="bg-white rounded-circle p-5">
                <Image src={profile_img} height={100} width={100}/>
              </Col>
            </Row>
        </Card.ImgOverlay>
        <Card.Body >
          <Button variant="light" className='fs-3 float-end'><HiOutlinePencil /></Button>
            <Row>
              <Col md={6}>
                <Card.Title>Name Namone </Card.Title>
                <Card.Text className='fw-bold'>Muratore presso muralandia </Card.Text>
                <Card.Text className='text-muted'>Lagos, Nigeria, Africa <a variant='link' className='text-decoration-none'>Contact info</a></Card.Text>
                <Card.Text className='text-primary'>10 connections </Card.Text>
                <Button variant="primary" className='rounded-pill py-2 px-3'>Open to</Button>
                <Button variant="outline-primary" className='rounded-pill py-2 mx-3 px-3'>Add profile section</Button>
                <Button variant="outline-secondary" className='rounded-pill py-2 px-3'>More</Button>
              </Col>
              <Col>
                <img src={profile_img} alt="img" width={30} height={30} />
              </Col>
            </Row>
            <Card.Title>Analytics</Card.Title>
            
            <Card.Text className='fw-bold'><MdPeopleAlt className='fs-5 me-2' />1 profile view </Card.Text>
            <Card.Text className='ms-4'>Discover who viewed your profile</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted text-center">
        <ListGroup.Item action >Show all analytics <FaArrowRightLong /></ListGroup.Item>
        </Card.Footer>
    </Card>
  );
}