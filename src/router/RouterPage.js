import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Homepages/home";
import Forms from "../pages/Forms/forms";
import Result from "../pages/Result/result";
const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export default RouterPage;
