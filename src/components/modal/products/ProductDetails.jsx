
import { Col, Form, Modal, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import * as Styled from "./styles"

import { FaFileAlt } from "react-icons/fa";
const EditProduct = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    return (
        <>
            <OverlayTrigger
                
                placement="bottom"
                overlay={
                    <Tooltip id={`tooltip-detalhes`}>
                        <strong>Detalhes</strong>.
                    </Tooltip>
                }
            >
                <Button variant="primary" onClick={handleShow}>
                    {/* Editar */}
                    <FaFileAlt />
                </Button>

            </OverlayTrigger>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Editar Produto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Styled.ImgPreview>
                                    {selectedFile && <img alt="pic" src={preview} width="300" height="300" />}
                                </Styled.ImgPreview>
                                <Form.Group controlId="formFile" className="mb-3">
                                    {/* <Form.Label></Form.Label> */}
                                    <Form.Control type="file" onChange={onSelectFile}  />
                                </Form.Group>
                            </Col>
                            <Col>

                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control placeholder=""disabled  />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formDescription">
                                    <Form.Label>Descrição</Form.Label>
                                    <Form.Control placeholder="" disabled />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPrice">
                                    <Form.Label>Preço</Form.Label>
                                    <Form.Control placeholder=""disabled  />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label>Promoção</Form.Label>
                                    <Form.Control placeholder="" disabled />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="float-right">

                        </div>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    {/* <Styled.ButtonGreen className="pull-right" type="sub" onClick={handleClose}>Salvar</Styled.ButtonGreen> */}
                    <Styled.ButtonRed className="pull-right" type="sub" onClick={handleClose}>Cancelar</Styled.ButtonRed>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Salvar
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default EditProduct