import React, { useState } from "react";
import "./HomeAdmin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBan = () => {
  const navigate = useNavigate();
  const [ring, setRing] = useState("");
  const [compound, setCompound] = useState("");
  const [merk, setMerk] = useState("");
  const [ukuran, setUkuran] = useState("");
  const [profil, setProfil] = useState("");
  const [harga, setHarga] = useState("");
  const [image, setImage] = useState("");

  const onSubmit = () => {
    const unique_id = Math.floor(Math.random() * 1000000);
    console.log(unique_id);
    const formData = new FormData();
    formData.append("id", unique_id);
    formData.append("merk_ban", merk);
    formData.append("hargas", parseInt(harga));
    formData.append("ukuran", ukuran);
    formData.append("rings", parseInt(ring));
    formData.append("profils", profil);
    formData.append("compounds", compound);
    formData.append("image", image);
    axios
      .post(
        "https://skripsi-fafa-backend-production.up.railway.app/api/addban",
        {
          formData,
        }
      )
      .then((res) => res.json());
    navigate("/adminbantu1n/home");
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
          <option value={"Soft"}>Soft-Compound</option>
          <option value={"Medium"}>Medium-Compound</option>
          <option value={"Hard"}>Hard-Compound</option>
        </select>
      </div>
      <div className="add-ban-container">
        <h3>Gambar</h3>
        <input
          type="file"
          accept="image/"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button className="add-ban-btn" onClick={() => onSubmit()}>
        Submit
      </button>
    </div>
  );
};

export default AddBan;
