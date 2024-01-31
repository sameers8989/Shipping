import "./vedio.css";
import playButton from "../../Assets/playButton.png";

export default function Vedio() {
  return (
    <div className="vedio">
      <div className="vediotop">
        <div className="vedioheading">SEE IT IN ACTION</div>
        <div className="vediotxt">
          Watch Our Video to Get a Clear Understanding of How It Works
        </div>
      </div>
      <div className="vedioPlaybutton">
        <img src={playButton} alt="" />
      </div>
    </div>
  );
}
