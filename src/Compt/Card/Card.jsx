import React from "react";
import dummy from "./cardimg.png"
import "./Card.css"

export default function Card() {
  return (
    <>
      <section className="container-fluid">
        <div className="container">
          <div className="card">
            <img src={dummy} alt="" />
            <div className="spcingH">
              <div className="d-flex justify-content-between">
                <div className="txt">
                  <h3>Aiboi-meta</h3>
                  <h6>@koolkishansheth</h6>
                </div>
                <span>...</span>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="subhd">5.5ETH</h5> <h6>@</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
