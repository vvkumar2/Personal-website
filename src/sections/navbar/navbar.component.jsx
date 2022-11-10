// import Hamburger from "hamburger-react";
import React from "react";
import Logo from "../../components/logo/logo.component";
import MenuButton from "../../components/menu-button/menu-button.component";

import './navbar.styles.css'

const Navbar = () => {
  return (
    <div className="navbar-section">
        <div>
            <Logo />
        </div>
        <div className="navbar-hamburger">
            <MenuButton />
        </div>
    </div>
  );
};

export default Navbar;
