import React, { useEffect, useState } from 'react'
import { Card, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { henKey } from '../dati';
import { BiInfoSquare, BiPlus } from 'react-icons/bi';
import { Linkedin } from 'react-bootstrap-icons';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import linkedinAd from '../assets/linkedinAd.png'




export default function HomeRightColumn() {
    const [userData, setUserData] = useState([])
    const navigate = useNavigate()

    const searchList = () => {
        fetch("https://striveschool-api.herokuapp.com/api/profile/", {
            headers: {
                Authorization: henKey

            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error fetching data`);
                }
                return response.json();
            })
            .then((data) => setUserData(data.sort(() => Math.ceil(Math.random()- 0.5))))
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        searchList();
    }, []);



    return (
        <>
            <Card className='rounded-5'>
                <Card.Title className='m-3'>Add to your feed <BiInfoSquare className='float-end fs-3' /></Card.Title>
                {userData.map((user, i) => (i < 5 &&
                    <Card.Body className='py-2' key={i}>
                        <Row>
                            <Col md={3}><Card.Img className='rounded-circle' alt='friend logo' src={user.image} height={50} width={80} /></Col>
                            <Col md={9}>
                                <Card.Text className='fw-bold m-0' onClick={()=> navigate('/profile/' + user._id) }>{user.name} {user.surname} <Linkedin className='text-success' /></Card.Text>
                                <Card.Text className='text-muted m-0'>{user.title} </Card.Text>
                                <Button variant="outline-info" className='rounded-pill py-2 px-4 outlineInfo'> <BiPlus />  Follow</Button>{' '}
                            </Col>
                        </Row>
                    </Card.Body>
                ))}
                <Card.Footer className="text-muted text-center">
                    <ListGroup.Item action >View All recomendations </ListGroup.Item>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img src={linkedinAd} alt='Linkedin_Hiring' />
            </Card>
            <Footer modfooter={false}/>
        </>
    )
}
