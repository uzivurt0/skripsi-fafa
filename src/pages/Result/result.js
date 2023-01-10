import React, { useEffect, useState } from "react";
import "./result.css";
// import CardResult from "../../components/card-result/card-result";
import axios from "axios";
import Placeholder from "../../assets/images/imgPlaceholder.jpg";
import { useLocation } from "react-router-dom";
// import { v4 as uuid } from "uuid";

const Result = () => {
  const location = useLocation();
  // eslint-disable-next-line
  const [harga, setHarga] = useState(location.state.harga);
  // eslint-disable-next-line
  const [diameter, setDiameter] = useState(location.state.diameter);
  // eslint-disable-next-line
  const [ukuran, setUkuran] = useState(location.state.ukran);
  // eslint-disable-next-line
  const [compound, setCompound] = useState(location.state.compounds);
  const [data, setData] = useState([]);
  const [filtered, setfiltered] = useState([]);
  const [result, setResult] = useState([]);

  var jmlBobot = [];
  const [jmlBobotHrg, setJmlBobotHrg] = useState([]);
  // const [jmlBobotDiam, setJmlBobotDiam] = useState([0, 0, 0]);
  // eslint-disable-next-line
  const [jmlBobotPerunt, setJmlBobotPerunt] = useState([]);
  // const [jmlBobotUkuran, setJmlBobotUkuran] = useState([]);
  const finalFilter = [];

  var jmlNormalisasiKriteria = [];
  var jmlNormalisasiHrg = [];
  var jmlNormalisasiDiam = [];
  var jmlNormalisasiPeruntukan = [];
  var jmlNormalisasiUkuran = [];

  var prioritas = [];
  var prioritasHrg = [0, 0, 0];
  var prioritasDiam = [0, 0, 0];
  var prioritasPeruntukan = [];
  var prioritasUkuran = [];

  //Matriks Normalisasi
  var normalisasiBobot = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  var normalisasiUkuran = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];

  var normalisasiHrg = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  var normalisasiDiam = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  var normalisasiPeruntukan = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  //Matriks
  var bobotKriteria = [
    [1, 3, 5, 0.33333333333],
    [0.33333333333, 1, 1, 0.33333333333],
    [0.2, 1, 1, 0.2],
    [3, 3, 5, 1],
  ];

  const [bobotHarga, setBobotHarga] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [bobotDiam, setBobotDiam] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [bobotCompound, setBobotCompound] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const [bobotUkuran, setBobotUkuran] = useState([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]);

  useEffect(
    () => {
      var harga0;
      var harga1;

      // console.log(location);
      // setHarga(location.state.harga);
      // setDiameter(location.state.diameter);
      // setUkuran(location.state.ukran);
      // setCompound(location.state.compounds);
      if (harga === "1") {
        harga0 = 0;
        harga1 = 500000;
      } else if (harga === "2") {
        harga0 = 500000;
        harga1 = 1000000;
      } else if (harga === "3") {
        harga0 = 1000000;
        harga1 = 1000000000;
      }
      async function getAllBan() {
        try {
          const response = await axios.get(
            "https://skripsi-fafa-backend-production.up.railway.app/api/daftarban"
          );
          setData(response.data);
          setfiltered(
            data.filter(
              (item) =>
                (item.ring.toString() === diameter && item.ukuran === ukuran) ||
                (item.ring.toString() === diameter &&
                  item.ukuran === ukuran &&
                  item.harga >= harga0 &&
                  item.harga <= harga1)
            )
          );
          console.log(filtered);
          console.log(
            response.data.filter((item) => item.ring.toString() === diameter)
          );
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

      console.log(prioritas);
      //Harga
      if (harga === "1") {
        setBobotHarga([
          [1, 9, 9],
          [0.11111111111, 1, 1],
          [0.11111111111, 1, 1],
        ]);
      } else if (harga === "2") {
        console.log("masuk matriks");
        setBobotHarga([
          [0.11111111111, 1, 1],
          [1, 9, 9],
          [0.11111111111, 1, 1],
        ]);
      } else if (harga === "3") {
        setBobotHarga([
          [0.11111111111, 1, 1],
          [0.11111111111, 1, 1],
          [1, 9, 9],
        ]);
      }
      console.log(bobotHarga);
      var tempJmlBobotHrg = [];
      for (i = 0; i <= 2; i++) {
        tempJmlBobotHrg[i] = 0;
        for (j = 0; j <= 2; j++) {
          tempJmlBobotHrg[i] = tempJmlBobotHrg[i] + bobotHarga[i][j];
          console.log("masuk itung");
        }
      }
      setJmlBobotHrg(tempJmlBobotHrg);

      for (i = 0; i <= 2; i++) {
        jmlNormalisasiHrg[i] = 0;
        for (j = 0; j <= 2; j++) {
          normalisasiHrg[j][i] = bobotHarga[j][i] / jmlBobotHrg[j];
          jmlNormalisasiHrg[i] = jmlNormalisasiHrg[i] + normalisasiHrg[j][i];
        }
      }

      for (i = 0; i < jmlNormalisasiHrg.length; i++) {
        prioritasHrg[i] = jmlNormalisasiHrg[i] / 4;
      }

      //Diameter
      if (diameter === "12") {
        setBobotDiam([
          [1, 9, 9],
          [0.11111111111, 1, 1],
          [0.11111111111, 1, 1],
        ]);
      } else if (diameter === "14") {
        setBobotDiam([
          [1, 1, 0.11111111111],
          [1, 1, 0.11111111111],
          [9, 9, 1],
        ]);
      } else if (diameter === "17") {
        setBobotDiam([
          [1, 1, 1],
          [1, 1, 1],
          [0.11111111111, 9, 9],
        ]);
      }

      var tempJmlBobotDiam = [];
      for (i = 0; i <= 2; i++) {
        tempJmlBobotDiam[i] = 0;
        for (j = 0; j <= 2; j++) {
          console.log(bobotDiam[i][j]);
          tempJmlBobotDiam[i] = tempJmlBobotDiam[i] + bobotDiam[i][j];
          console.log(tempJmlBobotDiam);
        }
      }

      for (i = 0; i <= 2; i++) {
        jmlNormalisasiDiam[i] = 0;
        for (j = 0; j <= 2; j++) {
          normalisasiDiam[j][i] = bobotDiam[j][i] / tempJmlBobotDiam[j];
          jmlNormalisasiDiam[i] = jmlNormalisasiDiam[i] + normalisasiDiam[j][i];
        }
      }

      for (i = 0; i < jmlNormalisasiDiam.length; i++) {
        prioritasDiam[i] = jmlNormalisasiDiam[i] / 3;
      }
      console.log(normalisasiDiam);
      console.log(jmlNormalisasiDiam);
      console.log(prioritasDiam);
      //compound
      if (compound === "1") {
        setBobotCompound([
          [1, 0.11111111111, 0.11111111111],
          [9, 1, 1],
          [9, 1, 1],
        ]);
      } else if (compound === "2") {
        setBobotCompound([
          [1, 9, 1],
          [0.11111111111, 1, 0.11111111111],
          [1, 9, 1],
        ]);
      } else if (compound === "3") {
        setBobotCompound([
          [1, 1, 9],
          [1, 1, 9],
          [0.11111111111, 0.11111111111, 1],
        ]);
      }

      var tempJmlBobotPerunt = [];
      for (i = 0; i <= 2; i++) {
        tempJmlBobotPerunt[i] = 0;
        for (j = 0; j <= 2; j++) {
          tempJmlBobotPerunt[i] = tempJmlBobotPerunt[i] + bobotCompound[i][j];
        }
      }
      // setJmlBobotPerunt(tempJmlBobotPerunt);

      for (i = 0; i <= 2; i++) {
        jmlNormalisasiPeruntukan[i] = 0;
        for (j = 0; j <= 2; j++) {
          normalisasiPeruntukan[j][i] =
            bobotCompound[j][i] / tempJmlBobotPerunt[j];
          jmlNormalisasiPeruntukan[i] =
            jmlNormalisasiPeruntukan[i] + normalisasiPeruntukan[j][i];
        }
      }

      for (i = 0; i < jmlNormalisasiPeruntukan.length; i++) {
        prioritasPeruntukan[i] = jmlNormalisasiPeruntukan[i] / 4;
      }

      console.log(prioritasPeruntukan);

      if (ukuran === "90") {
        setBobotUkuran([
          [
            1, 0.11111111111, 0.11111111111, 0.11111111111, 0.11111111111,
            0.11111111111,
          ],
          [9, 1, 1, 1, 1, 1],
          [9, 1, 1, 1, 1, 1],
          [9, 1, 1, 1, 1, 1],
          [9, 1, 1, 1, 1, 1],
          [9, 1, 1, 1, 1, 1],
        ]);
      } else if (ukuran === "100") {
        setBobotUkuran([
          [1, 9, 1, 1, 1, 1],
          [
            0.11111111111, 1, 0.11111111111, 0.11111111111, 0.11111111111,
            0.11111111111,
          ],
          [1, 9, 1, 1, 1, 1],
          [1, 9, 1, 1, 1, 1],
          [1, 9, 1, 1, 1, 1],
          [1, 9, 1, 1, 1, 1],
        ]);
      } else if (ukuran === "110") {
        setBobotUkuran([
          [1, 1, 9, 1, 1, 1],
          [1, 1, 9, 1, 1, 1],
          [
            0.11111111111, 0.11111111111, 1, 0.11111111111, 0.11111111111,
            0.11111111111,
          ],
          [1, 1, 9, 1, 1, 1],
          [1, 1, 9, 1, 1, 1],
          [1, 1, 9, 1, 1, 1],
        ]);
      } else if (ukuran === "120") {
        setBobotUkuran([
          [1, 1, 1, 9, 1, 1],
          [1, 1, 1, 9, 1, 1],
          [1, 1, 1, 9, 1, 1],
          [
            0.11111111111, 0.11111111111, 0.11111111111, 1, 0.11111111111,
            0.11111111111,
          ],
          [1, 1, 1, 9, 1, 1],
          [1, 1, 1, 9, 1, 1],
        ]);
      } else if (ukuran === "130") {
        setBobotUkuran([
          [1, 1, 1, 1, 9, 1],
          [1, 1, 1, 1, 9, 1],
          [1, 1, 1, 1, 9, 1],
          [1, 1, 1, 1, 9, 1],
          [
            0.11111111111, 0.11111111111, 0.11111111111, 0.11111111111, 1,
            0.11111111111,
          ],
          [1, 1, 1, 1, 9, 1],
        ]);
      } else if (ukuran === "140") {
        setBobotUkuran([
          [1, 1, 1, 1, 1, 9],
          [1, 1, 1, 1, 1, 9],
          [1, 1, 1, 1, 1, 9],
          [1, 1, 1, 1, 1, 9],
          [1, 1, 1, 1, 1, 9],
          [
            0.11111111111, 0.11111111111, 0.11111111111, 0.11111111111,
            0.11111111111, 1,
          ],
        ]);
      }

      var tempJmlBobotUkuran = [];
      for (i = 0; i <= 5; i++) {
        tempJmlBobotUkuran[i] = 0;
        for (j = 0; j <= 5; j++) {
          tempJmlBobotUkuran[i] = tempJmlBobotUkuran[i] + bobotUkuran[i][j];
        }
      }
      // setJmlBobotUkuran(tempJmlBobotUkuran);

      for (i = 0; i <= 5; i++) {
        jmlNormalisasiUkuran[i] = 0;
        for (j = 0; j <= 5; j++) {
          normalisasiUkuran[j][i] = bobotUkuran[j][i] / tempJmlBobotUkuran[j];
          jmlNormalisasiUkuran[i] =
            jmlNormalisasiUkuran[i] + normalisasiUkuran[j][i];
          console.log(jmlNormalisasiUkuran);
        }
      }

      for (i = 0; i < jmlNormalisasiUkuran.length; i++) {
        prioritasUkuran[i] = jmlNormalisasiUkuran[i] / 4;
      }
      console.log(prioritasUkuran);

      for (i = 0; i < filtered.length; i++) {
        var perhitunganHarga = 0;
        var perhitunganRing = 0;
        var perhitunganUkuran = 0;
        var perhitunganCompound = 0;
        var totalPerhitungan = 0;
        if (filtered[i].harga <= 500000) {
          perhitunganHarga = prioritasHrg[0] * prioritas[1];
        } else if (filtered[i].harga > 500000 && filtered[i].harga <= 800000) {
          perhitunganHarga = prioritasHrg[1] * prioritas[1];
        } else {
          perhitunganHarga = prioritasHrg[2] * prioritas[1];
        }

        if (filtered[i].ring === 12) {
          perhitunganRing = prioritasDiam[0] * prioritas[0];
        } else if (filtered[i].ring === 14) {
          perhitunganRing = prioritasDiam[1] * prioritas[0];
        } else {
          perhitunganRing = prioritasDiam[2] * prioritas[0];
        }

        if (filtered[i].ukuran === "90") {
          perhitunganUkuran = prioritasUkuran[0] * prioritas[2];
        } else if (filtered[i].ukuran === "100") {
          perhitunganUkuran = prioritasUkuran[1] * prioritas[2];
        } else if (filtered[i].ukuran === "110") {
          perhitunganUkuran = prioritasUkuran[2] * prioritas[2];
        } else if (filtered[i].ukuran === "120") {
          perhitunganUkuran = prioritasUkuran[3] * prioritas[2];
        } else if (filtered[i].ukuran === "130") {
          perhitunganUkuran = prioritasUkuran[4] * prioritas[2];
        } else if (filtered[i].ukuran === "140") {
          perhitunganUkuran = prioritasUkuran[5] * prioritas[2];
        }

        if (filtered[i].compound === "Soft") {
          perhitunganCompound = prioritasPeruntukan[0] * prioritas[3];
        } else if (filtered[i].compound === "Medium") {
          perhitunganCompound = prioritasPeruntukan[1] * prioritas[3];
        } else {
          perhitunganCompound = prioritasPeruntukan[2] * prioritas[3];
        }

        totalPerhitungan =
          perhitunganHarga +
          perhitunganRing +
          perhitunganUkuran +
          perhitunganCompound;

        finalFilter.push({
          id: filtered[i].id,
          merk: filtered[i].merk_ban,
          hargas: filtered[i].harga,
          ring: filtered[i].ring,
          ukuran: filtered[i].ukuran,
          profil: filtered[i].profil,
          compouns: filtered[i].compound,
          imgs: filtered[i].image,
          totalHitung: totalPerhitungan,
        });

        setResult(finalFilter);
        console.log(finalFilter);
        console.log(result);
      }
    },
    // eslint-disable-next-line
    [data.length, filtered.length, finalFilter.length]
  );

  return (
    <div className="result-container">
      <div className="result-content-container">
        <div className="result-content">
          {result ? (
            <>
              {result
                .sort((a, b) => b.totalHitung - a.totalHitung)
                .slice(0, 4)
                .map((item) => (
                  <div className="card-result">
                    {item.imgs ? (
                      <div className="card-result-img">
                        <img src={item.imgs} alt="ResultImage" />
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
                        <p>{item.merk}</p>
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
                          <p>Rp. {item.hargas}</p>
                        </div>
                        <div className="card-result-description-detail-item">
                          <h3>Compound</h3>
                          <div style={{ height: 5 }}>&nbsp;</div>
                          <p>{item.compouns} Compound</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          ) : (
            <h1>Mohon maaf belum ada rekomendasi yang sesuai dengan mu :(</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
