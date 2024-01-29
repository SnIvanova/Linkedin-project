import React, { useEffect } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { PiImageBold } from "react-icons/pi";
import { GrDocumentText } from "react-icons/gr";
import { FaCalendarDays } from "react-icons/fa6";
import { getPosts } from '../redux/actions/PostAction';
import { BiLike, BiMessage, BiRepost } from 'react-icons/bi';
import { SendPlus } from 'react-bootstrap-icons';

export default function HomeCenterColumn({userImg}) {

    const posts = useSelector(state => state.post.posts)
    const randPosts = posts.toSorted(()=> Math.ceil(Math.random()- 0.5)).slice(0,25)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [])


    return (
        <>
            <Card className='rounded-5'>
                <Card.Body>
                    <Row>
                        <Col md={2}><Card.Img className='rounded-circle' alt='friend logo' src={userImg} height={80} width={80} /></Col>
                        <Col md={10}><Button onClick={() => {

                        }} variant='outline-secondary' className='rounded-pill py-3 text-start fs-5  ps-4 w-100' >Start a post </Button></Col>
                    </Row>
                    <div className='d-flex justify-content-between px-2 mt-2'>
                        <p className='d-flex align-items-center'><PiImageBold className='text-primary pe-2 fs-1' />  Media</p>
                        <p className='d-flex align-items-center'><FaCalendarDays className='text-warning pe-2 fs-1' />Event</p>
                        <p className='d-flex align-items-center'><GrDocumentText className='text-warning pe-2 fs-1 ' /> Write article</p>
                    </div>
                </Card.Body>
            </Card >

            {randPosts.map((post, i) => (
                <Card key={i} className='mt-3 px-3 pt-3'>

                    <Card.Title>{post.username}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{post.createdAt}</Card.Subtitle>
                    <Card.Body>

                        <Card.Text className='p-2'>{post.text}</Card.Text>
                    </Card.Body>
                    <Card.Subtitle className="mb-2 text-muted text-end">{Math.round(Math.random() * 100)} comments</Card.Subtitle>

                    <Card.Footer className='p-1 d-flex justify-content-between'>
                        <p className='d-flex align-items-center'><BiLike className=' pe-2 fs-1 ' />  Like</p>
                        <p className='d-flex align-items-center'><BiMessage className=' pe-2 fs-1 ' />Message</p>
                        <p className='d-flex align-items-center'><BiRepost className=' pe-2 fs-1' /> Repost</p>
                        <p className='d-flex align-items-center'><SendPlus className=' pe-2 fs-1 ' /> Send</p>
                    </Card.Footer>
                </Card>
            ))}
        </>
    )
}
