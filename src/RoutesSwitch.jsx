//Importando React Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { App } from "./App";
// import Teste from "./pages/teste";
import Product from "./pages/Products";
import Home from "./pages/Home";
import Attendants from "./pages/Attendants";
// import ProductRegister from "./pages/ProductsRegister";
import AttendantsRegister from "./pages/AttendantRegister";
import Menu from "./pages/Menu";
import Tables from "./pages/Tables";
import Login from "./pages/Login"
export default function RoutesSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adm" element={<Home />} />
        <Route path="/atendente" element={<>ATENDENTE</>} />
        <Route path="/" element={<Login />} />
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/adm/mesas" element={<Tables />} />
        <Route path="/adm/produtos" element={<Product />} />
        <Route path="/adm/cardapio" element={<Menu />} />
        <Route path="/adm/atendentes" element={<Attendants />} />
        <Route path="/adm/atendentes-novo" element={<AttendantsRegister />} />
      </Routes>
    </BrowserRouter>
  );
}
