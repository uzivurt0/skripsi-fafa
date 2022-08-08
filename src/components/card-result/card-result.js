import React from "react";
import Placeholder from "../../assets/images/banPlaceholder.jpg";

const CardResult = () => {
  return (
    <div className="card-result">
      <div className="card-result-img">
        <img src={Placeholder} alt="ResultImage" />
      </div>
      <div className="card-result-description">
        <div className="card-result-description-name">
          <h2>Merk Ban</h2>
          <div style={{ height: 10 }}>&nbsp;</div>
          <p>MAXXIS Green Devil</p>
        </div>
        <div className="card-result-description-detail">
          <div className="card-result-description-detail-item">
            <h3>Ukuran</h3>
            <div style={{ height: 5 }}>&nbsp;</div>
            <p>90/80 - 14</p>
          </div>
          <div className="card-result-description-detail-item">
            <h3>Harga</h3>
            <div style={{ height: 5 }}>&nbsp;</div>
            <p>Rp. 450.000,00</p>
          </div>
          <div className="card-result-description-detail-item">
            <h3>Peruntukan</h3>
            <div style={{ height: 5 }}>&nbsp;</div>
            <p>Harian, Balapan</p>
          </div>
          <div className="card-result-description-detail-item">
            <h3>Motor yang sesuai</h3>
            <div style={{ height: 5 }}>&nbsp;</div>
            <p>Vario, Beat, Mio, Lexi, Soul GT, Xeon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardResult;
