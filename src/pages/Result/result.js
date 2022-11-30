import React, { useEffect, useState } from "react";
import "./result.css";
import CardResult from "../../components/card-result/card-result";
import axios from "axios";
import Placeholder from "../../assets/images/banPlaceholder.jpg";

const Result = () => {
  const [data, setData] = useState([]);

  var jmlBobot = [];
  var jmlNormalisasiKriteria = [];
  var prioritas = [];
  var normalisasiBobot = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const bobotKriteria = [
    [1, 1 / 3, 1 / 5, 3],
    [3, 1, 1, 3],
    [5, 1, 1, 5],
    [1 / 3, 1 / 3, 1 / 5, 1],
  ];

  useEffect(() => {
    async function getAllBan() {
      try {
        const response = await axios.get("http://localhost:5000/api/daftarban");
        const data = JSON.parse(response.data);
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getAllBan();

    for (var i = 0; i <= 3; i++) {
      jmlBobot[i] = 0;
      for (var j = 0; j <= 3; j++) {
        jmlBobot[i] = jmlBobot[i] + bobotKriteria[i][j];
      }
    }

    for (var k = 0; k <= 3; k++) {
      jmlNormalisasiKriteria[k] = 0;
      for (var l = 0; l <= 3; l++) {
        normalisasiBobot[l][k] = bobotKriteria[l][k] / jmlBobot[l];
        jmlNormalisasiKriteria[k] =
          jmlNormalisasiKriteria[k] + normalisasiBobot[l][k];
      }
    }

    for (i = 0; i < jmlNormalisasiKriteria.length; i++) {
      prioritas[i] = jmlNormalisasiKriteria[i] / 4;
    }
  }, []);
  console.log(jmlBobot);
  console.log(jmlNormalisasiKriteria);
  console.log(normalisasiBobot);
  console.log(prioritas);
  return (
    <div className="result-container">
      <div className="result-content-container">
        <div className="result-content">
          {data.map((item) => (
            <div className="card-result">
              <div className="card-result-img">
                <img src={Placeholder} alt="ResultImage" />
              </div>
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
                      {item.ukuran} - {item.ring}
                    </p>
                  </div>
                  <div className="card-result-description-detail-item">
                    <h3>Harga</h3>
                    <div style={{ height: 5 }}>&nbsp;</div>
                    <p>Rp. {item.harga}</p>
                  </div>
                  <div className="card-result-description-detail-item">
                    <h3>Peruntukan</h3>
                    <div style={{ height: 5 }}>&nbsp;</div>
                    <p>{item.peruntukan}</p>
                  </div>
                  <div className="card-result-description-detail-item">
                    <h3>Motor yang sesuai</h3>
                    <div style={{ height: 5 }}>&nbsp;</div>
                    <p>Vario, Beat, Mio, Lexi, Soul GT, Xeon</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
