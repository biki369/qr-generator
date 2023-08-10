import React, { useState } from "react";
import "./App.css";
import { QRCodeGenerator } from "../src/components/api/qr";
function App() {
  const [qrData, setQrData] = useState("example.com");
  const [qrSize, setQrSize] = useState("200x200");
  return (
    <>
      <div className="app">
        <div className="container">
          <h1 className="qr-title">QR Code Generator</h1>
          <div className="input-container">
            <label className="input-label">QR URL:</label>
            <input
              type="text"
              className="input-field"
              value={qrData}
              onChange={(e) => setQrData(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label className="input-label">QR Size:</label>
            <input
              type="text"
              className="input-field"
              value={qrSize}
              onChange={(e) => setQrSize(e.target.value)}
            />
          </div>

          <div className="generated-qrCode">
            <img
              src={QRCodeGenerator(qrData, qrSize)}
              alt=""
              className="qr-img"
            />
          </div>
        </div>
      </div>

      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default App;
