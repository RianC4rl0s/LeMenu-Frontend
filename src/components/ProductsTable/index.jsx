
import React, { useEffect, useState } from "react";

import EditProduct from "../modal/products/EditProduct";
import api from "../../services/api";
import { FaTrashAlt } from "react-icons/fa";
import ProductsRegister from "../../pages/ProductsRegister";
import { base64ToBlob } from "../../utils/bloob";
import {
  // Alert,
  Button,
  Form,
  // Modal,
  // ModalDialog,
  OverlayTrigger,
  Pagination,
  // Row,
  Spinner,
  Stack,
  Table,
  // Toast,
  Tooltip,
} from "react-bootstrap";

import * as Styled from "./styles";

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const DataTable = () => {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const loadProducts = async () => {
   setLoading(true);
   await api
      .get("/product/search/all")
      .then((response) => setProductList(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
   setLoading(false);
  }

  const deleteProduct = async (item) => {
    setLoading(true);
    await api
    .delete(`/product/delete/${item.id}`)
    .then((response) => {
      console.log(response.data);
      window.alert('Deletado com sucesso');
      return;
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
      window.alert('Erro ao deletar');
    });

  loadProducts();
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const toBlob = (img) => {
    const blob = base64ToBlob({ base64: img, type: "image" });
    const url = URL.createObjectURL(blob);
    // console.log(url);
    return url;
  };

  return (
    <>    
      <Styled.TitleContainer>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Buscar</Form.Label>
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder=""
          />
        </Form.Group>
        <h3>Produtos</h3>
        <ProductsRegister productsState={setProductList} />
      </Styled.TitleContainer>
      {loading ?
        <div style={{alignItems: 'center'}}>
          <Spinner  animation="border" variant="success"/>
        </div>:
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Foto</th>
            <th>id</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Opções</th> 
          </tr>
        </thead>
       
        <tbody>
         {productList
            .filter((products) => products?.name?.includes(search))
            .map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={toBlob(item.image)} height="50px" alt="Foto" />
                </td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  <Stack direction="horizontal" gap={1}>
                    <EditProduct
                      productEdit={item.id}
                      product={item}
                      productDataState={setProductList}
                    />
                    {/* <ProductDetails/> */}
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id={`tooltip-detalhes`}>
                          <strong>Remover</strong>.
                        </Tooltip>
                      }
                    >
                      <Button
                        variant="danger"
                        onClick={async () => {
                          deleteProduct(item);
                        }}
                      >
                        {/* Editar */}
                        <FaTrashAlt />
                      </Button>
                    </OverlayTrigger>
                  </Stack>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>}
     
      {/* <EditProduct /> */}
      {/* <Pagination>{items}</Pagination> */}
    </>
  );
};

export default DataTable;
