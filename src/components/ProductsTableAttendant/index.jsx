//import { Button } from "bootstrap";
//import { Modal } from "bootstrap";
import React from "react";
import { useEffect, useState } from "react";
import {
  // Button,
  Form,
  // OverlayTrigger,
  Pagination,
  Stack,
  Table,
  // Tooltip,
} from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
// import EditProduct from "../modal/products/EditProduct";
// import ProductDetails from "../modal/products/ProductDetails";
// import EditProduct from "../modal/products/EditProduct";
import * as Styled from "./styles";

import api from "../../services/api";
// import { FaTrashAlt } from "react-icons/fa";
// import ProductsRegister from "../../pages/ProductsRegister";

import { base64ToBlob } from "../../utils/bloob";
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const DataTableAttendant = () => {
  // eslint-disable-next-line no-unused-vars
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    api
      .get("/product/search/all")
      .then((response) => setProductList(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  const toBlob = (img) => {
    const blob = base64ToBlob({ base64: img, type: "image" });
    const url = URL.createObjectURL(blob);
    // console.log(url);
    return url;
  };
  const [search, setSearch] = useState("");
  return (
    <>
      <Styled.TitleContainer>
        {/* <Styled.Input placeholder="Buscar" onC ></Styled.Input> */}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Buscar</Form.Label>
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder=""
          />
        </Form.Group>
        <h3>Produtos</h3>
      </Styled.TitleContainer>

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
                    {/* <ProductDetails/> */}
                  </Stack>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {/* <EditProduct /> */}
      {/* <Pagination>{items}</Pagination> */}
    </>
  );
};

export default DataTableAttendant;
