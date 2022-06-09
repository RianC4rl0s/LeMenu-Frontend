//Importando React Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { App } from "./App";
// import Teste from "./pages/teste";
import Product from "./pages/Products";
import Home from "./pages/Home";
import HomeAttendent from "./pages/HomeAtenddant";
import Attendants from "./pages/Attendants";
// import ProductRegister from "./pages/ProductsRegister";
import AttendantsRegister from "./pages/AttendantRegister";
import Menu from "./pages/Menu";
import Tables from "./pages/Tables";
import Login from "./pages/Login";
import TablesClerk from "./pages/TablesAttendant";
import AdmTable from "./components/AdmTable";
import ProductAttendant from "./pages/ProductsAttendant";
import MenuAttendant from "./pages/MenuAttendant";
import AttendantOrdereds from "./pages/AttendantOrdereds";
import AdmOrderds from "./pages/AdmOrders";
import { AuthProvider } from "./context/AuthContext";
import { useEffect, useState } from "react";


export default function RoutesSwitch() {

  const [role, setRole] = useState("");
  useEffect(() => {
    setRole(localStorage.getItem("user_role"))
  }, [])
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}


          <Route path="/" element={<Login />} />
          <Route path="/adm" element={<Home />} />
          <Route path="/atendente" element={<HomeAttendent />} />
          {
            (role === "ROLE_ADMIN" || role === "ROLE_SUPER_ADMIN") && <>

              <Route path="/adm/mesas" element={<Tables />} />
              <Route path="/adm/produtos" element={<Product />} />
              <Route path="/adm/cardapio" element={<Menu />} />
              <Route path="/adm/atendentes" element={<Attendants />} />
              <Route path="/adm/atendentes-novo" element={<AttendantsRegister />} />
              <Route path="/adm/pedidos/" element={<AdmOrderds />} />
            </>
          }
          {
            role === "ROLE_SUPER_ADMIN" &&
            <Route path="/sudo" element={<AdmTable />} />

          }

          {/*Rotas Atendente*/}



          <Route path="/clerk/mesas" element={<TablesClerk />} />
          <Route path="/clerk/produtos" element={<ProductAttendant />} />
          <Route path="/clerk/cardapio" element={<MenuAttendant />} />
          <Route path="/clerk/pedidos" element={<AttendantOrdereds />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
