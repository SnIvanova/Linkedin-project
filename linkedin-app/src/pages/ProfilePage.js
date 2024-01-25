import React from 'react'
import Activity from '../components/Profile/Activitys'
import Analytics from '../components/Profile/Analytics'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../components/Profile/Sidebar'

export default function ProfilePage() {
    return (
        <Row className='p-5'>
            <Col md={8}>
                <Analytics />
                <Activity />
            </Col>
            <Sidebar />
        </Row>
    )
}