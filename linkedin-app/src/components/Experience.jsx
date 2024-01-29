import { Container, Row, Col, Modal } from "react-bootstrap";
import {
  BsPlusLg,
  BsPencil,
  BsBriefcaseFill,
  BsClockFill,
} from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import AddExperience from "./FormExperience/AddExperience";
import BreakExperience from "./FormExperience/BreakExperience";
import SingleExp from "./SingleExp";
import { useSelector } from "react-redux";

const Experience = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [show, setShow] = useState(false);
  const [showPause, setShowPause] = useState(false);
  const listUserExp = useSelector((state) => state.experience.experiences);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShowPause(false);
  const handleShow2 = () => setShowPause(true);

  return (
    <>
      <Container className="mt-4 p-4 border rounded-3 bg-light bg-light">
        <Row>
          <div className="d-flex justify-content-between">
            <h4>Esperienza</h4>
            <div className="d-flex justify-content-between">
              <Dropdown id="dropdown-basic" variant="transparent">
                <Dropdown.Toggle
                  id="dropdown-autoclose-true "
                  variant="link"
                  className="text-dark"
                >
                  <BsPlusLg />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleShow}>
                    <BsBriefcaseFill className="me-2" /> Aggiungi Posizione
                    Lavorativa
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleShow2}>
                    <BsClockFill className="me-2" /> Aggiungi Pausa Lavorativa
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          {/* ADDEXPERIENCE */}
          <div id="modal">
            <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Aggiungi esperienza</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <AddExperience handleClose={handleClose} />
              </Modal.Body>
            </Modal>
          </div>

                    {/* BREAKEXPERIENCE */}
                    <Modal show={showPause} onHide={handleClose2} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Aggiungi pausa lavorativa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <BreakExperience handleClose2={handleClose2} />
            </Modal.Body>
          </Modal>

          {/* EDIT EXPERIENCE */}
        </Row>

        {listUserExp.slice(0, listUserExp.length).map((exp, i) => (
          <SingleExp exp={exp} key={i}></SingleExp>
        ))}
      </Container>
    </>
  );
};

export default Experience;