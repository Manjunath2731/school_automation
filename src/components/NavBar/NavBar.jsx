import React from "react";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import Yit_logo from "../../assets/images/Yit_logo.svg";
import { Link } from "react-router-dom";
import "../../main.css";
export const NavBar = () => {
  const [active, setActive] = useState("navBarMenu");
  const showNavBar = () => {
    setActive("navBarMenu,showNavBar");
  };

  const removeNavBar = () => {
    setActive("navBarMenu");
  };

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div className="logoDiv">
          <img src={Yit_logo} alt="" className="Logo" />
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">
              <Link to="/HomeUI">Home</Link>
            </li>
            <li onClick={removeNavBar} className="listItem">
              <Link to="/About">About</Link>
            </li>
            <li onClick={removeNavBar} className="listItem">
              <Link to="/Achivement">Achivements</Link>
            </li>
            <li onClick={removeNavBar} className="listItem">
              <Link to="/Notes">Notes</Link>
            </li>
            <li>
              <button onClick={removeNavBar} className="btn flex btnOne">
                <Link to="/login">Sign Out</Link>
              </button>
            </li>
            <li>
              <div onClick={showNavBar} className="toggleIcon">
                <CgMenuGridO className="icon" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
