import { useState } from "react";
import { Col, Form, Modal, Row, Button } from "react-bootstrap";
import { cpfMask } from "../../../utils/masks/cpf.js";
import { phoneMask } from "../../../utils/masks/phone.js";

import api from "../../../services/api";
export default function NewAdm(props) {
  const [show, setShow] = useState(false);

  const [userName, setUserName] = useState("");
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userCpf, setUserCpf] = useState("");
  const [userPhone, setUserPhone] = useState("");

  function loadAdm() {}
  /*api
      .get("/clerk/search/all")
      .then((response) => props.admDataState(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro para listar" + err);
      });
  }*/

  function close() {
    setShow(false);
    setUserName("");
    setUserLogin("");
    setUserPassword("");
    setUserCpf("");
    setUserPhone("");
  }

  async function add() {}
  /*return api
      .post("/clerk/new", {
        name: userName,
        cpf: userCpf,
        login: userLogin,
        password: userPassword,
        phone: userPhone,
      })
      .then(loadAdm)
      .catch((err) => {
        console.error("ops! ocorreu um erro para criar" + err);
      });
  }*/

  return (
    <>
      <Button variant="success" onClick={() => setShow(true)}>
        Novo
      </Button>

      <Modal show={show} onHide={() => close()} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Novo Atendente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formCode">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    placeholder=""
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCode">
                  <Form.Label>Login</Form.Label>
                  <Form.Control
                    placeholder=""
                    onChange={(e) => setUserLogin(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCode">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    placeholder=""
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCode">
                  <Form.Label>CPF</Form.Label>
                  <Form.Control
                    placeholder=""
                    onChange={(e) => setUserCpf(cpfMask(e.target.value))}
                    value={userCpf}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCode">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    placeholder=""
                    onChange={(e) => setUserPhone(phoneMask(e.target.value))}
                    value={userPhone}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="float-right"></div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              add();
              setShow(false);
              close();
            }}
          >
            Adicionar
          </Button>
          <Button variant="danger" onClick={() => close()}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
