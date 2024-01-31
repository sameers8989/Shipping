import "./about.css";
import aboutImg from "../../Assets/aboutImg.jpg";
import datas from "../../dummydatas/About";

export default function About() {
  return (
    <div className="about">
      <div className="aboutusContainer">
        <div className="abouttop">
          <div className="topleft">
            
            <div className="aboutus">ABOUT US</div>
            <div className="empower">
              <div>EMPOWERING YOUR</div>
              <div>BUISSNESS WITH TAILORD</div>
              <div>LOGISTICS SOLUTION</div>
            </div>
            <div className="abouttexts">
              <div>
                We believe in providing our clients with personalised and
                efficient{" "}
              </div>
              <div>
                logistics solutions that meet their unique needs. With year of{" "}
              </div>
              <div>
                experience and a team of experts, we are dedicated to empowering
                your{" "}
              </div>
              <div>buissness with seamless shipping experience</div>
            </div>
            <div className="learnMore">
              <button>LEARN MORE</button>
            </div>
          </div>
          <div className="topRight">
            <div className="aboutImg">
              <img src={aboutImg} alt="aboutimage" />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottomConatiner">
            {datas.map((items, index) => {
              return (
                <div className="datas" key={index}>
                  <div className="textno">{items.no}</div>
                  <div className="border"></div>
                  <div className="itemText">{items.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
