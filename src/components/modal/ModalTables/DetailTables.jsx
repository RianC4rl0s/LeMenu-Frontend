import { useState } from "react";
import {
    Col,
    Form,
    Modal,
    OverlayTrigger,
    Row,
    Tooltip,
    Button,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import api from "../../../services/api";

export default function DetailTables({ item }) {
    const [show, setShow] = useState(false);

    const [code, setCode] = useState(item.code);
    const [isOpen, setIsOpen] = useState(item.isOpen);

    const handleChange = () => {
        setIsOpen(!isOpen);
    };

    function renderModal() {
        return (
            <Modal show={show} onHide={() => setShow(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Detalhes da Mesa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Codigo</Form.Label>
                                    <Form.Control placeholder={item.code} onChange={e => setCode(e.target.value)} />
                                </Form.Group>
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

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setShow(false)}>
                        Fechar
                    </Button>
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
                        <strong>Detalhes</strong>
                    </Tooltip>
                }
            >
                <Button variant="success" onClick={() => setShow(true)}>
                    <FaSearch color="white" />
                </Button>
            </OverlayTrigger>
            {renderModal()}
        </>
    );
}
