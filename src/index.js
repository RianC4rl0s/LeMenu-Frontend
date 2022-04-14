// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import { App } from "./App";

import { render } from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes,Route } from "react-router-dom";
import RoutesSwitch from "./RoutesSwitch";
import { GlobalStyle } from "./styles/global";

const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //   </ Routes>
  // </BrowserRouter>
  <>
    <GlobalStyle />
    <RoutesSwitch></RoutesSwitch>
  </>,
  rootElement
);
