//import { Button } from "bootstrap";
//import { Modal } from "bootstrap";
import React from "react";
import { useState } from "react";
import { Button, OverlayTrigger, Pagination, Stack, Table, Tooltip } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// import EditProduct from "../modal/products/EditProduct";
import * as Styled from "./styles";

import { FaTrashAlt } from "react-icons/fa";
import EditAttendent from "../modal/Attendants/EditAttendant";
import AttendentDetail from "../modal/Attendants/AttendantDetail";
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}


const DataTable = () => {
    // eslint-disable-next-line no-unused-vars
    const [productList, setProductList] = useState([
        { id: 1, name: "teste2", cpf: "teste3", phone: "teste4" },
        { id: 2, name: "teste2", cpf: "teste3", phone: "teste4" },
        { id: 3, name: "teste2", cpf: "teste3", phone: "teste4" },
        { id: 4, name: "teste2", cpf: "teste3", phone: "teste4" },
        { id: 5, name: "teste2", cpf: "teste3", phone: "teste4" },
        { id: 6, name: "teste2", cpf: "teste3", phone: "teste4" },
        
    ]);
    return (
        <>
            <Styled.TitleContainer>
                <Styled.Input placeholder="Buscar"></Styled.Input>
                <h3>Atendentes</h3>
                <LinkContainer to="/adm/atendentes-novo">
                    <Styled.ButtonGreen>Novo</Styled.ButtonGreen>
                </LinkContainer>

            </Styled.TitleContainer>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>Cpf</th>
                        <th>Telefone</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map(item => (

                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.cpf}</td>
                            <td>{item.phone}</td>
                            <td>
                                <Stack direction="horizontal" gap={1}>
                                    <EditAttendent></EditAttendent>
                                    {/* <Styled.ButtonGreen>Editar</Styled.ButtonGreen> */}
                                    <AttendentDetail></AttendentDetail>
                                    {/* <Styled.ButtonRed>Detalhes</Styled.ButtonRed> */}
                                    <OverlayTrigger

                                        placement="bottom"
                                        overlay={
                                            <Tooltip id={`tooltip-detalhes`}>
                                                <strong>Remover</strong>.
                                            </Tooltip>
                                        }
                                    >
                                        <Button variant="danger">
                                            {/* Editar */}
                                            <FaTrashAlt />
                                        </Button>

                                    </OverlayTrigger>
                                </Stack>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* <EditProduct /> */}
            <Pagination>{items}</Pagination>

        </>

    );
}

export default DataTable;
