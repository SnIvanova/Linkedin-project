import { Button, Form, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const EditExperienceModal = ({
  onHide,
  show,
  id,
  selectedExperience,
  setSelectedExperience,
}) => {
  const [isValid, setIsValid] = useState(false);
  const [postExperience, setPostExperience] = useState({
    role: '',
    company: '',
    startDate: '2023-10-11',
    endDate: '2024-29-01' || null,
    description: '',
    area: '',
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
    }
  }, [selectedExperience]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPostExperience((prevData) => ({
      ...prevData,
      [name]: value,
      employmentType: value,
    }));
  };

  const key =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2QyMGMwNTgzNTAwMTg1MjMwZjUiLCJpYXQiOjE3MDYxNzcxNDksImV4cCI6MTcwNzM4Njc0OX0.PHLuYb8nvyemb5r429V2sTosQ-mV9fJXAWr1yyjVp3g';

    const urlToUse = selectedExperience
    ? `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${selectedExperience._id}`
    : `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;
  const methodToUse = selectedExperience ? 'PUT' : 'POST';

  const postExperiences = async () => {
    try {
      const res = await fetch(urlToUse, {
        method: methodToUse,
        body: JSON.stringify(postExperience),
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
        throw new Error(`Errore durante la cancellazione dell'esperienza: ${errorText}`);
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
        <div className="p-3">
          <span className="text-black-50">
            *indica che è obbligatorio
          </span>
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
            <Button
              className="rounded-pill px-4"
              onClick={() => {
                postExperiences();
              }}
            >
              Salva
            </Button>
            {selectedExperience && (
              <>
                <Button
                  className="rounded-pill px-4 mx-2"
                  variant="danger"
                  onClick={() => {
                    deleteExperience();
                  }}
                >
                  Elimina
                </Button>
              </>
            )}
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EditExperienceModal;
