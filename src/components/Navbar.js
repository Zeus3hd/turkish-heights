import React, { useState } from "react";
import logo from "../imgs/200pix.png";
import Icon from "@material-ui/core/Icon";

const Navbar = () => {
  const [sidebarVisible, setVisible] = useState(false);

  return (
    <nav>
      <a href="#a">
        <img alt="logo" src={logo} id="logo" />
      </a>
      <button onClick={() => setVisible(!sidebarVisible)}>
        <Icon>menu</Icon>
      </button>
      <div id="side-nav" className={sidebarVisible ? "visible" : "invisible"}>
        <ul>
          <li>
            <a href="#a">Home</a>
          </li>
          <li>
            <a href="#a">Explore</a>
          </li>
          <li>
            <a href="#a">Investment</a>
          </li>
          <li>
            <a href="#a">Services</a>
          </li>
          <li>
            <a href="#a">About us</a>
          </li>
          <li>
            <a href="#a">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
