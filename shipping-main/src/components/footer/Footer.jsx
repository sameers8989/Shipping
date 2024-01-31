import "./footer.css";
import logo from "../../Assets/logo.png";
import footerImg from "../../Assets/footerimg.jpg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footertop">
          <div className="footerleft">
            <div className="first">
              <div className="firstImg">
                <img src={logo} alt="logo" />
              </div>
              <div className="firsttxt">
                <div>we believe in providing our clients with</div>
                <div>personalized and efficient logistics</div>
                <div>solutions that meet their unique</div>
                <div>needs.</div>
              </div>
            </div>
            <div className="last">
              <div className="navigate">Navigation</div>
              <div className="navlist">
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footerRight">
            <div className="rightFirst">
              <div className="recentprojects">Recent Project</div>
              <div className="rightImg">
                <img src={footerImg} alt="" />
              </div>
            </div>
            <div className="rightlast">
              <div className="subhead">Subscribe Us</div>
              <div className="rightInput">
                <input type="text" placeholder="Enter Your Email" />
              </div>
              <button className="subbtn">Subscribe Now</button>
            </div>
          </div>
        </div>
        <div className="footerLine"></div>
        <div className="copyRight">Copyright © 2023 massshipping</div>
      </div>
    </div>
  );
}
