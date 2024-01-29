import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";

function BreakExperience({ handleClose2 }) {
  const [esperienze, setEsperienze] = useState({
    startDate: "",
    endDate: "",
  });

  const handleChange = (field, value) => {
    setEsperienze({
      ...esperienze,
      [field]: value,
    });
  };

  return (
    <>
      <Form>
        <p>
          Le esperienze al di fuori di un percorso professionale lineare possono
          aiutare le persone a diventare colleghi, partner e leader migliori.
          Condividi i momenti che sottolineano la tua capacità. Scopri di più
          sulle <a href=".">pause lavorative</a>.
        </p>
        <p> Indica che è obbligatorio</p>

        {/* INPUT TIPO */}
        <Form.Group className="mb-3" required>
          <Form.Label>Tipo</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        {/* INPUT LOCALITA */}
        <Form.Group className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Esempio: Milano, Italia" />
        </Form.Group>

        {/* CHECKBOX */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
          <p>Attualmente ricopro questo ruolo</p>
        </Form.Group>

        {/* DATA INIZIO E FINE */}
        <Row>
          <Col>
            <Form.Label>Data di inizio</Form.Label>
            <Form.Control
              type="date"
              placeholder="Data di inizio"
              value={esperienze.startDate}
              onChange={(e) => {
                handleChange("startDate", e.target.value);
              }}
            />
          </Col>
          <Col>
            <Form.Label>Data di fine</Form.Label>
            <Form.Control
              type="date"
              placeholder="Data di fine"
              value={esperienze.endDate}
              onChange={(e) => {
                handleChange("endDate", e.target.value);
              }}
            />
          </Col>
        </Row>

        {/* INPUT DESCRIZIONE */}
        <Form.Group className="mb-3" required>
          <Form.Label>Descrizione</Form.Label>
          <Form.Control as="textarea" />
          <p className="offset-end">0/2.000</p>
        </Form.Group>

        {/* INPUT SOMMARIO DEL PROFILO */}
        <Form.Group className="mb-3">
          <Form.Label>Sommario del profilo</Form.Label>
          <Form.Control type="email" />
          <p>Compare sotto il tuo nome nella parte superiore del profilo</p>
        </Form.Group>

        {/* BUTTON ADD MEDIA */}
        <h4>Media</h4>
        <p>
          Aggiungi o inserisci un link a documenti, foto, siti, presentazioni e
          video esterni. Scopri di più sui{" "}
          <a href=".">tipi di file multimediali supportati</a>
        </p>
        <Button className="bg-light border rounded-5 text-primary">
          + Aggiungi media
        </Button>
      </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose2}>
          Annulla
        </Button>
        <Button variant="primary" type="submit" onClick={handleClose2}>
          Salva
        </Button>
      </Modal.Footer>
    </>
  );
}

export default BreakExperience;
