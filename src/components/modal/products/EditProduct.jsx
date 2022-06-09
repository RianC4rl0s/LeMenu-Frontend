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
import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import api from "../../../services/api";

import { FaPen } from "react-icons/fa";
const EditProduct = (props) => {
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);
  const [produtctName, setProductName] = useState(props.product.name);
  const [productPrice, setproductPrice] = useState(props.product.login);
  const [productSale, setproductSale] = useState(props.product.sale);
  const [productDescription, setproductDescription] = useState(
    props.product.description
  );

  async function loadProduct() {
    await api
    .get("/product/search/all")
    .then((response) => {
      window.alert('Produto atualizado com sucesso');
      return props.productDataState(response.data);
    })
    .catch((err) => {
      window.alert('Erro ao atualizar');
      console.error("ops! ocorreu um erro para listar" + err);
    });
  }

  async function edit(id) {
    setLoading(true);
   await api
      .put(`product/update/${id}`, {
        name: produtctName,
        price: productPrice,
        sale: productSale,
        description: productDescription,
      })
      .then((response) => 
      {
        return loadProduct(response)
      })
      .catch((err) => {
        window.alert('Erro ao atualizar');
        console.error("ops! ocorreu um erro para criar" + err);
      });
    setLoading(false);

  }

  const [selectedFile, setSelectedFile] = useState();
  // eslint-disable-next-line no-unused-vars
  const [preview, setPreview] = useState();
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  // eslint-disable-next-line no-unused-vars
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id={`tooltip-edit`}>
            <strong>Editar</strong>.
          </Tooltip>
        }
      >
        <Button variant="warning" onClick={() => setShow(true)}>
          {/* Editar */}
          <FaPen />
        </Button>
      </OverlayTrigger>

      <Modal show={show} size="lg">
        <Modal.Header closeButton onClick={() => setShow(false)}>
          <Modal.Title>Editar Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              {/* <Col>
                <Styled.ImgPreview>
                  {selectedFile && (
                    <img alt="pic" src={preview} width="300" height="300" />
                  )}
                </Styled.ImgPreview>
                <Form.Group controlId="formFile" className="mb-3">
                 
                  <Form.Control type="file" onChange={onSelectFile} />
                </Form.Group>
              </Col> */}
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    placeholder={props.product.name}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                  <Form.Label>Descrição</Form.Label>
                  <Form.Control
                    placeholder={props.product.description}
                    onChange={(e) => setproductDescription(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrice">
                  <Form.Label>Preço</Form.Label>
                  <Form.Control
                    placeholder={props.product.price}
                    type="number"
                    min={0}
                    required
                    onChange={(e) => setproductPrice(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Promoção</Form.Label>
                  <Form.Control
                    placeholder={props.product.sale}
                    type="number"
                    min={0}
                    required
                    onChange={(e) => setproductSale(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="float-right"></div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {loading ? <Spinner  animation="border" variant="success"/>:
          <>
          <Styled.ButtonGreen
          className="pull-right"
          type="sub"
            onClick={async () =>  {
              await edit(props.productEdit);
              setShow(false);
            }}
          > Salvar
          </Styled.ButtonGreen>
          <Styled.ButtonRed
            className="pull-right"
            type="sub"
            onClick={() => {
              setShow(false);
            }}
          >
            Cancelar
          </Styled.ButtonRed>
          </>
          }
          
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
};
export default EditProduct;
