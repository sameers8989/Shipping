import "./CargoService.css";
import cleints from "../../Assets/cleints.jpg";
import Track from "../subComponenets/Track";

export default function Cargoservice() {
  return (
    <div className="cargo">
      <div className="shade">
        <div className="container">
          <div className="top">WE ARE BEST LOGISTIC COMAPNY</div>
          <div className="middle">
            <div>STREAMLINE YOUR SHIPPING WITH</div>
            <div>OUR CARGO SERVICES</div>
          </div>
          <div className="bottom">
            <div>
              Simplify your shipping process and make it more efficient with our
            </div>
            <div>
              cargo services. From start to finish, we'll handle everything to
              ensure
            </div>
            <div>your cargo arrives saftely</div>
          </div>
          <div className="aboutCleints">
            <div style={{ display: "flex", gap: "1rem" }}>
              <div className="img">
                <img src={cleints} alt="" />
              </div>
              <div className="cleints">
                <div className="num">26 K</div>
                <div>Satisfied Cleints</div>
              </div>
              <div className="exp">
                <div className="num">12 +</div>
                <div>years of experience</div>
              </div>
            </div>
            <Track />
          </div>
        </div>
      </div>
    </div>
  );
}
