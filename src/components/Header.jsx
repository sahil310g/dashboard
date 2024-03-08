import React from "react";
import { Link } from "react-router-dom";
import logo from "../asstes/leadenhallanalytics_logo.jpeg";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" className="image" />
      </Link>
      <div className="buttons">
        <Link to={"./broker"}>
          <button>Broker</button>
        </Link>

        <Link to={"./class"}>
          <button>Class</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
