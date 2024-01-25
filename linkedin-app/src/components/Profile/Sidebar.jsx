import React from 'react'
import { HiOutlinePencil } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { BsPersonFillAdd } from "react-icons/bs";
import {Card, Row, Col, ListGroup, Button} from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6"; 


export default function Sidebar() {
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
                    <Card.Img className='w-25' alt='linkedIn logo'  src='https://media.licdn.com/dms/image/C560EAQGdMVS0Q25gPw/rightRail-logo-shrink_200_200/0/1663316485517?e=1706792400&v=beta&t=9xXMZ32-DzbmxOLaU39CWglxo8TgnubG7sSwV08w-q8' />
                    <Card.Title>See who's viewed your profile in the lst 90 days</Card.Title>
                    <Button variant="outline-primary" className='rounded-pill py-2 fs-5 px-4'>Try for free!</Button>
                </Card.Body>
            </Card>

            <Card className='rounded-5 my-5'>
                <Card.Title className='mt-5 ms-4'>People also viewed</Card.Title>
                <Card.Body >
                    <Row>
                        <Col md={3}><Card.Img  className='w-25 rounded-circle' alt='friend logo'  src='https://media.licdn.com/dms/image/D4E03AQGm2ur903gKnA/profile-displayphoto-shrink_100_100/0/1698300814389?e=1711584000&v=beta&t=5oNvZaLJjPY9533Tzx_w2QoNFuMytZcmpo1AEQduUsg' /></Col>
                        <Col md={9}>
                            <Card.Text> <span className='fw-bold'> Mariio Rossi Nicholas Rossi</span> <span className='text-opacity-25'>· 2nd</span> </Card.Text>
                            <Card.Text className='text-muted'> Technical Sales Engineer presso R.T.A. srlTechnical Sales Engineer presso R.T.A. srl </Card.Text>
                        <Button variant="outline-secondary" className='rounded-pill py-2 fs-5 px-4'> <BsPersonFillAdd />  Connect</Button>
                    </Col>
                    </Row>
                </Card.Body>
                <hr />
                <Card.Body >
                    <Row>
                        <Col md={3}><Card.Img  className='w-25 rounded-circle' alt='friend logo'  src='https://media.licdn.com/dms/image/D4E03AQGm2ur903gKnA/profile-displayphoto-shrink_100_100/0/1698300814389?e=1711584000&v=beta&t=5oNvZaLJjPY9533Tzx_w2QoNFuMytZcmpo1AEQduUsg' /></Col>
                        <Col md={9}>
                            <Card.Text> <span className='fw-bold'> Mariio Rossi Nicholas Rossi</span> <span className='text-opacity-25'>· 2nd</span> </Card.Text>
                            <Card.Text className='text-muted'> Technical Sales Engineer presso R.T.A. srlTechnical Sales Engineer presso R.T.A. srl </Card.Text>
                        <Button variant="outline-secondary" className='rounded-pill py-2 fs-5 px-4'> <BsPersonFillAdd />  Connect</Button>
                    </Col>
                    </Row>
                </Card.Body>
                <hr />
                <Card.Body >
                    <Row>
                        <Col md={3}><Card.Img  className='w-25 rounded-circle' alt='friend logo'  src='https://media.licdn.com/dms/image/D4E03AQGm2ur903gKnA/profile-displayphoto-shrink_100_100/0/1698300814389?e=1711584000&v=beta&t=5oNvZaLJjPY9533Tzx_w2QoNFuMytZcmpo1AEQduUsg' /></Col>
                        <Col md={9}>
                            <Card.Text> <span className='fw-bold'> Mariio Rossi Nicholas Rossi</span> <span className='text-opacity-25'>· 2nd</span> </Card.Text>
                            <Card.Text className='text-muted'> Technical Sales Engineer presso R.T.A. srlTechnical Sales Engineer presso R.T.A. srl </Card.Text>
                        <Button variant="outline-secondary" className='rounded-pill py-2 fs-5 px-4'> <BsPersonFillAdd />  Connect</Button>
                    </Col>
                    </Row>
                </Card.Body>
                <hr />
                <Card.Body >
                    <Row>
                        <Col md={3}><Card.Img  className='w-25 rounded-circle' alt='friend logo'  src='https://media.licdn.com/dms/image/D4E03AQGm2ur903gKnA/profile-displayphoto-shrink_100_100/0/1698300814389?e=1711584000&v=beta&t=5oNvZaLJjPY9533Tzx_w2QoNFuMytZcmpo1AEQduUsg' /></Col>
                        <Col md={9}>
                            <Card.Text> <span className='fw-bold'> Mariio Rossi Nicholas Rossi</span> <span className='text-opacity-25'>· 2nd</span> </Card.Text>
                            <Card.Text className='text-muted'> Technical Sales Engineer presso R.T.A. srlTechnical Sales Engineer presso R.T.A. srl </Card.Text>
                        <Button variant="outline-secondary" className='rounded-pill py-2 fs-5 px-4'> <BsPersonFillAdd />  Connect</Button>
                    </Col>
                    </Row>
                </Card.Body>
                <hr />
                <Card.Body >
                    <Row>
                        <Col md={3}><Card.Img  className='w-25 rounded-circle' alt='friend logo'  src='https://media.licdn.com/dms/image/D4E03AQGm2ur903gKnA/profile-displayphoto-shrink_100_100/0/1698300814389?e=1711584000&v=beta&t=5oNvZaLJjPY9533Tzx_w2QoNFuMytZcmpo1AEQduUsg' /></Col>
                        <Col md={9}>
                            <Card.Text> <span className='fw-bold'> Mariio Rossi Nicholas Rossi</span> <span className='text-opacity-25'>· 2nd</span> </Card.Text>
                            <Card.Text className='text-muted'> Technical Sales Engineer presso R.T.A. srlTechnical Sales Engineer presso R.T.A. srl </Card.Text>
                        <Button variant="outline-secondary" className='rounded-pill py-2 fs-5 px-4'> <BsPersonFillAdd />  Connect</Button>
                    </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="text-muted text-center">
                    <ListGroup.Item action >Show All <FaArrowRightLong /></ListGroup.Item>
                </Card.Footer>
            </Card>
            
            <Card className='rounded-5 my-5'>
                <Card.Title className='mt-5 ms-4'>People you may know</Card.Title>
                <Card.Body >
                    <Row>
                        <Col md={3}><Card.Img  className='w-25 rounded-circle' alt='friend logo'  src='https://media.licdn.com/dms/image/D4E03AQGm2ur903gKnA/profile-displayphoto-shrink_100_100/0/1698300814389?e=1711584000&v=beta&t=5oNvZaLJjPY9533Tzx_w2QoNFuMytZcmpo1AEQduUsg' /></Col>
                        <Col md={9}>
                            <Card.Text className='fw-bold'> Mariio Rossi Nicholas Rossi</Card.Text>
                            <Card.Text className='text-muted'> Technical Sales Engineer presso R.T.A. srlTechnical Sales Engineer presso R.T.A. srl </Card.Text>
                        <Button variant="outline-secondary" className='rounded-pill py-2 fs-5 px-4'> <BsPersonFillAdd />  Connect</Button>
                    </Col>
                    </Row>
                </Card.Body>
                <hr />
                <Card.Body >
                    <Row>
                        <Col md={3}><Card.Img  className='w-25 rounded-circle' alt='friend logo'  src='https://media.licdn.com/dms/image/D4E03AQGm2ur903gKnA/profile-displayphoto-shrink_100_100/0/1698300814389?e=1711584000&v=beta&t=5oNvZaLJjPY9533Tzx_w2QoNFuMytZcmpo1AEQduUsg' /></Col>
                        <Col md={9}>
                            <Card.Text className='fw-bold'> Mariio Rossi Nicholas Rossi</Card.Text>
                            <Card.Text className='text-muted'> Technical Sales Engineer presso R.T.A. srlTechnical Sales Engineer presso R.T.A. srl </Card.Text>
                        <Button variant="outline-secondary" className='rounded-pill py-2 fs-5 px-4'> <BsPersonFillAdd />  Connect</Button>
                    </Col>
                    </Row>
                </Card.Body>
                <hr />
                <Card.Body >
                    <Row>
                        <Col md={3}><Card.Img  className='w-25 rounded-circle' alt='friend logo'  src='https://media.licdn.com/dms/image/D4E03AQGm2ur903gKnA/profile-displayphoto-shrink_100_100/0/1698300814389?e=1711584000&v=beta&t=5oNvZaLJjPY9533Tzx_w2QoNFuMytZcmpo1AEQduUsg' /></Col>
                        <Col md={9}>
                            <Card.Text className='fw-bold'> Mariio Rossi Nicholas Rossi</Card.Text>
                            <Card.Text className='text-muted'> Technical Sales Engineer presso R.T.A. srlTechnical Sales Engineer presso R.T.A. srl </Card.Text>
                        <Button variant="outline-secondary" className='rounded-pill py-2 fs-5 px-4'> <BsPersonFillAdd />  Connect</Button>
                    </Col>
                    </Row>
                </Card.Body>
                <hr />
                <Card.Body >
                    <Row>
                        <Col md={3}><Card.Img  className='w-25 rounded-circle' alt='friend logo'  src='https://media.licdn.com/dms/image/D4E03AQGm2ur903gKnA/profile-displayphoto-shrink_100_100/0/1698300814389?e=1711584000&v=beta&t=5oNvZaLJjPY9533Tzx_w2QoNFuMytZcmpo1AEQduUsg' /></Col>
                        <Col md={9}>
                            <Card.Text className='fw-bold'> Mariio Rossi Nicholas Rossi</Card.Text>
                            <Card.Text className='text-muted'> Technical Sales Engineer presso R.T.A. srlTechnical Sales Engineer presso R.T.A. srl </Card.Text>
                        <Button variant="outline-secondary" className='rounded-pill py-2 fs-5 px-4'> <BsPersonFillAdd />  Connect</Button>
                    </Col>
                    </Row>
                </Card.Body>
                <hr />
            </Card>
        </Col>
    )
}
