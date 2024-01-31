import "./contact.css";
import icon from "../../Assets/icon.png";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactContainer">
        <div className="contentleft">
          <div className="subheading">contact us</div>
          <div className="contactHeading">
            <div>Take the First Step</div>
            <div> to Streamlined </div>
            <div>Shipping</div>
          </div>
          <div className="contactLayout">
            <div className="contactChild">
              <div className="contactImg">
                <img src={icon} alt="" />
              </div>
              <div className="detail">
                <div className="label">call us</div>
                <div className="numbers">+2 333 000-0000</div>
              </div>
            </div>
            <div className="contactChild">
              <div className="contactImg">
                <img src={icon} alt="" />
              </div>
              <div className="detail">
                <div className="label">Email</div>
                <div className="numbers">massshipping@mail.com</div>
              </div>
            </div>
            <div className="contactChild3">
              <div className="contactImg">
                <img src={icon} alt="" />
              </div>
              <div className="detail">
                <div className="label">Office</div>
                <div className="numbers">Anywhere Street, NY</div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactRight">
          <div className="rightContainer">
            <div className="formHead">Request a Quote Today</div>
            <div className="form">
              <div className="name">
                <div>your name</div>
                <div className="contactinput">
                  <input type="text" placeholder="Ex: Jhon Dee" />
                </div>
              </div>
              <div className="name">
                <div>email address</div>
                <div className="contactinput">
                  <input type="text" placeholder="Ex: jhondee@gmail.com" />
                </div>
              </div>
              <div className="name">
                <div>phone</div>
                <div className="contactinput">
                  <input type="text" placeholder="Ex: +1 (333) 000-0000" />
                </div>
              </div>
              <div className="name">
                <div>message</div>
                <div className="contactinput">
                  <input
                    type="text"
                    placeholder="Writing your message here..."
                  />
                </div>
              </div>
              <button className="submit">submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
