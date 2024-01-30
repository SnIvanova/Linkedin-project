import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';

const EditExperienceModal = ({
  onHide,
  show,
  experience,
  id,
  selectedExperience,
  setSelectedExperience,
}) => {
  const [isChecked, setChecked] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [postExperience, setPostExperience] = useState({
    role: 'Front-End Developer',
    company: 'Microsoft',
    startDate: '2023-10-11',
    endDate: '2024-29-01' || null,
    description: 'Some description',
    area: 'Rome, Italy',
  });

  useEffect(() => {
    if (selectedExperience) {
      setPostExperience({
        role: selectedExperience.role || '',
        company: selectedExperience.company || '',
        startDate: selectedExperience.startDate || '2023-10-11',
        endDate: selectedExperience.endDate || '2024-29-01' || null,
        description: selectedExperience.description || '',
        area: selectedExperience.area || '',
      });
      setChecked(!selectedExperience.isChecked);
      setIsValid(!selectedExperience.isValid);
    } else {
      setPostExperience({
        role: '',
        company: '',
        startDate: '2023-10-11',
        endDate: '2024-29-01' || null,
        description: '',
        area: '',
      });
      setIsValid(false);
      setChecked(false);
    }
  }, [selectedExperience]);

  const handleSwitchChange = () => {
    setChecked(!isChecked);
  };

  const handleCheckChange = () => {
    setIsValid(!isValid);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPostExperience((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const key =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2QyMGMwNTgzNTAwMTg1MjMwZjUiLCJpYXQiOjE3MDY2MDI1MzAsImV4cCI6MTcwNzgxMjEzMH0.1kEvC0SZPWhy07iEue8Swg-ADRP3W5x9IfJ_OKHAK58';

  const urlToUse = selectedExperience
    ? `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${selectedExperience._id}`
    : `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;

  const posteExperience = {
    role: postExperience.role,
    company: postExperience.company,
    startDate: postExperience.startDate,
    endDate: postExperience.endDate ? postExperience.endDate : null,
    description: postExperience.description,
    area: postExperience.area,
  };

  const postExperiences = async () => {
    try {
      const urlToUse = selectedExperience
        ? `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${selectedExperience._id}`
        : `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;

      const res = await fetch(urlToUse, {
        method: selectedExperience ? 'PUT' : 'POST',
        body: JSON.stringify(posteExperience),
        headers: {
          Authorization: key,
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        const data = await res.json();
        setSelectedExperience(undefined);
        onHide();
      } else {
        const errorText = await res.text();
        console.error('Server Error:', errorText);
        throw new Error(
          `Errore durante il salvataggio dell'esperienza: ${errorText}`
        );
      }
    } catch (error) {
      console.error('Errore', error);
    }
  };

  const deleteExperience = async () => {
    try {
      const res = await fetch(urlToUse, {
        method: 'DELETE',
        headers: {
          Authorization: key,
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        setSelectedExperience(undefined);
        onHide();
      } else {
        const errorText = await res.text();
        console.error('Server Error:', errorText);
        throw new Error(
          `Errore durante la cancellazione dell'esperienza: ${errorText}`
        );
      }
    } catch (error) {
      console.error('Errore', error);
    }
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        setSelectedExperience(undefined);
        onHide();
      }}
      size="lg"
      aria-labelledby="contained-modal-title-center"
      centered
      scrollable={true}
    >
      {/* Header */}
      <Modal.Header
        closeButton
        onClick={() => {
          onHide();
          setSelectedExperience(undefined);
        }}
      >
        <Modal.Title id="contained-modal-title-center">
          Aggiungi esperienza
        </Modal.Title>
      </Modal.Header>

      {/* Body */}
      <Modal.Body className="p-0">
        <div
          className="d-flex align-items-center p-3"
          style={{ background: '#EDF3F8' }}
        >
          <div>
            <p className="fw-bold mb-0">Informa la rete</p>
            <p style={{ fontSize: '15px' }}>
              Attiva l’opzione per informare la tua rete delle principali
              modifiche al profilo (ad esempio un nuovo lavoro) e degli
              anniversari lavorativi. Gli aggiornamenti possono richiedere fino
              a 2 ore. Scopri di più sulla{' '}
              <strong className="text-primary">
                {' '}
                condivisione delle modifiche del profilo
              </strong>
              .
            </p>
          </div>
          <div className="ms-3">
            {' '}
            <Form.Check
              type="switch"
              id="custom-switch"
              className="fs-2"
              label={isChecked ? 'si' : 'no'}
              onChange={handleSwitchChange}
              checked={isChecked}
            />
          </div>
        </div>
        <div className="p-3">
          <span className="text-black-50">*indica che è obbligatorio</span>
          <Form>
            <Form.Group className="my-3 " controlId="formGroupEmail">
              <Form.Label>Qualifica*</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                placeholder="Esempio: Front-End Developer"
                required
                name="role"
                value={postExperience.role}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Tipo di impiego</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="employmentType"
                value={postExperience.employmentType}
                onChange={handleInputChange}
              >
                <option>Seleziona</option>
                <option>A tempo pieno</option>
                <option>Part-time</option>
                <option>Autonomo</option>
                <option>Freelance</option>
                <option>A contratto</option>
                <option>Stage</option>
                <option>Apprendistato</option>
                <option>Stagionale</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Nome azienda*</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                placeholder="Microsoft"
                required
                name="company"
                value={postExperience.company}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Località</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                placeholder="Esempio: Roma, Italia"
                required
                name="area"
                value={postExperience.area}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tipo di Località</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Seleziona</option>
                <option>In sede</option>
                <option>Ibrida</option>
                <option>Da remoto</option>
              </Form.Select>
              <Form.Text>Scegli un tipo di località (es. da remoto)</Form.Text>
            </Form.Group>
            <div className="d-flex align-items-center mt-4">
              <Form.Check
                name="group1"
                className="fs-3"
                onChange={handleCheckChange}
                checked={isValid}
              />
              <span className="ms-2">Attualmente ricopro questo ruolo</span>
            </div>
            <Row>
              <span style={{ fontSize: '14px' }} className="text-black-50 mb-1">
                Data di inizio*
              </span>
              <Col>
                <Form.Select
                  required
                  aria-label="Default select example"
                  name="startDate"
                  onChange={handleInputChange}
                >
                  <option>Mese</option>
                  <option value="01">Gennaio</option>
                  <option value="02">Febbraio</option>
                  <option value="03">Marzo</option>
                  <option value="04">Aprile</option>
                  <option value="05">Maggio</option>
                  <option value="06">Giugno</option>
                  <option value="07">Luglio</option>
                  <option value="08">Agosto</option>
                  <option value="09">Settembre</option>
                  <option value="10">Ottobre</option>
                  <option value="11">Novembre</option>
                  <option value="12">Dicembre</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select required aria-label="Default select example">
                  <option>Anno</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <span
                style={{ fontSize: '14px' }}
                className="text-black-50 mb-1 mt-4"
              >
                Data di fine*
              </span>
              <Col>
                <Form.Select
                  required
                  disabled={isValid}
                  aria-label="Default select example"
                  name="endDate"
                  onChange={handleInputChange}
                >
                  <option>Mese</option>
                  <option>Gennaio</option>
                  <option>Febbraio</option>
                  <option>Marzo</option>
                  <option>Aprile</option>
                  <option>Maggio</option>
                  <option>Giugno</option>
                  <option>Luglio</option>
                  <option>Agosto</option>
                  <option>Settembre</option>
                  <option>Ottobre</option>
                  <option>Novembre</option>
                  <option>Dicembre</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  required
                  disabled={isValid}
                  aria-label="Default select example"
                >
                  <option>Anno</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                </Form.Select>
              </Col>
            </Row>

            <div className={isValid ? 'd-none' : 'd-block'}>
              <div className="d-flex align-items-center mt-4">
                <Form.Check name="group2" className="fs-3" />
                <span className="ms-2">
                  Termina la pausa lavorativa adesso - Sviluppo professionale
                </span>
              </div>
              <Form.Group className="mb-1 mt-3" controlId="formGroupPassword">
                <Form.Label>Settore*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Sviluppo web"
                  size="sm"
                  disabled
                  className="bg-white"
                />
              </Form.Group>
            </div>
            <Form.Group
              className="mb-3 mt-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={postExperience.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <div className={isValid ? `d-none` : `d-block`}>
              <Form.Group className="mb-1 mt-3" controlId="formGroupPassword">
                <Form.Label>Sommario del profilo</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  defaultValue="Front-End Developer"
                />
              </Form.Group>
              <Form.Text>
                Compare sotto il tuo nome nella parte superiore del profilo
              </Form.Text>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold">Media</h5>
              <p>
                Aggiungi contenuti multimediali come immagini, documenti, siti o
                presentazioni. Scopri di più sui{' '}
                <strong className="text-primary">
                  tipi di file multimediali supportati
                </strong>
              </p>
              <Button
                className="rounded-pill fw-bold"
                variant="outline-primary fw-bold"
              >
                <Plus className="fs-4 fw-bold" /> Aggiungi media
              </Button>
            </div>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {selectedExperience ? (
          <>
            {' '}
            <Button
              className="rounded-pill px-4"
              onClick={() => {
                postExperiences();
              }}
            >
              Salva
            </Button>{' '}
            <Button
              className="rounded-pill px-4"
              onClick={() => {
                deleteExperience();
              }}
            >
              Elimina
            </Button>{' '}
          </>
        ) : (
          <Button
            className="rounded-pill px-4"
            onClick={() => {
              postExperiences();
            }}
          >
            Salva
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default EditExperienceModal;
