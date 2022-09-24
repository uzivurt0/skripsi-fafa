import React from "react";
import "../../pages/Result/result.css";
import CardResult from "../../components/card-result/card-result";
const HomeAdmin = () => {
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

export default HomeAdmin;
