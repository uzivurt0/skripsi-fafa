import React from "react";
import "./result.css";
import CardResult from "../../components/card-result/card-result";
const Result = () => {
  return (
    <div className="home-container">
      <div className="home-content-container">
        <div className="home-content">
          <CardResult />
          <CardResult />
          <CardResult />
          <CardResult />
          <CardResult />
        </div>
      </div>
    </div>
  );
};

export default Result;
