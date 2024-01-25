import React from 'react'
import Activity from '../components/Profile/Activity'
import Analytics from '../components/Profile/Analytics'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../components/Profile/Sidebar'
import MainProfile from '../components/MainProfile'

export default function ProfilePage() {
    return (
        <Row className='p-5'>
            <Col md={8}>
                <MainProfile />
                <Analytics />
                <Activity />
            </Col>
            <Sidebar />
        </Row>
    )
}