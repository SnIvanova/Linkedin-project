import React, { useEffect, useState } from 'react'
import { HiOutlinePencil } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { BsPersonFillAdd } from "react-icons/bs";
import { Card, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { henKey } from '../../dati';

export default function Sidebar() {

    const [userData, setUserData] = useState([])

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
            .then((data) => setUserData(data.sort(() => (Math.ceil(Math.random() - 0.5)))))
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        searchList();
    }, []);



    return (
        <Col md={4}>
            <Card className='rounded-5 mb-5 '>
                <Card.Body >
                    <Card.Title>Profile language <HiOutlinePencil className='fs-5 float-end' /></Card.Title>
                    <Card.Text className='text-muted'>English</Card.Text>
                    <br />
                    <Card.Title>Profile profile & URL <HiOutlinePencil className='fs-5 float-end' /></Card.Title>
                    <Card.Text className='text-muted'>www.placeholder.com</Card.Text>
                </Card.Body>
            </Card>

            <Card className='text-center rounded-5 my-5'>
                <Card.Body >
                    <Card.Text className='text-end'> Ad <BsThreeDots /></Card.Text>
                    <Card.Text className='text-muted'> Nomeplaceholder, make connections that matter most in your job search </Card.Text>
                    <Card.Img className='w-25' alt='linkedIn logo' src='' />
                    <Card.Title>See who's viewed your profile in the lst 90 days</Card.Title>
                    <Button variant="outline-primary" className='rounded-pill py-2 fs-5 px-4'>Try for free!</Button>
                </Card.Body>
            </Card>

            <Card className='rounded-5 my-5'>
                <Card.Title className='mt-5 ms-4'>People also viewed</Card.Title>
                {userData.map((user, i) => {
                    let n = Math.ceil(Math.random() * 2 + 1);
                    return i < 5 &&
                    <Card.Body key={i} className='border-bottom' >
                        <Row>
                            <Col md={3}><Card.Img className='rounded-circle' alt='friend logo' src={user.image} /></Col>
                            <Col md={9}>
                                <Card.Text> <span className='fw-bold'>{user.name} {user.surname}</span> <span className='text-opacity-25'>
                                    · {n == 2 ? n + 'nd' : n + 'rd'}</span> </Card.Text>
                                <Card.Text className='text-muted'>{user.title} </Card.Text>
                                <Button variant="outline-secondary" className='rounded-pill py-2 fs-5 px-4'> <BsPersonFillAdd />  Connect</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                })}
                <Card.Footer className="text-muted text-center">
                    <ListGroup.Item action >Show All</ListGroup.Item>
                </Card.Footer>
            </Card>

            <Card className='rounded-5 my-5'>
                <Card.Title className='mt-5 ms-4'>People you may know</Card.Title>
                {userData.map((user, i) => ( i > 4 && i < 12 &&
                    <Card.Body key={i} className='border-bottom' >
                        <Row>
                            <Col md={3}><Card.Img className='rounded-circle' alt='friend logo' src={user.image} height={80} width={80} /></Col>
                            <Col md={9}>
                                <Card.Text> <span className='fw-bold'>{user.name} {user.surname}</span></Card.Text>
                                <Card.Text className='text-muted'>{user.title} </Card.Text>
                                <Button variant="outline-secondary" className='rounded-pill py-2 fs-5 px-4'> <BsPersonFillAdd />  Connect</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                ))}
                <Card.Footer className="text-muted text-center">
                    <ListGroup.Item action >Show All </ListGroup.Item>
                </Card.Footer>
            </Card>
        </Col>
    )
}
