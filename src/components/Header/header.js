import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <div className="header-content">
        <button className="header-button" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </header>
  );
};

export default Header;
