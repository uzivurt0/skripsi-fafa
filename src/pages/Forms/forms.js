import React, { useState } from "react";
import "./forms.css";

import HomeImage from "../../assets/images/home image.png";

const Forms = () => {
  const [jenis, setJenis] = useState("");
  const [ring, setRing] = useState("");
  const [price, setPrice] = useState("");
  const [usage, setUsage] = useState("");

  const onSubmit = () => {
    console.log(jenis);
    console.log(ring);
    console.log(price);
    console.log(usage);
  };

  return (
    <div className="home-container">
      <div className="form-content-container">
        <div className="form-content">
          <div className="form-content-item">
            <div className="form-input">
              <label class="form-label" for="jenisMotor">
                JENIS MOTOR
              </label>
              <select
                className="form-selection"
                id="jenisMotor"
                onChange={(e) => setJenis(e.target.value)}
              >
                <option value={1}>Bebek</option>
                <option value={2}>Matic</option>
                <option value={3}>Sport</option>
              </select>
            </div>
            <div className="form-input">
              <label class="form-label" for="jenisMotor">
                UKURAN VELG
              </label>
              <select
                className="form-selection"
                id="jenisMotor"
                onChange={(e) => setRing(e.target.value)}
              >
                <option value={1}>10</option>
                <option value={2}>12</option>
                <option value={3}>14</option>
                <option value={4}>17</option>
              </select>
            </div>
            <div className="form-input">
              <label class="form-label" for="jenisMotor">
                HARGA
              </label>
              <select
                className="form-selection"
                id="jenisMotor"
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value={1}>Kurang dari Rp.400.000</option>
                <option value={2}>Rp.400.000 s/d Rp.600.000</option>
                <option value={3}>Diatas Rp. 600.000</option>
              </select>
            </div>
            <div className="form-input">
              <label class="form-label" for="jenisMotor">
                PERUNTUKAN
              </label>
              <select
                className="form-selection"
                id="jenisMotor"
                onChange={(e) => setUsage(e.target.value)}
              >
                <option value={1}>Harian</option>
                <option value={2}>Balap</option>
              </select>
            </div>
            <div className="form-input">
              <button className="home-button" onClick={() => onSubmit()}>
                Submit
              </button>
            </div>
          </div>
          <div className="form-image">
            <img src={HomeImage} alt="Ban" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
