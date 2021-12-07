import React from "react";
import "./Contract.css";

function Contract() {
  return (
      <>
    <div className="contract">
        <img src='https://thumbs.dreamstime.com/b/document-icon-vector-stack-paper-sheets-illustration-131104983.jpg' alt='test'/>
      <div className="contract__info">
        <p>Texto A</p>
        <p className="contract__title">
          <strong>Titulo</strong>
        </p>
      </div>
      <button>Ver</button>
      <button>Transferir</button>
    </div>
    </>
  );
}

export default Contract;
