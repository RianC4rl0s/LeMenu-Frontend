import React, { useEffect, useState } from "react";
import * as Styled from "./styles";

import api from "../../services/api"
import { Card, Col, Form, Image, Row, Modal, Spinner } from "react-bootstrap";
// import { Button } from "bootstrap";
const ProductRegister = (props) => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [promotion, setPromotion] = useState();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const [imgString, setImgString] = useState();
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        if (selectedFile == null) {
            setPreview(undefined)
            return
        } else {

            const objectUrl = URL.createObjectURL(selectedFile)
            setPreview(objectUrl)

            // free memory when ever this component is unmounted
            return () => URL.revokeObjectURL(objectUrl)
        }
    }, [selectedFile])
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])

        const fileInput = e.target.files[0];
        const fileReader = new FileReader();

        fileReader.readAsDataURL(fileInput);
        fileReader.onload = async function () {
            const arrayBuffer = this.result;

            if (arrayBuffer !== undefined) {
                const arr = arrayBuffer.split(",");

                setImgString(arr[arr.length - 1])
            }
        };
    }
    // const loadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.files == null || event.target.files.length == 0) return;

    //     const fileInput = event.target.files[0];
    //     const fileReader = new FileReader();

    //     fileReader.readAsDataURL(fileInput);
    //     fileReader.onload = async function () {
    //       const arrayBuffer = this.result as string;

    //       if (arrayBuffer != undefined) {
    //         const arr = arrayBuffer.split(",");

    //         const file: FileType = {
    //           name: fileInput.name,
    //           type: fileInput.type,
    //           bytes: arr[arr.length - 1],
    //           date: "",
    //           unidadeId: 0,
    //         };

    //         props.sendFile(file);
    //       }
    //     };
    //   };
    function handlesubmit(e){
        e.preventDefault()
        newProduct();
    }
    async function newProduct() {
        // e.preventDefault()
        if (imgString !== "" || name !== "" || description !== "" || price !== "" || promotion !== "" || false !== null
            || imgString !== null || name !== null || description !== null || price !== null || promotion !== null) {
            setLoading(true);
            await api
                .post("/product/new", {
                    image: imgString,
                    name: name,
                    description: description,
                    price: price,
                    sale: promotion,
                    isOnMenu: false,

                })
                .then((response) => {window.alert("Criado com sucesso") } /*console.log(response.data)*/)
                .catch((err) => {
                    window.alert("Erro ao criar produto") 
                    console.error("ops! ocorreu um erro" + err);
                });

            api
                .get("/product/search/all")
                .then((response) => props.productsState(response.data))
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });

            setSelectedFile(undefined)
            setLoading(false);
            setShow(false)
        }


    }
    return (
        <>
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
                                        <Form.Control accept="image/png, image/gif, image/jpeg" type="file" /*acc*/ onChange={onSelectFile} />
                                    </Form.Group>
                                    Por quest??es de desempenho e estar em um servidor remoto, evite imagens grandes
                                </Col>
                                <Col>

                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Nome</Form.Label>
                                        <Form.Control placeholder=""
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formDescription">
                                        <Form.Label>Descri????o</Form.Label>
                                        <Form.Control placeholder=""
                                            onChange={(e) => setDescription(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPrice">
                                        <Form.Label>Pre??o</Form.Label>
                                        <Form.Control placeholder=""
                                            type="number" min={0}
                                            step=".01"
                                            onChange={(e) => setPrice(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label>Promo????o</Form.Label>
                                        <Form.Control placeholder=""
                                            step=".01"
                                            onChange={(e) => setPromotion(e.target.value)}
                                            type="number" min={0}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>   
                            {loading ? <Spinner  animation="border" variant="success"/>:
                            <div className="float-right">
                                <Styled.ButtonGreen className="pull-right" type="submit" onClick={ handlesubmit} >Salvar</Styled.ButtonGreen>
                                <Styled.ButtonRed className="pull-right" >Cancelar</Styled.ButtonRed>

                            </div>}
                        </Form>
                    </Card.Body>
                </Card>

            </Modal>
        </>
    )
}
export default ProductRegister;