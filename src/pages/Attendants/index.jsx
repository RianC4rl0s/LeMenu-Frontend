import React from "react";
import { SideBar } from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import * as Styled from "./styles";
import AttendantsTable from "../../components/AttendentsTable"
// import Path from "../../components/Path/Path"
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const attendants = () => {
    return (
        <>
            <div style={{ flex: 1, display: "flex" }}>
                <SideBar />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", margin: "20px" }}>
                    <TopBar />
                    <Styled.Container>

                        <Breadcrumb>
                            <LinkContainer to="/">
                                <Breadcrumb.Item >Inicio</Breadcrumb.Item>
                            </LinkContainer>
                            <LinkContainer to="/adm/atendentes">
                                <Breadcrumb.Item active>
                                    Atendentes
                                </Breadcrumb.Item>
                            </LinkContainer>
                        </Breadcrumb>


                        <Styled.BorderContainer>
                            <AttendantsTable />
                        </Styled.BorderContainer>

                    </Styled.Container>
                </div>
            </div>
        </>
    )
}
export default attendants;