import React from "react";
import { SideBar } from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import * as Styled from "./styles";
import ProductsTable from "../../components/ProductsTable";
import Path from "../../components/Path/Path";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Product = () => {
  return (
    <>
      <div style={{ flex: 1, display: "flex" }}>
        <SideBar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", margin: "20px" }}>
          <TopBar />
          <Styled.Container>
            {/* <Path></Path> */}
            <Breadcrumb>
              <LinkContainer to="/">
                <Breadcrumb.Item >Inicio</Breadcrumb.Item>
              </LinkContainer>
              <LinkContainer to="/adm/produtos">
                <Breadcrumb.Item active>
                  Produtos
                </Breadcrumb.Item>
              </LinkContainer>
            </Breadcrumb>
            <Styled.BorderContainer>
              <ProductsTable />
            </Styled.BorderContainer>
          </Styled.Container>
        </div>
      </div>
    </>
  );
};
export default Product;
