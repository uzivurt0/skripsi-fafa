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
            <div className="login-content-item">
              <div className="form-input">
                <label for="username">USERNAME</label>
                <input type="text" id="username" />
              </div>
              <div className="form-input">
                <label for="password">PASSWORD</label>
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
