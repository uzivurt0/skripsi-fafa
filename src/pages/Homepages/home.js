import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-container">
        <div className="home-content-container">
          <div className="home-content">
            <div className="home-content-item">
              <h1>Ban-Tuin</h1>
              <p>Rekomendasi Ban Sepeda Motor Yang Sesuai Dengan Motormu!</p>
              <button
                className="home-button"
                onClick={() => navigate("/forms")}
              >
                MULAI
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
