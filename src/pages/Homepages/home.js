import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testing from "../../assets/images/maxresdefault.jpg";
import Diablo from "../../assets/images/duablorossooo.jpg";
import HomeImage from "../../assets/images/icon ban.png";
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
            <div className="home-image">
              <img src={HomeImage} alt="Home" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 25 }} />
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
      <div style={{ height: 25 }} />
      <div className="home-content-news">
        <div className="home-content-news-img-container">
          <div className="home-content-news-img">
            <img src={Maxxis} alt="gambar" />
          </div>
        </div>
        <div className="home-content-news-content">
          <div>
            <h2>
              7 Cara Memilih Ban motor Matic Tubeless Berkualitas Agar Awet
            </h2>
            <p>
              Ban motor oleh penggunanya sering dianggap mudah sekali dipilih.
              Padahal kenyataanya tidak, karena sebelumnya harus melakukan
              beberapa pertimbangan untuk membeli ban yang tepat. Apalagi jika
              ban yang dimaksud adalah untuk motor matic jenis tubeless.
              Melakukan pemilihan sebelum membeli ban matic ini penting, karena
              diluar sana banyak penjual ban yang bagus tapi kualitasnya tidak
              mumpuni. Selain itu, adanya beragam jenis ban juga perlu
              dipertimbangan. Untuk itu, berikut 7 cara memilih ban motor matic
              berkualitas agar lebih awet.
            </p>
          </div>
          <button className="btn-news">Lihat Berita</button>
        </div>
      </div>
      <div style={{ height: 25 }} />
    </>
  );
};

export default Home;
