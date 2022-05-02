import React from "react";
import { SideBarAttendant } from "../../components/SideBarAttendant";
import TopBar from "../../components/TopBar";
import * as Styled from "./styles";
import ProductsTableAttendant from "../../components/ProductsTableAttendant";
import Path from "../../components/Path/Path";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const ProductAttendant = () => {
  return (
    <>
      <div style={{ flex: 1, display: "flex" }}>
        <SideBarAttendant />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            margin: "20px",
          }}
        >
          <TopBar />
          <Styled.Container>
            {/* <Path></Path> */}
            <Breadcrumb>
              <LinkContainer to="/atendente">
                <Breadcrumb.Item>Inicio</Breadcrumb.Item>
              </LinkContainer>
              <LinkContainer to="/clerk/produtos">
                <Breadcrumb.Item active>Produtos</Breadcrumb.Item>
              </LinkContainer>
            </Breadcrumb>
            <Styled.BorderContainer>
              <ProductsTableAttendant />
            </Styled.BorderContainer>
          </Styled.Container>
        </div>
      </div>
    </>
  );
};
export default ProductAttendant;
