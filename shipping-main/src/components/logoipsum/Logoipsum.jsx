import logoIpsum from "../../Assets/Logo 1.png";
import "./logoipsum.css";

export default function Logoipsum() {
  return (
    <div className="logocontainer">
      <div className="logoipsumImg">
        <img src={logoIpsum} alt="" />
      </div>
      <div className="logoipsumImg">
        <img src={logoIpsum} alt="" />
      </div>
      <div className="logoipsumImg">
        <img src={logoIpsum} alt="" />
      </div>
      <div className="logoipsumImg">
        <img src={logoIpsum} alt="" />
      </div>
      <div className="logoipsumImg">
        <img src={logoIpsum} alt="" />
      </div>
    </div>
  );
}
