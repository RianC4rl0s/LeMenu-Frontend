import React from "react";
import { SideBarAttendant } from "../../components/SideBarAttendant";
import TopBar from "../../components/TopBar";
//import * as Styled from "./styles";
import ProductsMenuAttendant from "../../components/misc/ProductsMenuAttendant";
// import Path from "../../components/Path/Path"
import { Breadcrumb, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const MenuAttendant = () => {
  return (
    <>
      <div style={{ flex: 1, display: "flex" }}>
        <SideBarAttendant />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          <TopBar />
          <Container>
            <Breadcrumb>
              <LinkContainer to="/">
                <Breadcrumb.Item>Inicio</Breadcrumb.Item>
              </LinkContainer>
              <LinkContainer to="/clerk/cardapio">
                <Breadcrumb.Item active>Cardápio</Breadcrumb.Item>
              </LinkContainer>
            </Breadcrumb>

            <ProductsMenuAttendant></ProductsMenuAttendant>
          </Container>
        </div>
      </div>
    </>
  );
};
export default MenuAttendant;
