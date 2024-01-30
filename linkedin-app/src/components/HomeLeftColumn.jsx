import React from 'react'
import { Button, Image, Card, Accordion, Container } from 'react-bootstrap'

import { BookmarkFill } from 'react-bootstrap-icons'
import { FiPlus } from "react-icons/fi";
import { FaPeopleGroup } from "react-icons/fa6";

export default function HomeLeftColumn({userMe}) {

    
    
    return (
        <Container>
            {userMe &&
                <Card className='rounded-5'>
                    <Card.Img variant="top" src={userMe.image} height={80} />
                    <Card.ImgOverlay className='d-flex justify-content-center align-items-end h-25 mt-3 '>
                        <Image src={userMe.image} alt='profile_img' className='mt-5 rounded-circle border border-5' roundedCircle width={70} height={70} />
                    </Card.ImgOverlay>
                    <Card.Body className='text-center mt-3 welcomeUtente'>
                        <Card.Title>Welcome, {userMe.name}</Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                    <Card.Body className='border-top border-bottom'>
                        <Card.Text>Connections <span className='float-end'>{Math.round(Math.random() * 132)}</span></Card.Text>
                        <Card.Text>Invitations <span className='float-end'>{Math.round(Math.random() * 10)}</span></Card.Text>
                    </Card.Body>
                    <Card.Body className='ombreggiatura'>
                        <Card.Text>Strengthen your profile with an AI writing assistant</Card.Text>
                        <Card.Link href="#">Try premium for free £0 </Card.Link>
                    </Card.Body>
                    <Card.Text className='ps-4 py-2 border-top ombreggiatura'><BookmarkFill className='text-secondary fs-1 pe-3 ' />My Items</Card.Text>
                </Card>}
            <Card className='rounded-5 mt-3'>
                <Card.Body className='p-0'>
                    <Accordion defaultActiveKey={['0']} alwaysOpen flush>

                        <Accordion.Item eventKey="0">
                        <Accordion.Header className='sottolineato'>Recents</Accordion.Header>
                            <Accordion.Body>
                                <Card.Text className='text-truncate m-0 sottolineato'><FaPeopleGroup /> Artificial Intelligence, Machine Learning, Data Science & Robotics',</Card.Text>
                                <Card.Text className='text-truncate m-0 sottolineato'><FaPeopleGroup /> Developers, Engineers & Techies: Solidity, Rust, C++, C#, Python, Java, Javascript | Blockchain</Card.Text>
                                <Card.Text className='text-truncate m-0 sottolineato'><FaPeopleGroup /> User Experience Design (UX)</Card.Text>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                        <Accordion.Header  className='sottolineato'>Groups</Accordion.Header>
                            <Accordion.Body>
                                <Card.Text className='text-truncate m-0 sottolineato'><FaPeopleGroup /> Artificial Intelligence, Machine Learning, Data Science & Robotics',</Card.Text>
                                <Card.Text className='text-truncate m-0 sottolineato'><FaPeopleGroup /> User Experience Design (UX)</Card.Text>
                                <Card.Text className='text-truncate m-0 sottolineato'><FaPeopleGroup /> Developers, Engineers & Techies: Solidity, Rust, C++, C#, Python, Java, Javascript | Blockchain</Card.Text>
                                <Card.Text className='mt-3 sottolineato2'>See All</Card.Text>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Card.Link className='px-4 my-3 d-flex justify-content-between align-items-center sottolineato'>Events <FiPlus className=' fs-5'/></Card.Link>
                    <Card.Link>Followed Hashtags</Card.Link>
                </Card.Body>
                <Card.Footer className='text-center mt-3 ombreggiatura'>Discover More</Card.Footer>
            </Card>
        </Container>

    )
}
