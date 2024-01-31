import { useState } from "react";
import logo from "../../Assets/logo.png";
import "./navbar.css";
import { IoReorderThreeOutline } from "react-icons/io5";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const sidenav = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logo">
          <img src={logo} alt="logoImage" />
        </div>
        <div className="Navicon">
          <IoReorderThreeOutline className="threeDotIcon" onClick={sidenav} />
        </div>
        <div className={`links ${sidebar ? "" : "sidebar"}`} onClick={sidenav}>
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>SERVICES</li>
            <li>GALLERY</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
