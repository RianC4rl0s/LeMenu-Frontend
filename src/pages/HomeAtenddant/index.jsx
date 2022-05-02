import { SideBarAttendant } from "../../components/SideBarAttendant";
import banner from "../../assets/banner.svg";
import phone from "../../assets/phone.png"
const HomeAttendent = () => {
  return (
    <>
      <div style={{ flex: 1, display: "flex" }}>
        <SideBarAttendant />
        <div style={{ flex: 1, display: "flex", flexDirection: "column",backgroundColor: "#7b9c59", }}>
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
              backgroundSize: "cover",
              height: "40%",
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
            height: "55%",
            backgroundColor: "#9cc871",
            boxShadow: "2px 2px 10px #4a4a4a6a"
          }}>
            <p style={{
              fontSize: "2em", color: "#ffffff",
              textShadow: "5px 5px 8px #515151",
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
export default HomeAttendent;
