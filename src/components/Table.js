import React from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import "./Table.css";

const dataFintech = [
  {
    fintechId: "1",
    address: "0xB7e390864a90b7b923C9f9310C6F98aafE43F707",
    NFT: "125",
  },
  {
    fintechId: "2",
    address: "0xB7e390864a90b7b923C9f9310C6F98aafE43F707",
    NFT: "30",
  },
  {
    fintechId: "3",
    address: "0xB7e390864a90b7b923C9f9310C6F98aafE43F707",
    NFT: "45",
  },
];

const dataMinter = [
  {
    nftId: "1",
    address: "0xB7e390864a90b7b923C9f9310C6F98aafE43F707",
    minted: "0x148d2fceac5b7834b79f1b2d69",
  },
  {
    nftId: "2",
    address: "0xB7e390864a90b7b923C9f9310C6F98aafE43F707",
    minted: "0x148d2fceac5b7834b79f1b2d69",
  },
  {
    nftId: "3",
    address: "0xB7e390864a90b7b923C9f9310C6F98aafE43F707",
    minted: "0x148d2fceac5b7834b79f1b2d69",
  },
];

const options = [{ name: "Fintechs" }, { name: "Minters" }];

function Table() {
  return (
    <>
      <button className="table__button">FINTECH</button>
      <button className="table__button">Minter</button>
      <div className="Table">
        <table>
          <tr>
            <th>Fintech ID</th>
            <th>ADDRESS</th>
            <th>Cantidad de NFT</th>
          </tr>
          {dataFintech.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.fintechId}</td>
                <td>{val.address} <ContentCopyIcon /></td>
                <td>{val.NFT} <button className='button__view'>Ver</button></td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Table;
