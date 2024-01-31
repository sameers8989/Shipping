import "./Service.css";
import serviceData from "../../dummydatas/Service";
import icon from "../../Assets/icon.png";

export default function Service() {
  return (
    <div className="services">
      <div className="serviceContainer">
        <div className="serviceTop">
          <div className="servicetext">OUR SERVICES</div>
          <div className="serviceHead">
            <div>EFFICEINT AND RELAIBLE SHIPPING</div>
            <div>WITH FASTGO</div>
          </div>
        </div>
        <div className="servicebottom">
          <div className="servicedata">
            {serviceData.map((items) => {
              return (
                <div className="data">
                  <div className="inner">
                    <div className="icon">
                      <img src={icon} alt="icon" />
                    </div>
                    <div className="head">{items.head}</div>
                    <div className="txt">{items.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
