import { useState } from "react";
import {
  Col,
  Form,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
  Button,
  Spinner,
} from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import api from "../../../services/api";

export default function EditTables({item,tableDataState}) {
  const [show, setShow] = useState(false);

  const [code, setCode] = useState(item.code);
  const [isOpen, setIsOpen] = useState(item.isOpen);
  const [loading, setLoading] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  async function deleteTable(){
    setLoading(true)
    await api
    .delete(`/table/delete/${item.id}`)
    .then((response) => {
      window.alert('Mesa deletada');
      console.log(response.data);
    })
    .catch((err) => {
      window.alert('Erro ao deletar');
      console.error("ops! ocorreu um erro" + err);
    });
    
    await api
    .get("/table/search/all")
    .then((response) => {
      console.log(response.data);
      tableDataState(response.data);
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
    setLoading(false)
    setShow(false);
  }

  async function updateTable(){
    setLoading(true)
    await api
    .put(`/table/update/${item.id}`, {
      code: code,
      isOpen: true
    })
    .then((response) => {
        window.alert('Mesa atualizada com sucesso');
      console.log(response.data);
    })
    .catch((err) => {
      window.alert('Erro ao atualizar');
      console.error("ops! ocorreu um erro" + err);
    });

    await api
    .get("/table/search/all")
    .then((response) => {
      console.log(response.data);
      tableDataState(response.data);
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
    setLoading(false)
    setShow(false);
  }

  function renderModal() {
    return (
      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Editar Mesa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Codigo</Form.Label>
                  <Form.Control placeholder={item.code} onChange={e => setCode(e.target.value)}/>
                </Form.Group>

                {/*<Form.Group className="mb-3" controlId="formLogin">
                  <Form.Label>Cliente</Form.Label>
                  <Form.Control placeholder={item.client} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Total Pedido</Form.Label>
                  <Form.Control placeholder=" "/>
                </Form.Group>*/}

                <Form.Group className="mb-3" controlId="formCpf">
                  <Form.Check type="checkbox" label="Disponivel"
                    checked={isOpen}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="float-right"></div>
          </Form>

          {!loading && <Button variant="outline-danger"  onClick={() => deleteTable()}>Deletar Mesa</Button>}
        </Modal.Body>
        <Modal.Footer>
          {loading? <div style={{alignItems: 'center'}}>
      <Spinner  animation="border" variant="success"/>
    </div>:
          <>
          <Button variant="success" onClick={() => updateTable()}>Atualizar</Button>
          <Button variant="danger" onClick={() => setShow(false)}>
            Cancelar
          </Button>
          </>
    }
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip>
            <strong>Editar</strong>
          </Tooltip>
        }
      >
        <Button variant="info" onClick={() => setShow(true)}>
          <FaEdit color="white" />
        </Button>
      </OverlayTrigger>
      {renderModal()}
    </>
  );
}
