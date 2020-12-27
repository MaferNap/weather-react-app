import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      ©2020{" "}
      <strong>
        <a
          href="https://github.com/MaferNap/weather-react-app"
          className="code"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
      </strong>{" "}
      built by{" "}
      <a
        href="https://github.com/MaferNap"
        className="profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mafer Navarrete
      </a>
    </div>
  );
}
