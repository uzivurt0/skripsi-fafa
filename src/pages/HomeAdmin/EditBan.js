import React, { useState } from "react";
import "./HomeAdmin.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const EditBan = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const [ring, setRing] = useState(location.state.diameter);
  const [compound, setCompound] = useState(location.state.compounds);
  const [merk, setMerk] = useState(location.state.merek);
  const [ukuran, setUkuran] = useState(location.state.ukurans);
  const [profil, setProfil] = useState(location.state.profils);
  const [harga, setHarga] = useState(location.state.hargaa);

  const onSubmit = () => {
    console.log(merk, harga, ring, ukuran, profil, compound);
    axios.put("http://localhost:5000/api/editban", {
      id: location.state.id,
      merk_ban: merk,
      hargas: parseInt(harga),
      rings: parseInt(ring),
      ukurans: ukuran,
      profils: profil,
      compounds: compound,
    });

    navigate("/adminbantu1n/home");
  };

  return (
    <div className="home-admin">
      <div className="add-ban-container">
        <h3>Merk Ban</h3>
        <input
          type="text"
          className="add-ban-input"
          value={merk}
          onChange={(e) => setMerk(e.target.value)}
        />
      </div>
      <div className="add-ban-container">
        <h3>Ukuran</h3>
        <input
          type="text"
          className="add-ban-input"
          value={ukuran}
          onChange={(e) => setUkuran(e.target.value)}
        />
      </div>
      <div className="add-ban-container">
        <h3>Profil</h3>
        <input
          type="text"
          className="add-ban-input"
          value={profil}
          onChange={(e) => setProfil(e.target.value)}
        />
      </div>
      <div className="add-ban-container">
        <h3>Ring</h3>
        <select
          value={ring}
          className="add-ban-input"
          id="jenisMotor"
          onChange={(e) => setRing(e.target.value)}
        >
          <option value={""}></option>
          <option value={12}>12</option>
          <option value={14}>14</option>
          <option value={17}>17</option>
        </select>
      </div>
      <div className="add-ban-container">
        <h3>Harga</h3>
        <input
          type="text"
          className="add-ban-input"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
        />
      </div>
      <div className="add-ban-container">
        <h3>Jenis Compound</h3>
        <select
          value={compound}
          className="add-ban-input"
          id="jenisMotor"
          onChange={(e) => setCompound(e.target.value)}
        >
          <option value={""}></option>
          <option value={"Soft"}>Soft-Compound</option>
          <option value={"Medium"}>Medium-Compound</option>
          <option value={"Hard"}>Hard-Compound</option>
        </select>
      </div>
      <div className="add-ban-container">
        <h3>Gambar</h3>
        <input type="file" accept="image/" />
      </div>
      <button className="add-ban-btn" onClick={() => onSubmit()}>
        Submit
      </button>
    </div>
  );
};

export default EditBan;
