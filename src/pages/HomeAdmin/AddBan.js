import React, { useEffect, useState } from "react";
import "./HomeAdmin.css";
import CardResult from "../../components/card-result/card-result";
import Placeholder from "../../assets/images/banPlaceholder.jpg";
import axios, { Axios } from "axios";
import { v4 as uuid } from "uuid";
import DataTable from "react-data-table-component";

const AddBan = () => {
  const [ring, setRing] = useState("");
  const [compound, setCompound] = useState("");
  const [merk, setMerk] = useState("");
  const [ukuran, setUkuran] = useState("");
  const [profil, setProfil] = useState("");
  const [harga, setHarga] = useState("");

  const onSubmit = () => {
    const unique_id = uuid();
    axios.post("http://localhost:5000/api/addban", {
      id: unique_id.slice(0, 8),
      merk_ban: merk,
      hargas: parseInt(harga),
      rings: parseInt(ring),
      ukurans: ukuran,
      profils: profil,
      compounds: compound,
    });
  };

  return (
    <div className="home-admin">
      <div className="add-ban-container">
        <h3>Merk Ban</h3>
        <input
          type="text"
          className="add-ban-input"
          onChange={(e) => setMerk(e.target.value)}
        />
      </div>
      <div className="add-ban-container">
        <h3>Ukuran</h3>
        <input
          type="text"
          className="add-ban-input"
          onChange={(e) => setUkuran(e.target.value)}
        />
      </div>
      <div className="add-ban-container">
        <h3>Profil</h3>
        <input
          type="text"
          className="add-ban-input"
          onChange={(e) => setProfil(e.target.value)}
        />
      </div>
      <div className="add-ban-container">
        <h3>Ring</h3>
        <select
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
          onChange={(e) => setHarga(e.target.value)}
        />
      </div>
      <div className="add-ban-container">
        <h3>Jenis Compound</h3>
        <select
          className="add-ban-input"
          id="jenisMotor"
          onChange={(e) => setCompound(e.target.value)}
        >
          <option value={""}></option>
          <option value={"Soft-Compound"}>Soft-Compound</option>
          <option value={"Medium-Compound"}>Medium-Compound</option>
          <option value={"Hard-Compound"}>Hard-Compound</option>
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

export default AddBan;
