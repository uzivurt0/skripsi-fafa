import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Homepages/home";
import Forms from "../pages/Forms/forms";
import Result from "../pages/Result/result";
import LoginAdmin from "../pages/LoginAdmin/loginAdmin";
import HomeAdmin from "../pages/HomeAdmin/HomeAdmin";
import AddBan from "../pages/HomeAdmin/AddBan";
import EditBan from "../pages/HomeAdmin/EditBan";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/result" element={<Result />} />
      <Route path="/adminbantu1n" element={<LoginAdmin />} />
      <Route path="/adminbantu1n/home" element={<HomeAdmin />} />
      <Route path="/adminbantu1n/addban" element={<AddBan />} />
      <Route path="/adminbantu1n/editban" element={<EditBan />} />
    </Routes>
  );
};

export default RouterPage;
