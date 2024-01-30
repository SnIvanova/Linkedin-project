import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Button, Pagination } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { PiImageBold } from "react-icons/pi";
import { GrDocumentText } from "react-icons/gr";
import { FaCalendarDays } from "react-icons/fa6";
import { getPosts } from '../redux/actions/PostAction';
import { BiLike, BiMessage, BiRepost } from 'react-icons/bi';
import { SendPlus } from 'react-bootstrap-icons';

export default function HomeCenterColumn({ userImg }) {

    const posts = useSelector(state => state.post.posts)
    const randPosts = posts.toSorted(() => Math.ceil(Math.random() - 0.5))
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);

    const [postsPerPage, totalPosts] = [25, randPosts.length]
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = randPosts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(totalPosts / postsPerPage);


    const paginationItems = [];
    paginationItems.push(
        <Pagination.First key="first" onClick={() => paginate(1)} />,
        <Pagination.Prev key="prev" onClick={() => paginate(Math.max(1, currentPage - 1))} disabled={currentPage === 1} />
    );
    if (currentPage > 3) {
        paginationItems.push(<Pagination.Item key={1} onClick={() => paginate(1)}>{1}</Pagination.Item>);
        paginationItems.push(<Pagination.Ellipsis key="ellipsis-first" />);
    }
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(currentPage + 2, totalPages); i++) {
        paginationItems.push(
            <Pagination.Item key={i} active={i === currentPage} onClick={() => paginate(i)}>
                {i}
            </Pagination.Item>
        );
    }
    if (currentPage < totalPages - 2) {
        paginationItems.push(<Pagination.Ellipsis key="ellipsis-last" />);
        paginationItems.push(<Pagination.Item key={totalPages} onClick={() => paginate(totalPages)}>{totalPages}</Pagination.Item>);
    }

    paginationItems.push(
        <Pagination.Next key="next" onClick={() => paginate(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} />,
        <Pagination.Last key="last" onClick={() => paginate(totalPages)} />
    );
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

                        }} variant='outline-secondary' className='rounded-pill py-2 text-start fs-5  ps-4 w-100 mt-3' >Start a post </Button></Col>
                    </Row>
                    <div className='d-flex justify-content-between px-2 mt-3'>
                        <p className='d-flex align-items-center element1'><PiImageBold className='text-primary pe-2 fs-1' />  Media</p>
                        <p className='d-flex align-items-center element2'><FaCalendarDays className='text-warning pe-2 fs-2' />Event</p>
                        <p className='d-flex align-items-center element3'><GrDocumentText className='text-warning pe-2 fs-2' /> Write article</p>
                    </div>
                </Card.Body>
            </Card >
            <div>
                <Pagination className='d-flex justify-content-center border border-1'>{paginationItems}</Pagination>

                {
                    currentPosts.map((post, i) => (
                        <Card key={i} className='mt-3 px-3 pt-3'>

                            <Card.Title>{post.username}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{post.createdAt}</Card.Subtitle>
                            <Card.Body>

                                <Card.Text className='p-2'>{post.text}</Card.Text>
                            </Card.Body>
                            <Card.Subtitle className="mb-2 text-muted text-end">{Math.round(Math.random() * 100)} comments</Card.Subtitle>

                            <Card.Footer className='p-1 d-flex justify-content-between cardFooter'>
                                <p className='d-flex align-items-center'><BiLike className=' pe-2 fs-2 mt-1 ' />  Like</p>
                                <p className='d-flex align-items-center'><BiMessage className=' pe-2 fs-2 mt-1 ' />Message</p>
                                <p className='d-flex align-items-center'><BiRepost className=' pe-2 fs-2 mt-1 ' /> Repost</p>
                                <p className='d-flex align-items-center'><SendPlus className=' pe-2 fs-2 mt-1 ' /> Send</p>
                            </Card.Footer>
                        </Card>
                    ))
                }
                <Pagination className='d-flex justify-content-center border border-1'>{paginationItems}</Pagination>
            </div>
        </>
    )
}
