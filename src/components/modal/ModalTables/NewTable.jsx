import { useState } from "react";
import { Col, Form, Modal, Row, Button } from "react-bootstrap";

import api from "../../../services/api"
export default function NewTable(props) {
  const [show, setShow] = useState(false);

  const [tableCode, setTableCode] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
   
  };


  return (
    <>
      <Button variant="success" onClick={() => setShow(true)}>
        Nova
      </Button>

      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Nova Mesa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formCOde">
                  <Form.Label>Codigo</Form.Label>
                  <Form.Control placeholder="" onChange={e => setTableCode(e.target.value)} />
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
                  <Form.Check type="checkbox" label="Disponivel"
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
          <Button variant="success" onClick={async () => {
            await api
              .post("/table/new", {
                code: tableCode,
                isOpen: isOpen
              })
              .then((response) => {} /*console.log(response.data)*/)
              .catch((err) => {
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

            setShow(false)

          }}>Adicionar</Button>
          <Button variant="danger" onClick={() => setShow(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
