import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import { IoEyeSharp } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6"; 

export default function Analytics() {
  return (
    <Card className='w-100 rounded-5 my-5'>
      <Card.Body >
            <Card.Title>Analytics</Card.Title>
            <Card.Text className='text-muted'><IoEyeSharp className='fs-5 me-2' />Private to you</Card.Text>
            <Card.Text className='fw-bold'><MdPeopleAlt className='fs-5 me-2' />1 profile view </Card.Text>
            <Card.Text className='ms-4'>Discover who viewed your profile</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted text-center">
        <ListGroup.Item action >Show all analytics <FaArrowRightLong /></ListGroup.Item>
        </Card.Footer>
    </Card>
  );
}