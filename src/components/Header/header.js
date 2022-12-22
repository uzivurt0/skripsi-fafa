import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <div className="header-content">
        <div onClick={() => navigate("/")} className="header-logo">
          <h1 className="header-logo-text">BAN-TUIN</h1>
        </div>
        <button className="header-button" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </header>
  );
};

export default Header;
