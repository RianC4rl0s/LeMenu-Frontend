import { SideBar } from "../../components/SideBar";
import banner from "../../assets/banner.svg";
import phone from "../../assets/phone.png"
const home = () => {
  return (
    <>
      <div style={{ flex: 1, display: "flex" }}>
        <SideBar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "#f1f1f1",
              textShadow: "3px 3px 5px #626262",
              backgroundImage: `URL(${banner}`,
              backgroundPosition: "center",
              height: "40%",
              backgroundSize: "cover",
              boxShadow: "4px 4px 10px #2e2e2ed8"
            }}
          >


            <h1 style={{ fontSize: "9em" }}>Le Menu</h1>
            <h2>Compre fácil. Coma rápido.</h2>

            {/* <img src={banner} alt="banner" height={400} /> */}
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: "50%",
            backgroundColor: "#9cc871",
            boxShadow: "2px 2px 10px #4a4a4a6a"
          }}>
            <p style={{
              fontSize: "2em", color: "#f1f1f1",
              textShadow: "3px 3px 5px #626262",
            }}>
              Acesse já<br />
              <label style={{ fontSize: "2em" }}>Simples e rápido</label>
            </p>
            <img src={phone} alt="banner" height={550} />
          </div>
        </div>
      </div>
    </>
  );
}
export default home;
