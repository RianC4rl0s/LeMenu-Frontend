import React from "react";
import { SideBar } from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import * as Styled from "./styles";
import AttendantsTable from "../../components/AttendentsTable"
import Path from "../../components/Path/Path"
const attendants = () => {
    return (
        <>
            <div style={{ flex: 1, display: "flex" }}>
                <SideBar />
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <TopBar />
                    <Styled.Container>
                        <Path></Path>
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