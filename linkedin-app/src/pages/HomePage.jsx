import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import HomeLeftColumn from '../components/HomeLeftColumn'
import HomeCenterColumn from '../components/HomeCenterColumn'
import HomeRightColumn from '../components/HomeRightColumn'
import { useDispatch, useSelector } from 'react-redux'
import { getUserMe } from '../redux/actions/user'


export default function HomePage() {
    
    const dispatch = useDispatch()
    const userMe = useSelector(state => state.user.userMe)


    useEffect(() => {
        dispatch(getUserMe())
    }, [])

    return (
        <Row className='container mx-auto mt-3'>
            <Col md={3}>{userMe && <HomeLeftColumn userMe={userMe}/>}</Col>
            <Col xs={12} md={6}>{userMe && <HomeCenterColumn userImg={userMe.image} /> } </Col>
            <Col md={3}> <HomeRightColumn /></Col>
        </Row>
    )
}
