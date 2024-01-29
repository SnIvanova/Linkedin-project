import React from 'react'
import Activity from '../components/Profile/Activity'
import Analytics from '../components/Profile/Analytics'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../components/Profile/Sidebar'
import MainProfile from '../components/MainProfile'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

export default function ProfilePage() {
    return (
        <>
        <Row className='container mx-auto mt-5'>
            <Col md={8}>
                <MainProfile />
                <Analytics />
                <Activity />
                <Experience/>
            </Col>
                <Sidebar />
        </Row>
        <Footer />
        </>
    )
}