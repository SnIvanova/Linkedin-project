import { useState } from 'react';
import {Carousel, Card, } from 'react-bootstrap';
import { HiOutlinePencil } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";


function ProfileCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className='mt-3' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='d-flex'>
                <Card className='w-50'>
                    <Card.Body>
                        <Card.Title>Open to work <span className='float-end'><HiOutlinePencil className='fs-5'/></span> </Card.Title>
                        <Card.Text className='m-0'>Assistant roles</Card.Text>
                        <p className='text-primary '>Show details</p>
                    </Card.Body>
                </Card>
                <Card className='w-50'>
                    <Card.Body>
                        <Card.Title>Share that you're hiring<span className='float-end'><RxCross2 className='fs-5'/></span> </Card.Title>
                        <Card.Text className='m-0'>and attract qualified candidates.</Card.Text>
                        <p className='text-primary '>Get started</p>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item className='d-flex'>
                <Card className='w-50'>
                    <Card.Body>
                        <Card.Title>Showcase services you offer <span className='float-end'><HiOutlinePencil className='fs-5'/></span> </Card.Title>
                        <Card.Text className='m-0'>so you and your business can be found in search.</Card.Text>
                        <p className='text-primary '>Get started</p>
                    </Card.Body>
                </Card>
                <Card className='w-50'>
                    <Card.Body>
                        <Card.Title>Share that you're hiring<span className='float-end'><RxCross2 className='fs-5'/></span> </Card.Title>
                        <Card.Text className='m-0'>and attract qualified candidates.</Card.Text>
                        <p className='text-primary '>Get started</p>
                    </Card.Body>
                </Card>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProfileCarousel;