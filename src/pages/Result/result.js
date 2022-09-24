import React from "react";
import "./result.css";
import CardResult from "../../components/card-result/card-result";
const Result = () => {
  return (
    <div className="result-container">
      <div className="result-content-container">
        <div className="result-content">
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
