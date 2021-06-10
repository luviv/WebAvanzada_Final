import React from "react";
import "./index.css";

interface InvoiceProps {
  wheels: string;
  truck: string;
  table: string;
  sandpaper: string;
}

function Invoice(props: InvoiceProps) {
  return (
    <div className="invoice-container">
      {props.wheels !== "" ? (
        <div className="invoice-container-image">
          <img src={props.wheels} />
        </div>
      ) : (
        ""
      )}
    {props.truck !== "" ?<div className="invoice-container-image">
        <img src={props.truck} />
      </div>:''}
      {props.table !== "" ? <div className="invoice-container-image">
        <img src={props.table} />
      </div>:''}
     {props.sandpaper!==""? <div className="invoice-container-image">
        <img src={props.sandpaper} />
      </div>:''}
     
    </div>
  );
}

export default Invoice;
