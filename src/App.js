import { SideBar } from "./components/SideBar";
import TopBar from "./components/TopBar";
import banner from "./assets/banner.svg";

export function App() {
  return (
    <>
      <div style={{ flex: 1, display: "flex" }}>
        <SideBar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <TopBar />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1>Le Menu</h1>
            <h2>Compre fácil.coma rápido.</h2>
            <img src={banner} alt="banner" height={400} />
          </div>
        </div>
      </div>
    </>
  );
}
