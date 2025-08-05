import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isHoveringHire, setIsHoveringHire] = useState(false);

    const navLinkStyle = ({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
        color: isActive ? "blue" : "black",
        textDecoration: "none",
        marginRight: "20px",
    });

    const hireUsStyle = {
        backgroundColor: isHoveringHire ? "#c62828" : "#f44336",
        color: "#fff",
        padding: "8px 16px",
        borderRadius: "5px",
        textDecoration: "none",
        fontWeight: "bold",
        marginLeft: "20px",
        transition: "background-color 0.3s ease",
    };

    return (
        <nav
            style={{
                position: "fixed",       // Fixes navbar at top
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,            // Keeps navbar above other elements
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 2rem",
                background: "#eee",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
        >
            {/* Logo / Brand */}
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>
                MyApp
            </div>

            {/* Navigation Links */}
            <div style={{ display: "flex", alignItems: "center" }}>
                <NavLink to="/" style={navLinkStyle}>
                    Home
                </NavLink>
                <NavLink to="/about" style={navLinkStyle}>
                    About
                </NavLink>
                <NavLink to="/service" style={navLinkStyle}>
                    Services
                </NavLink>
                <NavLink to="/port" style={navLinkStyle}>
                    Portfolio
                </NavLink>

                <NavLink
                    to="/hire"
                    style={hireUsStyle}
                    onMouseEnter={() => setIsHoveringHire(true)}
                    onMouseLeave={() => setIsHoveringHire(false)}
                >
                    Hire Me
                </NavLink>
            </div>
        </nav>
    );
}
