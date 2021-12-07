import React from "react";
import Contract from "./Contract";
import "./SmartContracts.css";

function SmartContracts() {
  return (
      <>
      <h1>Smart Contract</h1>
      <h3>Filtrar por </h3>
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <Contract />
          <Contract />
          <Contract />
          <Contract />
          <Contract />
          <Contract />
          <Contract />
          <Contract />
        </div>
        <div className="home__row">
          <Contract />
          <Contract />
          <Contract />
          <Contract />
          <Contract />
          <Contract />
          <Contract />
          <Contract />
        </div>
      </div>
    </div>
    </>
  );
}

export default SmartContracts;
