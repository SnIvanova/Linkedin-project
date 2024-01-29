import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import { HiOutlinePencil } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6"; 

export default function Activity() {
  return (
    <Card className='w-100 rounded-5 my-5'>
      <Card.Body className='d-flex justify-content-between'>
        <div>
            <Card.Title>Activity</Card.Title>
            <Card.Text>10 followers</Card.Text>
            <Card.Text className='fw-bold'>You haven't posted yet</Card.Text>
            <Card.Text>Posts you share will be displayed here.</Card.Text>
        </div>
        <div className='d-flex align-items-baseline'>
            <Button variant="outline-primary" className='rounded-pill py-2 fs-5 px-4'>Create a post</Button>
            <Button variant="light" className='fs-3 ms-2'><HiOutlinePencil /></Button>
        </div>
        
      </Card.Body>
      <Card.Footer className="text-muted text-center">
        <ListGroup.Item action >Show all activity <FaArrowRightLong /></ListGroup.Item>
        </Card.Footer>
    </Card>
  );
}
