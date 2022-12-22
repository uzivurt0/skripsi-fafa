import React, { useEffect, useState } from "react";
import "./result.css";
// import CardResult from "../../components/card-result/card-result";
import axios from "axios";
import Placeholder from "../../assets/images/banPlaceholder.jpg";
import { useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";

const Result = () => {
  const location = useLocation();
  const [harga, setHarga] = useState("");
  const [diameter, setDiameter] = useState("");
  const [ukuran, setUkuran] = useState("");
  const [compound, setCompound] = useState("");
  const [data, setData] = useState([]);
  const [filtered, setfiltered] = useState([]);
  const [finalFilter, setFinalFilter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const id = uuid();

  var jmlBobot = [];
  const [jmlBobotHrg, setJmlBobotHrg] = useState([]);
  const [jmlBobotDiam, setJmlBobotDiam] = useState([]);
  const [jmlBobotPerunt, setJmlBobotPerunt] = useState([]);
  const [jmlBobotUkuran, setJmlBobotUkuran] = useState([]);

  var jmlNormalisasiKriteria = [];
  var jmlNormalisasiHrg = [];
  var jmlNormalisasiDiam = [];
  var jmlNormalisasiPeruntukan = [];

  var prioritas = [];
  var prioritasHrg = [];
  var prioritasDiam = [];
  var prioritasPeruntukan = [];

  //Matriks Normalisasi
  var normalisasiBobot = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
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
    [0, 0],
    [0, 0],
  ];

  //Matriks
  var bobotKriteria = [
    [1, 1 / 3, 1 / 5, 3],
    [3, 1, 1, 3],
    [5, 1, 1, 5],
    [1 / 3, 1 / 3, 1 / 5, 1],
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

  const countAHP = () => {
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

    //Harga
    if (harga) {
      if (harga === "1") {
        setBobotHarga([
          [1, 1 / 9, 1 / 9],
          [9, 1, 1],
          [9, 1, 1],
        ]);
      } else if (harga === "2") {
        console.log("masuk matriks");
        setBobotHarga([
          [1, 9, 1],
          [1 / 9, 1, 1 / 9],
          [1, 9, 1],
        ]);
      } else if (harga === "3") {
        setBobotHarga([
          [1, 1, 9],
          [1, 1, 9],
          [1 / 9, 1 / 9, 1],
        ]);
      }
    }

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
        [1, 1 / 9, 1 / 9],
        [9, 1, 1],
        [9, 1, 1],
      ]);
    } else if (diameter === "14") {
      setBobotDiam([
        [1, 9, 1],
        [1 / 9, 1, 1 / 9],
        [1, 9, 1],
      ]);
    } else if (diameter === "17") {
      setBobotDiam([
        [1, 1, 9],
        [1, 1, 9],
        [1 / 9, 1 / 9, 1],
      ]);
    }

    var tempJmlBobotDiam = [];
    for (i = 0; i <= 2; i++) {
      tempJmlBobotDiam[i] = 0;
      for (j = 0; j <= 2; j++) {
        tempJmlBobotDiam[i] = jmlBobotDiam[i] + bobotDiam[i][j];
      }
    }
    setJmlBobotDiam(tempJmlBobotDiam);

    for (i = 0; i <= 2; i++) {
      jmlNormalisasiDiam[i] = 0;
      for (j = 0; j <= 2; j++) {
        normalisasiDiam[j][i] = bobotDiam[j][i] / jmlBobotDiam[j];
        jmlNormalisasiDiam[i] = jmlNormalisasiDiam[i] + normalisasiDiam[j][i];
      }
    }

    for (i = 0; i < jmlNormalisasiDiam.length; i++) {
      prioritasDiam[i] = jmlNormalisasiDiam[i] / 4;
    }

    console.log(prioritasDiam);

    //compound
    if (compound === "1") {
      setBobotCompound([
        [1, 1 / 9, 1 / 9],
        [9, 1, 1],
        [9, 1, 1],
      ]);
    } else if (compound === "2") {
      setBobotCompound([
        [1, 9, 1],
        [1 / 9, 1, 1 / 9],
        [1, 9, 1],
      ]);
    } else if (compound === "3") {
      setBobotCompound([
        [1, 1, 9],
        [1, 1, 9],
        [1 / 9, 1 / 9, 1],
      ]);
    }

    var tempJmlBobotPerunt = [];
    for (i = 0; i <= 2; i++) {
      tempJmlBobotPerunt[i] = 0;
      for (j = 0; j <= 2; j++) {
        tempJmlBobotPerunt[i] = jmlBobotPerunt[i] + bobotCompound[i][j];
      }
    }
    setJmlBobotPerunt(tempJmlBobotPerunt);

    for (i = 0; i <= 1; i++) {
      jmlNormalisasiPeruntukan[i] = 0;
      for (j = 0; j <= 1; j++) {
        normalisasiPeruntukan[j][i] = bobotCompound[j][i] / jmlBobotPerunt[j];
        jmlNormalisasiPeruntukan[i] =
          jmlNormalisasiPeruntukan[i] + normalisasiPeruntukan[j][i];
      }
    }

    for (i = 0; i < jmlNormalisasiPeruntukan.length; i++) {
      prioritasPeruntukan[i] = jmlNormalisasiPeruntukan[i] / 4;
    }

    if (ukuran === "90") {
      setBobotUkuran([
        [1, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9],
        [9, 1, 1, 1, 1, 1],
        [9, 1, 1, 1, 1, 1],
        [9, 1, 1, 1, 1, 1],
        [9, 1, 1, 1, 1, 1],
        [9, 1, 1, 1, 1, 1],
      ]);
    } else if (ukuran === "100") {
      setBobotUkuran([
        [1, 9, 1, 1, 1, 1],
        [1 / 9, 1, 1 / 9, 1 / 9, 1 / 9, 1 / 9],
        [1, 9, 1, 1, 1, 1],
        [1, 9, 1, 1, 1, 1],
        [1, 9, 1, 1, 1, 1],
        [1, 9, 1, 1, 1, 1],
      ]);
    } else if (ukuran === "110") {
      setBobotUkuran([
        [1, 1, 9, 1, 1, 1],
        [1, 1, 9, 1, 1, 1],
        [1 / 9, 1 / 9, 1, 1 / 9, 1 / 9, 1 / 9],
        [1, 1, 9, 1, 1, 1],
        [1, 1, 9, 1, 1, 1],
        [1, 1, 9, 1, 1, 1],
      ]);
    } else if (ukuran === "120") {
      setBobotUkuran([
        [1, 1, 1, 9, 1, 1],
        [1, 1, 1, 9, 1, 1],
        [1, 1, 1, 9, 1, 1],
        [1 / 9, 1 / 9, 1 / 9, 1, 1 / 9, 1 / 9],
        [1, 1, 1, 9, 1, 1],
        [1, 1, 1, 9, 1, 1],
      ]);
    } else if (ukuran === "130") {
      setBobotUkuran([
        [1, 1, 1, 1, 9, 1],
        [1, 1, 1, 1, 9, 1],
        [1, 1, 1, 1, 9, 1],
        [1, 1, 1, 1, 9, 1],
        [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1, 1 / 9],
        [1, 1, 1, 1, 9, 1],
      ]);
    } else if (ukuran === "140") {
      setBobotUkuran([
        [1, 1, 1, 1, 1, 9],
        [1, 1, 1, 1, 1, 9],
        [1, 1, 1, 1, 1, 9],
        [1, 1, 1, 1, 1, 9],
        [1, 1, 1, 1, 1, 9],
        [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1],
      ]);
    }

    var tempJmlBobotUkuran = [];
    for (i = 0; i <= 5; i++) {
      tempJmlBobotUkuran[i] = 0;
      for (j = 0; j <= 5; j++) {
        tempJmlBobotUkuran[i] = jmlBobotUkuran[i] + bobotUkuran[i][j];
      }
    }
    setJmlBobotUkuran(tempJmlBobotUkuran);

    for (i = 0; i <= 1; i++) {
      jmlNormalisasiPeruntukan[i] = 0;
      for (j = 0; j <= 1; j++) {
        normalisasiPeruntukan[j][i] = bobotUkuran[j][i] / jmlBobotPerunt[j];
        jmlNormalisasiPeruntukan[i] =
          jmlNormalisasiPeruntukan[i] + normalisasiPeruntukan[j][i];
      }
    }

    for (i = 0; i < jmlNormalisasiPeruntukan.length; i++) {
      prioritasPeruntukan[i] = jmlNormalisasiPeruntukan[i] / 4;
    }
  };

  useEffect(() => {
    var harga0;
    var harga1;

    // console.log(location);
    setHarga(location.state.harga);
    setDiameter(location.state.diameter);
    setUkuran(location.state.ukran);
    setCompound(location.state.compounds);
    if (harga === "1") {
      harga0 = 0;
      harga1 = 400000;
    } else if (harga === "2") {
      harga0 = 400000;
      harga1 = 600000;
    } else if (harga === "3") {
      harga0 = 600000;
      harga1 = 1000000000;
    }
    async function getAllBan() {
      try {
        const response = await axios.get("http://localhost:5000/api/daftarban");
        setData(response.data);
        setfiltered(
          data.filter(
            (item) =>
              item.ring.toString() === diameter &&
              item.ukuran.toString() === ukuran
          )
        );

        setFinalFilter(
          filtered.filter(
            (item) => item.harga >= harga0 && item.harga <= harga1
          )
        );
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getAllBan();
    countAHP();

    // for (var i = 0; i <= 3; i++) {
    //   jmlBobot[i] = 0;
    //   for (var j = 0; j <= 3; j++) {
    //     jmlBobot[i] = jmlBobot[i] + bobotKriteria[i][j];
    //   }
    // }

    // for (var k = 0; k <= 3; k++) {
    //   jmlNormalisasiKriteria[k] = 0;
    //   for (var l = 0; l <= 3; l++) {
    //     normalisasiBobot[l][k] = bobotKriteria[l][k] / jmlBobot[l];
    //     jmlNormalisasiKriteria[k] =
    //       jmlNormalisasiKriteria[k] + normalisasiBobot[l][k];
    //   }
    // }

    // for (i = 0; i < jmlNormalisasiKriteria.length; i++) {
    //   prioritas[i] = jmlNormalisasiKriteria[i] / 4;
    // }

    // //Harga
    // if (harga) {
    //   if (harga === "1") {
    //     setBobotHarga([
    //       [1, 1 / 9, 1 / 9],
    //       [9, 1, 1],
    //       [9, 1, 1],
    //     ]);
    //   } else if (harga === "2") {
    //     console.log("masuk matriks");
    //     setBobotHarga([
    //       [1, 9, 1],
    //       [1 / 9, 1, 1 / 9],
    //       [1, 9, 1],
    //     ]);
    //   } else if (harga === "3") {
    //     setBobotHarga([
    //       [1, 1, 9],
    //       [1, 1, 9],
    //       [1 / 9, 1 / 9, 1],
    //     ]);
    //   }
    // }

    // var tempJmlBobotHrg = [];
    // for (i = 0; i <= 2; i++) {
    //   tempJmlBobotHrg[i] = 0;
    //   for (j = 0; j <= 2; j++) {
    //     tempJmlBobotHrg[i] = tempJmlBobotHrg[i] + bobotHarga[i][j];
    //     console.log("masuk itung");
    //   }
    // }
    // setJmlBobotHrg(tempJmlBobotHrg);

    // for (i = 0; i <= 2; i++) {
    //   jmlNormalisasiHrg[i] = 0;
    //   for (j = 0; j <= 2; j++) {
    //     normalisasiHrg[j][i] = bobotHarga[j][i] / jmlBobotHrg[j];
    //     jmlNormalisasiHrg[i] = jmlNormalisasiHrg[i] + normalisasiHrg[j][i];
    //   }
    // }

    // for (i = 0; i < jmlNormalisasiHrg.length; i++) {
    //   prioritasHrg[i] = jmlNormalisasiHrg[i] / 4;
    // }

    // //Diameter
    // if (diameter === "12") {
    //   setBobotDiam([
    //     [1, 1 / 9, 1 / 9],
    //     [9, 1, 1],
    //     [9, 1, 1],
    //   ]);
    // } else if (diameter === "14") {
    //   setBobotDiam([
    //     [1, 9, 1],
    //     [1 / 9, 1, 1 / 9],
    //     [1, 9, 1],
    //   ]);
    // } else if (diameter === "17") {
    //   setBobotDiam([
    //     [1, 1, 9],
    //     [1, 1, 9],
    //     [1 / 9, 1 / 9, 1],
    //   ]);
    // }

    // var tempJmlBobotDiam = [];
    // for (i = 0; i <= 2; i++) {
    //   tempJmlBobotDiam[i] = 0;
    //   for (j = 0; j <= 2; j++) {
    //     tempJmlBobotDiam[i] = jmlBobotDiam[i] + bobotDiam[i][j];
    //   }
    // }
    // setJmlBobotDiam(tempJmlBobotDiam);

    // for (i = 0; i <= 2; i++) {
    //   jmlNormalisasiDiam[i] = 0;
    //   for (j = 0; j <= 2; j++) {
    //     normalisasiDiam[j][i] = bobotDiam[j][i] / jmlBobotDiam[j];
    //     jmlNormalisasiDiam[i] = jmlNormalisasiDiam[i] + normalisasiDiam[j][i];
    //   }
    // }

    // for (i = 0; i < jmlNormalisasiDiam.length; i++) {
    //   prioritasDiam[i] = jmlNormalisasiDiam[i] / 4;
    // }

    // console.log(prioritasDiam);

    // //compound
    // if (compound === "1") {
    //   setBobotCompound([
    //     [1, 1 / 9, 1 / 9],
    //     [9, 1, 1],
    //     [9, 1, 1],
    //   ]);
    // } else if (compound === "2") {
    //   setBobotCompound([
    //     [1, 9, 1],
    //     [1 / 9, 1, 1 / 9],
    //     [1, 9, 1],
    //   ]);
    // } else if (compound === "3") {
    //   setBobotCompound([
    //     [1, 1, 9],
    //     [1, 1, 9],
    //     [1 / 9, 1 / 9, 1],
    //   ]);
    // }

    // var tempJmlBobotPerunt = [];
    // for (i = 0; i <= 2; i++) {
    //   tempJmlBobotPerunt[i] = 0;
    //   for (j = 0; j <= 2; j++) {
    //     tempJmlBobotPerunt[i] = jmlBobotPerunt[i] + bobotCompound[i][j];
    //   }
    // }
    // setJmlBobotPerunt(tempJmlBobotPerunt);

    // for (i = 0; i <= 1; i++) {
    //   jmlNormalisasiPeruntukan[i] = 0;
    //   for (j = 0; j <= 1; j++) {
    //     normalisasiPeruntukan[j][i] = bobotCompound[j][i] / jmlBobotPerunt[j];
    //     jmlNormalisasiPeruntukan[i] =
    //       jmlNormalisasiPeruntukan[i] + normalisasiPeruntukan[j][i];
    //   }
    // }

    // for (i = 0; i < jmlNormalisasiPeruntukan.length; i++) {
    //   prioritasPeruntukan[i] = jmlNormalisasiPeruntukan[i] / 4;
    // }

    // if (ukuran === "90") {
    //   setBobotUkuran([
    //     [1, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9],
    //     [9, 1, 1, 1, 1, 1],
    //     [9, 1, 1, 1, 1, 1],
    //     [9, 1, 1, 1, 1, 1],
    //     [9, 1, 1, 1, 1, 1],
    //     [9, 1, 1, 1, 1, 1],
    //   ]);
    // } else if (ukuran === "100") {
    //   setBobotUkuran([
    //     [1, 9, 1, 1, 1, 1],
    //     [1 / 9, 1, 1 / 9, 1 / 9, 1 / 9, 1 / 9],
    //     [1, 9, 1, 1, 1, 1],
    //     [1, 9, 1, 1, 1, 1],
    //     [1, 9, 1, 1, 1, 1],
    //     [1, 9, 1, 1, 1, 1],
    //   ]);
    // } else if (ukuran === "110") {
    //   setBobotUkuran([
    //     [1, 1, 9, 1, 1, 1],
    //     [1, 1, 9, 1, 1, 1],
    //     [1 / 9, 1 / 9, 1, 1 / 9, 1 / 9, 1 / 9],
    //     [1, 1, 9, 1, 1, 1],
    //     [1, 1, 9, 1, 1, 1],
    //     [1, 1, 9, 1, 1, 1],
    //   ]);
    // } else if (ukuran === "120") {
    //   setBobotUkuran([
    //     [1, 1, 1, 9, 1, 1],
    //     [1, 1, 1, 9, 1, 1],
    //     [1, 1, 1, 9, 1, 1],
    //     [1 / 9, 1 / 9, 1 / 9, 1, 1 / 9, 1 / 9],
    //     [1, 1, 1, 9, 1, 1],
    //     [1, 1, 1, 9, 1, 1],
    //   ]);
    // } else if (ukuran === "130") {
    //   setBobotUkuran([
    //     [1, 1, 1, 1, 9, 1],
    //     [1, 1, 1, 1, 9, 1],
    //     [1, 1, 1, 1, 9, 1],
    //     [1, 1, 1, 1, 9, 1],
    //     [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1, 1 / 9],
    //     [1, 1, 1, 1, 9, 1],
    //   ]);
    // } else if (ukuran === "140") {
    //   setBobotUkuran([
    //     [1, 1, 1, 1, 1, 9],
    //     [1, 1, 1, 1, 1, 9],
    //     [1, 1, 1, 1, 1, 9],
    //     [1, 1, 1, 1, 1, 9],
    //     [1, 1, 1, 1, 1, 9],
    //     [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1],
    //   ]);
    // }

    // var tempJmlBobotUkuran = [];
    // for (i = 0; i <= 5; i++) {
    //   tempJmlBobotUkuran[i] = 0;
    //   for (j = 0; j <= 5; j++) {
    //     tempJmlBobotUkuran[i] = jmlBobotUkuran[i] + bobotUkuran[i][j];
    //   }
    // }
    // setJmlBobotUkuran(tempJmlBobotUkuran);

    // for (i = 0; i <= 1; i++) {
    //   jmlNormalisasiPeruntukan[i] = 0;
    //   for (j = 0; j <= 1; j++) {
    //     normalisasiPeruntukan[j][i] = bobotUkuran[j][i] / jmlBobotPerunt[j];
    //     jmlNormalisasiPeruntukan[i] =
    //       jmlNormalisasiPeruntukan[i] + normalisasiPeruntukan[j][i];
    //   }
    // }

    // for (i = 0; i < jmlNormalisasiPeruntukan.length; i++) {
    //   prioritasPeruntukan[i] = jmlNormalisasiPeruntukan[i] / 4;
    // }
  }, [filtered.id, finalFilter.id]);

  console.log(filtered);
  console.log(finalFilter);
  return (
    <div className="result-container">
      <div className="result-content-container">
        <div className="result-content">
          {filtered.slice(0, 4).map((item, index) => (
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
                    <p>Medium Compound</p>
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
