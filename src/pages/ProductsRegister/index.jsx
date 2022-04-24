import React, { useEffect, useState } from "react";
import * as Styled from "./styles";

import api from "../../services/api"
<<<<<<< HEAD
import { Card, Col, Form, Image, Row,Modal } from "react-bootstrap";
=======
import { Card, Col, Form, Image, Row, Modal } from "react-bootstrap";
>>>>>>> 272dd256666f07e36dacd4604927bbbed70f67d6
// import { Button } from "bootstrap";
const ProductRegister = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [promotion, setPromotion] = useState();
    const [show, setShow] = useState(false);
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

<<<<<<< HEAD
    async function newProduct(){
       await api
        .post("/product/new", {
            id: 4,
            piture: "../../../src/assets/berry.jpg",
            name: "teste2",
            description: "teste3",
            price: 0.00,
        })
        .then((response) => {} /*console.log(response.data)*/)
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
=======
    async function newProduct() {
        await api
            .post("/product/new", {
                piture: "../../../src/assets/berry.jpg",
                name: name,
                description: description,
                price: price,
                sale: promotion,
                isOnMenu:false,
            })
            .then((response) => { } /*console.log(response.data)*/)
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
>>>>>>> 272dd256666f07e36dacd4604927bbbed70f67d6
        setShow(false)
    }
    return (
        <>
<<<<<<< HEAD
        <Styled.ButtonGreen onClick={() => setShow(true)} >Novo</Styled.ButtonGreen>

        <Modal show={show} onHide={() => setShow(false)} size="lg">
            <Card style={{ width: '96%',marginLeft:'50px',marginRight:'50px' }}>
                <Card.Body>
                    <Card.Title>Novo Produto</Card.Title>
                    <Form>
                        <Row>
                            <Col>
                                <Styled.ImgPreview>
                                    {selectedFile && <Image rounded alt="pic" src={preview} width="300" height="300" />}
                                </Styled.ImgPreview>
                                <Form.Group controlId="formFile" className="mb-3">
                                    {/* <Form.Label></Form.Label> */}
                                    <Form.Control type="file" onChange={onSelectFile} />
                                </Form.Group>
                            </Col>
                            <Col>

                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control placeholder="" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formDescription">
                                    <Form.Label>Descrição</Form.Label>
                                    <Form.Control placeholder="" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPrice">
                                    <Form.Label>Preço</Form.Label>
                                    <Form.Control placeholder="" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label>Promoção</Form.Label>
                                    <Form.Control placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="float-right">
                            <Styled.ButtonGreen className="pull-right" type="sub" onClick={() => newProduct()} >Salvar</Styled.ButtonGreen>
                            <Styled.ButtonRed className="pull-right" type="sub">Cancelar</Styled.ButtonRed>

                        </div>
                    </Form>
                </Card.Body>
            </Card>

        </Modal>
=======
            <Styled.ButtonGreen onClick={() => setShow(true)} >Novo</Styled.ButtonGreen>

            <Modal show={show} onHide={() => setShow(false)} size="lg">
                <Card style={{ width: '96%', marginLeft: '50px', marginRight: '50px' }}>
                    <Card.Body>
                        <Card.Title>Novo Produto</Card.Title>
                        <Form>
                            <Row>
                                <Col>
                                    <Styled.ImgPreview>
                                        {selectedFile && <Image rounded alt="pic" src={preview} width="300" height="300" />}
                                    </Styled.ImgPreview>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        {/* <Form.Label></Form.Label> */}
                                        <Form.Control type="file" onChange={onSelectFile} />
                                    </Form.Group>
                                </Col>
                                <Col>

                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Nome</Form.Label>
                                        <Form.Control placeholder=""
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formDescription">
                                        <Form.Label>Descrição</Form.Label>
                                        <Form.Control placeholder=""
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPrice">
                                        <Form.Label>Preço</Form.Label>
                                        <Form.Control placeholder=""
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label>Promoção</Form.Label>
                                        <Form.Control placeholder=""
                                            onChange={(e) => setPromotion(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="float-right">
                                <Styled.ButtonGreen className="pull-right" type="sub" onClick={() => newProduct()} >Salvar</Styled.ButtonGreen>
                                <Styled.ButtonRed className="pull-right" type="sub">Cancelar</Styled.ButtonRed>

                            </div>
                        </Form>
                    </Card.Body>
                </Card>

            </Modal>
>>>>>>> 272dd256666f07e36dacd4604927bbbed70f67d6
        </>
    )
}
export default ProductRegister;