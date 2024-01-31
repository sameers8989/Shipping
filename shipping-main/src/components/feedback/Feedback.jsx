import React from "react";
import "./feedback.css";
import cleint from "../../Assets/cleint2.jpg";
import image from "../../Assets/image.jpg";
import stars from "../../Assets/stars.png";

export default function Feedback() {
  return (
    <div className="feed">
      <div className="feedContainer">
        <div className="leftSide">
          <div>
            <div className="subhead">TESTIMONIALS</div>
            <div className="heading">
              <div>OUR CLEINT SPEAK</div>
              <div>FOR US</div>
            </div>
          </div>
          <div className="imgsection">
            <img src={image} alt="" className="image" />
            <div className="imgdiv">
              <img src={cleint} alt="" />
            </div>
          </div>
          <div className="feedback">
            <div className="stars">
              <img src={stars} alt="" />
            </div>
            <div className="texts">
              <div>
                I have been using FastGo cargo logistic & transportation
              </div>
              <div>
                services for over a year now and I am extremely satisfied
              </div>
              <div>
                with their service. They are efficient, reliable, and always
              </div>
              <div>deliver on time. I highly recommend them to anyone in </div>
              <div>need of logistics services.</div>
            </div>
            <div className="owner">John Doe, Business Owner</div>
          </div>
        </div>
        <div className="rightSide">
          <div className="rightfeedback">
            <div className="stars">
              <img src={stars} alt="" />
            </div>
            <div className="texts">
              <div>
                I have been using FastGo cargo logistic & transportation
              </div>
              <div>
                services for over a year now and I am extremely satisfied
              </div>
              <div>
                with their service. They are efficient, reliable, and always
              </div>
              <div>deliver on time. I highly recommend them to anyone in </div>
              <div>need of logistics services.</div>
            </div>
            <div className="owner">John Doe, Business Owner</div>
          </div>{" "}
          <div className="rightfeedback">
            <div className="stars">
              <img src={stars} alt="" />
            </div>
            <div className="texts">
              <div>
                I have been using FastGo cargo logistic & transportation
              </div>
              <div>
                services for over a year now and I am extremely satisfied
              </div>
              <div>
                with their service. They are efficient, reliable, and always
              </div>
              <div>deliver on time. I highly recommend them to anyone in </div>
              <div>need of logistics services.</div>
            </div>
            <div className="owner">John Doe, Business Owner</div>
          </div>{" "}
          <div className="rightfeedback">
            <div className="stars">
              <img src={stars} alt="" />
            </div>
            <div className="texts">
              <div>
                I have been using FastGo cargo logistic & transportation
              </div>
              <div>
                services for over a year now and I am extremely satisfied
              </div>
              <div>
                with their service. They are efficient, reliable, and always
              </div>
              <div>deliver on time. I highly recommend them to anyone in </div>
              <div>need of logistics services.</div>
            </div>
            <div className="owner">John Doe, Business Owner</div>
          </div>
        </div>
      </div>
    </div>
  );
}
