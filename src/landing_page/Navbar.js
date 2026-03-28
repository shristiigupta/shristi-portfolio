import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg">
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <div className="brand">Shristi Gupta</div>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-lg-0">
                        {["/", "/about", "/projects", "/achievements", "/contact"].map((path, idx) => (
                            <li className="nav-item" key={idx}>
                                <Link
                                    className="nav-link active"
                                    to={path}
                                    style={{ color: "#EED6D3" , fontSize: "1.15rem", fontFamily: "Times New Roman, serif",
  fontWeight: "500" }}
                                >
                                    {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </nav>
    );
}

export default Navbar;
