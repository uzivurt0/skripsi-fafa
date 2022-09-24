import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testing from "../../assets/images/maxresdefault.jpg";
import Diablo from "../../assets/images/duablorossooo.jpg";
import HomeImage from "../../assets/images/home image.png";
import Maxxis from "../../assets/images/maxxis.jpg";
import Battlax from "../../assets/images/battlax.jpg";

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
            <img src={HomeImage} alt="Home" />
          </div>
        </div>
      </div>
      <div className="home-content-gallery">
        <div className="home-content-gallery-container">
          <div className="home-content-gallery-wrapper">
            <img alt="Gallery Home" src={Testing} />
          </div>
        </div>
        <div className="home-content-gallery-container">
          <div className="home-content-gallery-wrapper">
            <img alt="Gallery Home" src={Diablo} />
          </div>
        </div>
        <div className="home-content-gallery-container">
          <div className="home-content-gallery-wrapper">
            <img alt="Gallery Home" src={Maxxis} />
          </div>
        </div>
        <div className="home-content-gallery-container">
          <div className="home-content-gallery-wrapper">
            <img alt="Gallery Home" src={Battlax} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
