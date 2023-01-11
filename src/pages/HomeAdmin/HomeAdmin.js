import React, { useEffect, useState } from "react";
import "./HomeAdmin.css";
import Placeholder from "../../assets/images/imgPlaceholder.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomeAdmin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(
    () => {
      async function getAllBan() {
        try {
          const response = await axios.get(
            "https://skripsi-fafa-backend-production.up.railway.app/api/daftarban"
          );
          setData(response.data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }

      getAllBan();
    },
    // eslint-disable-next-line
    []
  );

  const deleteData = (id) => {
    console.log(id);
    axios.delete(
      `https://skripsi-fafa-backend-production.up.railway.app/api/deleteban/${id}`
    );
    window.location.reload();
  };

  return (
    <div className="result-container">
      <div className="result-content-container">
        <div className="result-content">
          <div className="result-content-heading">
            <h2>Daftar Ban</h2>
            <button
              className="result-content-heading-button"
              onClick={() => navigate("/adminbantu1n/addban")}
            >
              Tambah
            </button>
          </div>
          {data.map((item) => (
            <div className="card-result">
              {item.image ? (
                <div className="card-result-img">
                  <img src={item.image} alt="ResultImage" />
                </div>
              ) : (
                <div className="card-result-img">
                  <img src={Placeholder} alt="ResultImage" />
                </div>
              )}

              <div className="card-result-description">
                <div className="card-result-description-name">
                  <h2>Merk Ban</h2>
                  <div style={{ height: 10 }}>&nbsp;</div>
                  <p>{item.merk_ban}</p>
                </div>
                <div className="card-result-description-detail">
                  <div className="card-result-description-detail-item">
                    <h3>Ukuran</h3>
                    <div style={{ height: 5 }}>&nbsp;</div>
                    <p>
                      {item.ukuran}/{item.profil} - {item.ring}
                    </p>
                  </div>
                  <div className="card-result-description-detail-item">
                    <h3>Harga</h3>
                    <div style={{ height: 5 }}>&nbsp;</div>
                    <p>Rp. {item.harga}</p>
                  </div>
                  <div className="card-result-description-detail-item">
                    <h3>Compound</h3>
                    <div style={{ height: 5 }}>&nbsp;</div>
                    <p>{item.compound} Compound</p>
                  </div>
                </div>
              </div>
              <div className="card-result-edit-delete">
                <button
                  onClick={() => {
                    deleteData(item.id);
                  }}
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
                <button
                  onClick={() =>
                    navigate("/adminbantu1n/editban", {
                      state: {
                        id: item.id,
                        merek: item.merk_ban,
                        diameter: item.ring,
                        hargaa: item.harga,
                        ukurans: item.ukuran,
                        profils: item.profil,
                        compounds: item.compound,
                      },
                    })
                  }
                >
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
