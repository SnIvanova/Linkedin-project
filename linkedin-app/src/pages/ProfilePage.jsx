import React, { useEffect } from 'react'
import Activity from '../components/Profile/Activity'
import Analytics from '../components/Profile/Analytics'
import { Row, Col } from 'react-bootstrap'
import Sidebar from '../components/Profile/Sidebar'
import MainProfile from '../components/MainProfile'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getUserMe, getUserProfile } from '../redux/actions/user'
import { useParams } from 'react-router-dom'




export default function ProfilePage() {
    const {userId} = useParams()
    const userMe = useSelector(state => state.user.userMe)
    const dispatch = useDispatch()

    useEffect(() => {

        userId === 'me' ? dispatch(getUserMe()) : dispatch(getUserProfile(userId))

    }, [userId])


    return (
        <>{userMe &&
            <Row className='container mx-auto mt-5'>
                <Col md={8}>
                    <MainProfile userMe={userMe} />
                    <Analytics />
                    <Activity username={userMe.username}/>
                    <Experience/>
                </Col>
                <Sidebar  />
            </Row>}
            <Footer modfooter={true} />
        </>
    )
}