import React, { useState } from "react";
import "./forms.css";

import HomeImage from "../../assets/images/home image.png";
import { useNavigate } from "react-router-dom";

const Forms = () => {
  const navigate = useNavigate();
  const [jenis, setJenis] = useState("");
  const [ring, setRing] = useState("");
  const [price, setPrice] = useState("");
  const [usage, setUsage] = useState("");

  const onSubmit = (props) => {
    navigate("/result", {
      state: { jenis: jenis, diameter: ring, harga: price, penggunaan: usage },
    });
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
                <option value={"10"}>10</option>
                <option value={"12"}>12</option>
                <option value={"14"}>14</option>
                <option value={"17"}>17</option>
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
