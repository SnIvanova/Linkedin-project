import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import img from "../assets/experience.png"
import { keyIvanova } from "../dati"

const ImageExperience = ({
  onHide,
  show,
  id,
  selecetedExperience,
  setSelectedExperience,
}) => {
  const [postImage, setPostImage] = useState()
  const [showInput, setShowInput] = useState(false)

  const postImg = async () => {
    let formData = new FormData()
    formData.append("experience", postImage)
    const key =
     keyIvanova
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${selecetedExperience._id}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: key,
            Accept: "application/json",
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        setPostImage(null)
        setShowInput(false)
        onHide()
        window.location.reload()
      } else {
        throw new Error("error")
      }
    } catch (error) {
      console.log("errore", error)
    }
  }

  console.log("ecco", selecetedExperience)

  return (
    <Modal show={show} onHide={onHide} backdrop={onHide}>
      <Modal.Header>
        <Modal.Title>Cambia foto</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center flex-column align-items-center">
        <h5 className="fw-bold">
          {selecetedExperience?.company}, aiuta gli altri a conoscerti!
        </h5>
        <img
          src={selecetedExperience?.image ? selecetedExperience?.image : img}
          alt=""
          style={{ borderRadius: "50%", width: "150px", height: "150px" }}
          className="my-5"
        />
        <p style={{ fontSize: "12px" }} className="text-center">
          Chiediamo agli utenti di LinkedIn di utilizzare le loro vere identità,
          quindi scatta o carica una tua foto. Poi ritagliala, applica dei
          filtri e perfezionala come vuoi.
        </p>
        {showInput && (
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => setPostImage(e.target.files[0])}
          />
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="outline-primary"
          className="rounded-pill "
          onClick={() => setShowInput(true)}
        >
          Scegli file
        </Button>
        <Button
          variant="primary"
          className="rounded-pill"
          onClick={() => postImg()}
        >
          Carica foto
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ImageExperience