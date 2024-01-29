import { Col, Row, Dropdown } from 'react-bootstrap'
import {
  BriefcaseFill,
  CalendarDate,
  PencilFill,
  Plus, 
} from 'react-bootstrap-icons'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'


import EditExperienceModal from './EditExperienceModal';
//import ModaleExperiences from './ModaleExperiences';



const Experiences = () => {
  const [experience, setExperience] = useState([])
  const user = useSelector((state) => state.user.userMe)
  const [showModal, setShowModal] = useState(false);
 
  const [selectedExperience, setSelectedExperience] = useState()

const key = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2QyMGMwNTgzNTAwMTg1MjMwZjUiLCJpYXQiOjE3MDYxNzcxNDksImV4cCI6MTcwNzM4Njc0OX0.PHLuYb8nvyemb5r429V2sTosQ-mV9fJXAWr1yyjVp3g'


  const getExperiences = async () => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences `,
        {
          headers: {
            Authorization: key,
          },
        }
      )

      if (res.ok) {
        const data = await res.json()
         //console.log("mio", data);
        setExperience(data)

        //console.log('mio2', data)
      } else {
        throw new Error('errore di carica ex su profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }

  useEffect(() => {
    if (user.length !== 0) {
      getExperiences()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const handleExperienceClick = (ex) => {
    setSelectedExperience(ex)
    setShowModal(true);
    
  }

  const handelExperienceImgClick = (ex) => {
    setSelectedExperience(ex)
    setShowModal(true);
   
  }
  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleExperienceSave = (updatedExperience) => { console.log('Updated Experience:', updatedExperience);}


  return (
    <>
      <Col className="mt-4 p-4 border rounded-3 bg-light bg-light">
        <Row>
          <Col className="d-flex justify-content-between align-items-center h-25">
            <h5 className="fw-bold mb-5 fs-3">Esperienze</h5>
            <div className="d-flex align-items-center mb-5">
              <Dropdown id="dropdown-basic" variant="transparent" align="end">
                <Dropdown.Toggle id="dropdownMenuicon" className="text-dark">
                  <Plus className="fs-1 me-1 text-white" />
                </Dropdown.Toggle>

                
                <Dropdown.Menu className="end">
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={() => {
                    setShowModal(true);
                    console.log('devocambiare per il modulo');
                    }}
                    >

                    
                    <BriefcaseFill /> Aggiungi posizione lavorativa{' '}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <CalendarDate /> Aggiungi pausa lavorativa
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
        <EditExperienceModal
  onHide={handleModalClose}
  show={showModal}
  experience={selectedExperience}
  id={user._id}  
  selectedExperience={selectedExperience}
  setSelectedExperience={setSelectedExperience}
/>

        <Row className="flex-column">
          {experience.map((ex) => (
            <Col key={ex._id} className="mb-3 d-flex justify-content-between">
              <div className="d-flex">
                <div className="me-3">
                  <img
                    src={"ex.image ? ex.image : logo"}
                    alt="immagine azienda"
                    style={{ width: '60px', height: '60px', cursor: 'pointer' }}
                    onClick={() => handelExperienceImgClick(ex)}
                  />
                </div>
                <div>
                  <p className="fw-bold m-0 fs-3">{ex.role}</p>
                  <p className="m-0">{ex.company}</p>
                  <p className="m-0 text-black-50">
                    {format(new Date(ex.startDate), 'yyyy/MM/dd')} |{' '}
                    {format(new Date(ex.endDate), 'yyyy/MM/dd')}
                  </p>
                  <p className="m-0 text-black-50">{ex.area}</p>
                  <p className="m-0">{ex.description}</p>
                </div>
              </div>
              <PencilFill
                className="fs-5"
                onClick={() => handleExperienceClick(ex)}
                style={{ cursor: 'pointer' }}
              />
            </Col>
          ))}
        </Row>
      </Col>
     
    </>
  )
}

export default Experiences