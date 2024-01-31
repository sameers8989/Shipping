import "./track.css";

export default function Track() {
  return (
    <div>
      <div className="buttons">
        <button className="tracking">TRACKING</button>
        <button className="rate">RATE&SHIP</button>
      </div>
      <div className="TrackContainer">
        <div className="center">
          <div className="input">
            <input type="text" placeholder="TRACKING ID" />
          </div>
          <button>TRACK</button>
        </div>
        <div className="help">See the tracking id on triping document.Help</div>
      </div>
    </div>
  );
}
