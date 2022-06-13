import api from "../../services/api"
import { useEffect, useState } from "react";
import TopBar from "../../components/TopBar";
import { Button, Table } from "react-bootstrap";
import { SideBar } from "../../components/SideBar";
import * as Styled from "./styles";

export default function AdmOrderds() {

    const [orderedList, setOrderedList] = useState([]);

    /*const [newOrderedList, setNewOrderedList] = useState(orderedList.filter((e) => e.state === "Wait"));
    const [progressOrderedList, setProgressOrderedList] = useState(orderedList.filter((e) => e.state !== "Progress"));
    const [finalized, setFinalizedOrderedList] = useState(orderedList.filter((e) => e.state !== "Finalized"));*/

    useEffect(() => {
        api
            .get("/ordered/search/all")
            //.get(`/table/list/order?id=${id}`)
            .then((response) => {
                console.log(response.data); setOrderedList(response.data)

            })
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

                                        <th>Descrição</th>
                                        <th>Opções</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderedList.filter((e) => e.status === "Wait").map(item => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.product.name}</td>
                                                <td>

                                                    {item.orderedTable.client == null ?
                                                        <>Não tem cliente</>
                                                        : item.orderedTable.client?.name
                                                    }
                                                </td>
                                                
                                                <td>
                                                    {
                                                        item.orderedTable?.code
                                                    }
                                                </td>


                                                <th>{item.description}</th>
                                                <td>
                                                    <Button onClick={
                                                        async () => {

                                                            await api
                                                                .put("/ordered/update/" + item.id, {
                                                                    "status": "Progress",
                                                                    "description": item.description
                                                                })
                                                                .then((response) => {
                                                                    item.status = "Progress"
                                                                    let temp = orderedList.filter(value => value.id !== item.id)
                                                                    temp.push(item)
                                                                    setOrderedList(temp)


                                                                } /*console.log(response.data)*/)
                                                                .catch((err) => {

                                                                    console.error("ops! ocorreu um erro" + err);
                                                                });


                                                        }
                                                    }>Preparar</Button>
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

                                        <th>Descrição</th>
                                        <th>Opções</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderedList.filter((e) => e.status === "Progress").map(item => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.product.name}</td>
                                                <td>
                                                    {item.orderedTable.client == null ?
                                                        <>Não tem cliente</>
                                                        : item.orderedTable.client?.name
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        item.orderedTable?.code
                                                    }
                                                </td>


                                                <th>{item.description}</th>
                                                <td>
                                                    <Button
                                                        onClick={
                                                            async () => {
                                                                await api
                                                                    .put("/ordered/update/" + item.id, {
                                                                        "status": "Finalized",
                                                                        "description": item.description
                                                                    })
                                                                    .then((response) => {
                                                                        item.status = "Finalized"
                                                                        let temp = orderedList.filter(value => value.id !== item.id)
                                                                        temp.push(item)
                                                                        setOrderedList(temp)
                                                                    } /*console.log(response.data)*/)
                                                                    .catch((err) => {

                                                                        console.error("ops! ocorreu um erro" + err);
                                                                    });
                                                                api
                                                                    .get("/ordered/search/all")
                                                                    //.get(`/table/list/order?id=${id}`)
                                                                    .then((response) => {
                                                                        console.log(response.data); setOrderedList(response.data)

                                                                    })
                                                                    .catch((err) => {
                                                                        console.error("ops! ocorreu um erro" + err);
                                                                    });


                                                            }
                                                        }
                                                    >Finalizar</Button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </Styled.BorderContainer>
                        <Styled.BorderContainer>
                            <Styled.TitleContainer>
                                <p>Finalizados</p>
                            </Styled.TitleContainer>

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Cod</th>
                                        <th>Nome do produto</th>
                                        <th>Cliente</th>
                                        <th>Mesa</th>

                                        <th>Descrição</th>
                                        <th>Opções</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderedList.filter((e) => e.status === "Finalized").map(item => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.product.name}</td>
                                                <td>
                                                    {item.orderedTable.client == null ?
                                                        <>Não tem cliente</>
                                                        : item.orderedTable.client?.name
                                                    }
                                                </td>
                                                <td>

                                                    {
                                                        item.orderedTable?.code
                                                    }
                                                </td>
                                                <th>{item.description}</th>
                                                <td>
                                                    <Button onClick={
                                                        async () => {

                                                            await api
                                                                .put("/ordered/update/" + item.id, {
                                                                    "status": "Progress",
                                                                    "description": item.description
                                                                })
                                                                .then((response) => {
                                                                    item.status = "Progress"

                                                                    let temp = orderedList.filter(value => value.id !== item.id)
                                                                    temp.push(item)
                                                                    setOrderedList(temp)

                                                                } /*console.log(response.data)*/)
                                                                .catch((err) => {

                                                                    console.error("ops! ocorreu um erro" + err);
                                                                });


                                                        }
                                                    }>Voltar ao Preparo</Button>
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
