import React, { useEffect, useState } from "react";
import "./HomeAdmin.css";
import CardResult from "../../components/card-result/card-result";
import Placeholder from "../../assets/images/banPlaceholder.jpg";
import axios from "axios";
import { v4 as uuid } from "uuid";
import DataTable from "react-data-table-component";

const HomeAdmin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getAllBan() {
      try {
        const response = await axios.get("http://localhost:5000/api/daftarban");
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getAllBan();

    const unique_id = uuid();
    console.log(unique_id.slice(0, 8));
  }, []);

  const banColumns = [
    {
      name: "Merk Ban",
      selector: (row) => row.merk_ban,
    },
    {
      name: "Ukuran Ban",
      selector: (row) => (
        <p>
          {row.ukuran}/{row.profil}-{row.ring}
        </p>
      ),
    },
    {
      name: "Harga Ban",
      selector: (row) => row.harga,
    },
    {
      name: "Peruntukan",
      selector: (row) => row.peruntukan,
    },
    {
      name: " ",
      selector: (row) => <button>Edit</button>,
    },
  ];

  return (
    <div className="home-admin">
      <DataTable columns={banColumns} data={data} />
    </div>
  );
};

export default HomeAdmin;
