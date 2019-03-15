import React from "react";
// import "./style.css";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div id="overlay">
            <nav className="navbar navbar-trans navbar-expand-lg navbar-light bg-black">
            <Link to="/" className="nav-link"><h1>LUX STUDIO</h1></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link">SERVICES</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className="nav-link">PORTFOLIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/FAQ" className="nav-link">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">CONTACT</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default NavBar;