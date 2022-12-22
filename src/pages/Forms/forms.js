import React, { useState } from "react";
import "./forms.css";

import HomeImage from "../../assets/images/icon ban.png";
import { useNavigate } from "react-router-dom";

const Forms = () => {
  const navigate = useNavigate();
  const [ukuran, setUkuran] = useState("");
  const [ring, setRing] = useState("");
  const [price, setPrice] = useState("");
  const [compound, setCompound] = useState("");

  const onSubmit = (props) => {
    navigate("/result", {
      state: {
        diameter: ring,
        harga: price,
        ukran: ukuran,
        compounds: compound,
      },
    });
    console.log(ring);
    console.log(price);
  };

  return (
    <div className="home-container">
      <div className="form-content-container">
        <div className="form-content">
          <div className="form-image">
            <img src={HomeImage} alt="Ban" />
          </div>
          <div className="form-content-item">
            {/* <div className="form-input">
              <label class="form-label" for="jenisMotor">
                JENIS MOTOR
              </label>
              <select
                className="form-selection"
                id="jenisMotor"
                onChange={(e) => setJenis(e.target.value)}
              >
                <option value={"bebek"}>Bebek</option>
                <option value={"matic"}>Matic</option>
                <option value={"sport"}>Sport</option>
              </select>
            </div> */}
            <div className="form-input">
              <label class="form-label" for="jenisMotor">
                DIAMETER VELG
              </label>
              <select
                className="form-selection"
                id="jenisMotor"
                onChange={(e) => setRing(e.target.value)}
              >
                <option value={12}>12</option>
                <option value={14}>14</option>
                <option value={17}>17</option>
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
                LEBAR
              </label>
              <select
                className="form-selection"
                id="jenisMotor"
                onChange={(e) => setUkuran(e.target.value)}
              >
                <option value={90}>90</option>
                <option value={100}>100</option>
                <option value={110}>110</option>
                <option value={120}>120</option>
                <option value={130}>130</option>
                <option value={140}>140</option>
              </select>
            </div>
            <div className="form-input">
              <label class="form-label" for="jenisMotor">
                JENIS COMPOUND
              </label>
              <select
                className="form-selection"
                id="jenisMotor"
                onChange={(e) => setCompound(e.target.value)}
              >
                <option value={1}>Soft-Compound</option>
                <option value={2}>Medium-Compound</option>
                <option value={3}>Hard-Compound</option>
              </select>
            </div>
            <div className="form-input">
              <button className="home-button" onClick={() => onSubmit()}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
