import React from "react";
import "./loginAdmin.css";
import "../../pages/Homepages/home.css";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-container">
        <div className="login-content-container">
          <div className="login-content">
            <h2>ADMIN BAN-TUIN</h2>
            <div className="login-content-item">
              <div className="form-input">
                <label for="username">Email</label>
                <input type="text" id="username" />
              </div>
              <div className="form-input">
                <label for="password">Password</label>
                <input type="password" id="password" />
              </div>
              <div className="form-input">
                <button
                  onClick={() => navigate("/adminbantu1n/home")}
                  className="login-button"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;
