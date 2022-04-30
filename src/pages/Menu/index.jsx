import React from "react";
import { SideBar } from "../../components/SideBar";
import TopBar from "../../components/TopBar";
//import * as Styled from "./styles";
import ProductsMenu from "../../components/misc/ProductsMenu"
// import Path from "../../components/Path/Path"
import { Breadcrumb, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Menu = () => {
    return (
        <>
            <div style={{ flex: 1, display: "flex" }}>
                <SideBar />
                <div style={{ flex: 1, display: "flex", flexDirection: "column",marginTop:"20px" }}>
                    <TopBar />
                    <Container>

                        <Breadcrumb>
                            <LinkContainer to="/">
                                <Breadcrumb.Item >Inicio</Breadcrumb.Item>
                            </LinkContainer>
                            <LinkContainer to="/adm/cardapio">
                                <Breadcrumb.Item active>
                                    Cardápio
                                </Breadcrumb.Item>
                            </LinkContainer>
                        </Breadcrumb>

                        <ProductsMenu></ProductsMenu>
                    </Container>

                </div>
            </div>
        </>
    )
}
export default Menu;