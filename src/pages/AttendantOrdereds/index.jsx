import { Button, OverlayTrigger, Stack, Table, Tooltip } from "react-bootstrap";
import EditTables from "../../components/modal/ModalTables/EditTable";
import NewTable from "../../components/modal/ModalTables/NewTable";
import { SideBar } from "../../components/SideBar";
import TopBar from "../../components/TopBar";

import * as Styled from "./styles";
import api from "../../services/api"
import { useEffect, useState } from "react";
import DetailTables from "../../components/modal/ModalTables/DetailTables";

export default function AttendantOrdereds() {
    const [orderedList, setOrderedList] = useState([
        { id: 0, code: 0, product: 'pastel', client: 'joao', table: '02',state: null },
        { id: 0, code: 0, product: 'pastel', client: 'joao', table: '02', state: 'Esperando' },
        { id: 0, code: 0, product: 'pastel', client: 'joao', table: '02', state: 'Esperando' }]);
    
    const [newOrderedList, setNewOrderedList] = useState(orderedList.filter((e) => e.state === null));
    const [progressOrderedList, setProgressOrderedList] = useState(orderedList.filter((e) => e.state !== null));

    useEffect(() => {
        /*api
          .get("/table/search/all")
          .then((response) => setOrderedList(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });*/
    }, [])

    return (
        <>
            <div style={{ flex: 1, display: "flex" }}>
                <SideBar />
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <TopBar />
                    <Styled.Container>
                        <Styled.BorderContainer>
                            <Styled.TitleContainer>
                                <p>Novos pedidos</p>
                            </Styled.TitleContainer>

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Cod</th>
                                        <th>Nome do produto</th>
                                        <th>Cliente</th>
                                        <th>Mesa</th>
                                        <th>Opções</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        newOrderedList.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.code}</td>
                                                <td>{item.product}</td>
                                                <td>
                                                    {item.client == null ?
                                                        <>Não tem cliente</>
                                                        : item.client
                                                    }
                                                </td>
                                                <td>{
                                                    item.table
                                                }</td>
                                                <td>
                                                    <Button>Adicionar</Button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>

                        </Styled.BorderContainer>
                        <Styled.BorderContainer>
                            <Styled.TitleContainer>
                                <p>Pedidos em andamento</p>
                            </Styled.TitleContainer>

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Cod</th>
                                        <th>Nome do produto</th>
                                        <th>Cliente</th>
                                        <th>Mesa</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        progressOrderedList.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.code}</td>
                                                <td>{item.product}</td>
                                                <td>
                                                    {item.client == null ?
                                                        <>Não tem cliente</>
                                                        : item.client
                                                    }
                                                </td>
                                                <td>{
                                                    item.table
                                                }</td>
                                                <td>{
                                                    item.state
                                                }
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </Styled.BorderContainer>
                    </Styled.Container>
                </div>
            </div>
        </>
    );
}
