import React from "react";
import logo from "../images/logo.png";

export default function NavBar() {
    return (
        <nav>
            <img src={logo} alt="AirBnB logo" className="nav--logo" />
        </nav>
    );
}
