import React from "react";
import { SideBar } from "../../components/SideBar";
import TopBar from "../../components/TopBar";
//import * as Styled from "./styles";
import ProductsMenu from "../../components/misc/ProductsMenu"
import Path from "../../components/Path/Path"
import { Container } from "react-bootstrap";
const Menu = () => {
    return (
        <>
            <div style={{ flex: 1, display: "flex" }}>
                <SideBar />
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <TopBar />
                    <Container>

                        <Path></Path>

                        <ProductsMenu></ProductsMenu>
                    </Container>

                </div>
            </div>
        </>
    )
}
export default Menu;