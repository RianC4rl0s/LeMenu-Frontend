import api from "../../services/api"
import { useEffect, useState } from "react";
import TopBar from "../../components/TopBar";
import { Button, Table } from "react-bootstrap";
import { SideBar } from "../../components/SideBar";

import * as Styled from "./styles";

export default function AttendantOrdereds() {
    const [orderedList, setOrderedList] = useState([]);
    
    const [newOrderedList, setNewOrderedList] = useState(orderedList.filter((e) => e.state === null));
    const [progressOrderedList, setProgressOrderedList] = useState(orderedList.filter((e) => e.state !== null));

    useEffect(() => {
        api
          .get("/ordered/search/all")
          .then((response) => {console.log(response.data); setOrderedList(response.data)})
          .catch((err) => { 
            console.error("ops! ocorreu um erro" + err);
          });
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
