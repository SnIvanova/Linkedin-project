import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  editExperience,
  getUserExperience,
  setSingleExperience,
  setToUpdate,
} from "../../redux/actions/ExperienceAction";

const EditExperience = ({ handleClose }) => {
  const dispatch = useDispatch();
  const exp = useSelector((state) => state.experience.singleExperience);
  const sendForm = () => {
    dispatch(setToUpdate(toUpdate));
    handleClose();
    dispatch(editExperience);
    dispatch(getUserExperience);
  };

  const toUpdate = {
    role: exp.role,
    company: exp.company,
    startDate: exp.startDate.slice(0, 10),
    endDate: exp.endDate ? exp.endDate.slice(0, 10) : "",
    description: exp.description,
    area: exp.area,
  };

  console.log(toUpdate);
  return (
    <>
      <Form>
        <p> Indica che è obbligatorio</p>

        {/* INPUT QUALIFICA */}
        <Form.Group className="mb-3" required>
          <Form.Label>Qualifica*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Esempio: Retail Sales Manager"
            value={exp.role}
            onChange={(e) =>
              dispatch(
                setSingleExperience({
                  ...exp,
                  role: e.target.value,
                })
              )
            }
          />
        </Form.Group>

        {/* INPUT TIPO DI IMPIEGO */}
        <Form.Group className="mb-3">
          <Form.Label>Tipo di impiego</Form.Label>
          <Form.Control as="select" defaultValue="">
            <option value="">Seleziona</option>
            <option value="A tempo pieno">A tempo pieno</option>
            <option value="Part-time">Part-time</option>
            <option value="Autonomo">Autonomo</option>
            <option value="Freelance">Freelance</option>
            <option value="A contratto">A contratto</option>
            <option value="Stage">Stage</option>
            <option value="Apprendistato">Apprendistato</option>
            <option value="Stagionale">Stagionale</option>
          </Form.Control>
          <p>
            Scopri di più sui
            <a href="."> tipi di impiego</a>.
          </p>
        </Form.Group>

        {/* INPUT NOME AZIENDA */}
        <Form.Group className="mb-3" required>
          <Form.Label>Nome azienda*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Esempio: Microsoft"
            value={exp.company}
            onChange={(e) =>
              dispatch(
                setSingleExperience({
                  ...exp,
                  company: e.target.value,
                })
              )
            }
          />
        </Form.Group>

        {/* INPUT LOCALITA */}
        <Form.Group className="mb-3">
          <Form.Label>Località</Form.Label>
          <Form.Control
            type="text"
            placeholder="Esempio: Milano, Italia"
            value={exp.area}
            onChange={(e) =>
              dispatch(
                setSingleExperience({
                  ...exp,
                  area: e.target.value,
                })
              )
            }
          />
          <p>Scegli un tipo di località &lpar;es.da remoto&rpar;</p>
        </Form.Group>

        {/* DATA INIZIO E FINE */}
        <Row>
          <Col>
            <Form.Label>Data di inizio</Form.Label>
            <Form.Control
              type="date"
              placeholder="Data di inizio"
              value={exp.startDate}
              onChange={(e) =>
                dispatch(
                  setSingleExperience({
                    ...exp,
                    startDate: e.target.value,
                  })
                )
              }
            />
          </Col>
          <Col>
            <Form.Label>Data di fine</Form.Label>
            <Form.Control
              type="date"
              placeholder="Data di fine"
              value={exp.endDate}
              onChange={(e) =>
                dispatch(
                  setSingleExperience({
                    ...exp,
                    endDate: e.target.value,
                  })
                )
              }
            />
          </Col>
        </Row>

        {/* CHECKBOX */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
          <p>Attualmente ricopro questo ruolo</p>
        </Form.Group>

        {/* DATA INIZIO E FINE */}

        {/* INPUT SETTORE */}
        <Form.Group className="mb-3" required>
          <Form.Label>Settore*</Form.Label>
          <Form.Control type="text" placeholder="Es.: Commercio al dettaglio" />
          <p>
            Scopri di più sulle
            <a href=".">opzioni relative al settore</a>.
          </p>
        </Form.Group>

        {/* INPUT DESCRIZIONE */}
        <Form.Group className="mb-3">
          <Form.Label>Descrizione</Form.Label>
          <Form.Control
            as="textarea"
            value={exp.description}
            onChange={(e) =>
              dispatch(
                setSingleExperience({
                  ...exp,
                  description: e.target.value,
                })
              )
            }
          />
          <p className="offset-end">0/2.000</p>
          We'll never share your email with anyone else.
        </Form.Group>

        {/* INPUT SOMMARIO DEL PROFILO */}
        <Form.Group className="mb-3">
          <Form.Label>Sommario del profilo</Form.Label>
          <Form.Control type="email" />
          <p>Compare sotto il tuo nome nella parte superiore del profilo</p>
        </Form.Group>

        {/* BUTTON ADD COMPETENZE */}
        <h4>Competenze</h4>
        <p>
          Ti consigliamo di aggiungere le 5 competenze più utilizzate in questo
          ruolo. Appariranno anche nella sezione Competenze.
        </p>
        <Button className="bg-light border rounded-5 text-primary">
          + Aggiungi competenza
        </Button>

        {/* BUTTON ADD MEDIA */}
        <h4>Media</h4>
        <p>
          Aggiungi o inserisci un link a documenti, foto, siti, presentazioni e
          video esterni. Scopri di più sui{" "}
          <a href=".">tipi di file multimediali supportati</a>
        </p>
        <Button className="bg-light border rounded-5 text-primary">
          + Aggiunfi media
        </Button>
      </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Annulla
        </Button>
        <Button variant="primary" type="submit" onClick={sendForm}>
          Salva
        </Button>
      </Modal.Footer>
    </>
  );
};
export default EditExperience;
