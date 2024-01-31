import "./works.css";
import empImg from "../../Assets/empImg.jpg";
import icon from "../../Assets/icon.png";

export default function Works() {
  return (
    <div className="works">
      <div className="workContainer">
        <div className="worktop">
          <div className="topleft">
            <div className="empImg">
              <img src={empImg} alt="empImg" />
            </div>
          </div>
          <div className="topRight">
            <div className="workhead">HOW IT WORKS</div>
            <div className="righttxt">
              <div>SIMPLIFY YOUR SHIPPING</div>
              <div>EXPERIENCE WITH OUR</div>
              <div>EASY STEP PROCESS</div>
            </div>
            <div className="rightContent">
              <div>
                we believe in providing our clients with personalized and
                efficient
              </div>
              <div>
                logistics solutions that meet their unique needs. With years of
              </div>
              <div>
                experience and a team of experts, we are dedicated to empowering
                your
              </div>
              <div>business with seamless shipping experiences</div>
            </div>
          </div>
        </div>
        <div className="workmiddle">
          <div className="line"></div>
        </div>
        <div className="workBottom">
          <div className="left">
            <div className="step">Step 1</div>
            <div className="leftImg">
              <img src={icon} alt="" />
            </div>
            <div className="lefthead">REQUEST A QUOTE</div>
            <div className="lefttext">
              <div>we believe in providing our clients with</div>
              <div>personalized and efficient logistics</div>
              <div>solutions that meet their unique needs.</div>
            </div>
          </div>
          <div className="left">
            <div className="step">Step 2</div>
            <div className="leftImg">
              <img src={icon} alt="" />
            </div>
            <div className="lefthead">PROVIDE DETAILS</div>
            <div className="lefttext">
              <div>we believe in providing our clients with</div>
              <div>personalized and efficient logistics</div>
              <div>solutions that meet their unique needs.</div>
            </div>
          </div>
          <div className="left">
            <div className="step">Step 3</div>
            <div className="leftImg">
              <img src={icon} alt="" />
            </div>
            <div className="lefthead">SCHEDULE PICK-UP</div>
            <div className="lefttext">
              <div>we believe in providing our clients with</div>
              <div>personalized and efficient logistics</div>
              <div>solutions that meet their unique needs.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
