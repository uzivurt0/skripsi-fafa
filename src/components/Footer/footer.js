import React from "react";
import IconFooter from "../../assets/images/icon ban putih.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-main">
        <div className="footer-logo">
          <img src={IconFooter} alt="icon footer" />
          <p>&copy; BAN-TUIN</p>
        </div>
        <div className="footer-text">
          <p>&copy; Muhammad Faisal Farhan</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
