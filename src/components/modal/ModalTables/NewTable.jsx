import { useState } from "react";
import { Col, Form, Modal, Row, Button, Alert, Spinner } from "react-bootstrap";

import api from "../../../services/api";
export default function NewTable(props) {
  const [show, setShow] = useState(false);

  const [tableCode, setTableCode] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setTableCode("");
    setIsOpen(false);
    setShow(false);
  }

  return (
    <>
      <Button variant="success" onClick={() => setShow(true)}>
        Nova
      </Button>
      <Modal show={show} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Nova Mesa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showAlert && (
            <Alert key={1} variant={"danger"}>
              Preencha os campos
            </Alert>
          )}
           {showError && (
            <Alert key={1} variant={"danger"}>
              Não foi possivel realizar o cadastro.
              Verifique se o codigo da mesa não está repetido.
            </Alert>
          )}
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formCOde">
                  <Form.Label>Codigo</Form.Label>
                  <Form.Control
                    placeholder={tableCode}
                    onChange={(e) => setTableCode(e.target.value)}
                  />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formLogin">
                  <Form.Label>Cliente</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Total Pedido</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group> */}
                {/* 
                <Form.Group className="mb-3" controlId="formIsOpen">
                  <Form.Label>Disponibilidade</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="formIsOpen">
                  <Form.Check
                    type="checkbox"
                    label="Disponivel"
                    checked={isOpen}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="float-right"></div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        {loading ?
          <div style={{alignItems: 'center'}}>
            <Spinner  animation="border" variant="success"/>
          </div>:
          <>
            <Button
              variant="success"
              onClick={async () => {
                if (tableCode !== "") {
                  setLoading(true)
                  await api
                  .post("/table/new", {
                      code: tableCode,
                      isOpen: isOpen,
                    })
                    .then((response) => {
                      window.alert('Nova mesa criada');
                      closeModal();
                    } /*console.log(response.data)*/)
                    .catch((err) => {
                      setShowError(true);
                      console.error("ops! ocorreu um erro" + err);
                    });

                  await api
                    .get("/table/search/all")
                    .then((response) => {
                      console.log(response.data);
                      props.tableDataState(response.data);
                    })
                    .catch((err) => {
                      console.error("ops! ocorreu um erro" + err);
                    });
                    setLoading(false)

                  //closeModal();
                  
                  setShowAlert(false);
                } else {
                  setShowAlert(true);
                }
              }}
            >
              Adicionar
            </Button>
            <Button variant="danger" onClick={closeModal}>
              Cancelar
            </Button>
          </>}
        </Modal.Footer>
      </Modal>
    </>
  );
}
