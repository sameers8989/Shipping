import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerleft">
          <div className="email">massshipping@gmail.com</div>
          <div className="number">+1(333)000-0000</div>
        </div>
        <div className="headerRight">
          <button className="getquote">GET QUOTE</button>
        </div>
      </div>
    </div>
  );
}
