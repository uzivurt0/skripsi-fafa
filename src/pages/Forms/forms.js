import React from "react";
import "./forms.css";

import HomeImage from "../../assets/images/home image.png";

const Forms = () => {
  return (
    <div className="home-container">
      <div className="form-content-container">
        <div className="form-content">
          <div className="home-content-item">
            <div className="form-input">
              <label class="form-label" for="jenisMotor">
                JENIS MOTOR
              </label>
              <select id="jenisMotor">
                <option>Bebek</option>
                <option>Matic</option>
                <option>Sport</option>
              </select>
            </div>
            <div className="form-input">
              <label class="form-label" for="jenisMotor">
                UKURAN VELG
              </label>
              <select id="jenisMotor">
                <option>10</option>
                <option>12</option>
                <option>14</option>
                <option>17</option>
              </select>
            </div>
            <div className="form-input">
              <label class="form-label" for="jenisMotor">
                HARGA
              </label>
              <select id="jenisMotor">
                <option>Kurang dari Rp.400.000</option>
                <option>Rp.400.000 s/d Rp.600.000</option>
                <option>Diatas Rp. 600.000</option>
              </select>
            </div>
            <div className="form-input">
              <label class="form-label" for="jenisMotor">
                PERUNTUKAN
              </label>
              <select id="jenisMotor">
                <option>Harian</option>
                <option>Semi-Balap</option>
                <option>Balap</option>
              </select>
            </div>
            <div className="form-input">
              <button className="home-button">Submit</button>
            </div>
          </div>
          <img src={HomeImage} alt="Ban" />
        </div>
      </div>
    </div>
  );
};

export default Forms;
