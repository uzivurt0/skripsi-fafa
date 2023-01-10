import React, { useEffect, useState } from "react";
import "./loginAdmin.css";
import "../../pages/Homepages/home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          "https://skripsi-fafa-backend-production.up.railway.app/api/user"
        );
        setData(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    getUser();
  }, []);

  const onSubmit = () => {
    console.log(data);
    console.log(data[0].username);
    console.log(username, password);
    if (username === data[0].username && password === data[0].password) {
      navigate("/adminbantu1n/home");
    } else {
      window.alert("Silahkan masukkan username dan password yang sesuai!");
    }
  };

  return (
    <>
      <div className="home-container">
        <div className="login-content-container">
          <div className="login-content">
            <h2>ADMIN BAN-TUIN</h2>
            <div className="login-content-item">
              <div className="form-input">
                <label for="username">Email</label>
                <input
                  type="text"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-input">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-input">
                <button onClick={() => onSubmit()} className="login-button">
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
