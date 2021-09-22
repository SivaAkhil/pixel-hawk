import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./header.css";
import Logo from "../asserts/logo.svg";

const active = {
  color: "grey",
  textDecoration: "underline",
};

const Header = () => {
  return (
    <div className="header-container">
      <div
        style={{
          marginLeft: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/" exact>
          <img src={Logo} alt="" className="logo-img" />
        </Link>
      </div>
      <div style={{ marginRight: "10px" }}>
        <ul className="header-links-container">
          <li className="header-links header-link-1">
            <NavLink
              to="/"
              exact
              activeStyle={active}
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </NavLink>
          </li>
          <li className="header-links header-link-1">
            <NavLink
              to="/compressimage"
              activeStyle={active}
              exact
              style={{ color: "white", textDecoration: "none" }}
            >
              Img-Compressor
            </NavLink>
          </li>
          <li className="header-links header-link-1">
            <NavLink
              to="/imagecolorpalette"
              style={{ color: "white", textDecoration: "none" }}
              exact
              activeStyle={active}
            >
              Img-ColorPalette
            </NavLink>
          </li>
          <li className="header-links ">
            <NavLink
              to="/siteinfo"
              exact
              style={{ color: "white", textDecoration: "none" }}
              activeStyle={active}
            >
              Site-Info
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
